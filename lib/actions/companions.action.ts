'use server';

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();

    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}

export const getAllCompanions = async ({ limit = 10, page = 1, subject, topic }: GetAllCompanions) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();
    
    // Filter by current user
    if (userId) {
        query = query.eq('author', userId);
    }

    if(subject && topic) {
        query = query.ilike('subject', `%${subject}%`)
            .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    } else if(subject) {
        query = query.ilike('subject', `%${subject}%`)
    } else if(topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    }

    query = query.range((page - 1) * limit, page * limit - 1);

    const { data: companions, error } = await query;

    if(error) throw new Error(error.message);

    return companions;
}

export const getCompanion = async (id: string) => {
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('id', id);

    if(error) return console.log(error);

    return data[0];
}

export const addToSessionHistory = async (companionId: string) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();
    
    // Check if companionId is a valid UUID (database companions) or mock data
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    
    let actualCompanionId = companionId;
    
    if (!uuidRegex.test(companionId)) {
        // This is mock data, we need to create a companion in the database first
        const { recentSessions } = await import('@/constants');
        const mockCompanion = recentSessions.find(session => session.id === companionId);
        
        if (mockCompanion) {
            // Create the companion in the database
            const { data: newCompanion, error: createError } = await supabase
                .from('companions')
                .insert({
                    name: mockCompanion.name,
                    subject: mockCompanion.subject,
                    topic: mockCompanion.topic,
                    voice: mockCompanion.voice,
                    style: mockCompanion.style,
                    duration: mockCompanion.duration,
                    author: userId,
                })
                .select()
                .single();
            
            if (createError) {
                console.error('Failed to create companion from mock data:', createError);
                return null;
            }
            
            actualCompanionId = newCompanion.id;
        } else {
            console.warn('Mock companion not found:', companionId);
            return null;
        }
    }
    
    // Add to session history
    const { data, error } = await supabase.from('session_history')
        .insert({
            companion_id: actualCompanionId,
            user_id: userId,
        })

    if(error) throw new Error(error.message);

    return data;
}

export const getRecentSessions = async (limit = 10) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();
    
    let query = supabase
        .from('session_history')
        .select(`companions:companion_id (*)`)
        .order('created_at', { ascending: false })
        .limit(limit);
    
    // Filter by current user
    if (userId) {
        query = query.eq('user_id', userId);
    }
    
    const { data, error } = await query;

    if(error) throw new Error(error.message);

    return data.map(({ companions }) => companions);
}

export const getUserSessions = async (userId: string, limit = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`companions:companion_id (*)`)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

    if(error) throw new Error(error.message);

    return data.map(({ companions }) => companions);
}

export const getUserCompanions = async (userId: string) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('author', userId)

    if(error) throw new Error(error.message);

    return data;
}

export const newCompanionPermissions = async () => {
    const { userId, has } = await auth();
    const supabase = createSupabaseClient();

    let limit = 3; // Default limit for basic plan users

    if(has({ plan: 'pro' })) {
        return true;
    } else if(has({ feature: "10_companion_limit" })) {
        limit = 10;
    } else if(has({ feature: "3_companion_limit" })) {
        limit = 3;
    }
    // If no specific feature is found, default to 3 for basic users

    const { data, error } = await supabase
        .from('companions')
        .select('id', { count: 'exact' })
        .eq('author', userId)

    if(error) throw new Error(error.message);

    const companionCount = data?.length;

    if(companionCount >= limit) {
        return false
    } else {
        return true;
    }
}

// // Bookmarks
// export const addBookmark = async (companionId: string, path: string) => {
//   const { userId } = await auth();
//   if (!userId) return;
//   const supabase = createSupabaseClient();
//   const { data, error } = await supabase.from("bookmarks").insert({
//     companion_id: companionId,
//     user_id: userId,
//   });
//   if (error) {
//     throw new Error(error.message);
//   }
//   // Revalidate the path to force a re-render of the page

//   revalidatePath(path);
//   return data;
// };

// export const removeBookmark = async (companionId: string, path: string) => {
//   const { userId } = await auth();
//   if (!userId) return;
//   const supabase = createSupabaseClient();
//   const { data, error } = await supabase
//     .from("bookmarks")
//     .delete()
//     .eq("companion_id", companionId)
//     .eq("user_id", userId);
//   if (error) {
//     throw new Error(error.message);
//   }
//   revalidatePath(path);
//   return data;
// };

// // It's almost the same as getUserCompanions, but it's for the bookmarked companions
// export const getBookmarkedCompanions = async (userId: string) => {
//   const supabase = createSupabaseClient();
//   const { data, error } = await supabase
//     .from("bookmarks")
//     .select(`companions:companion_id (*)`) // Notice the (*) to get all the companion data
//     .eq("user_id", userId);
//   if (error) {
//     throw new Error(error.message);
//   }
//   // We don't need the bookmarks data, so we return only the companions
//   return data.map(({ companions }) => companions);
// };