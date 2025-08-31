import {getCompanion} from "@/lib/actions/companions.action";
import {currentUser} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import {getSubjectColor} from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/CompanionComponent";
import {recentSessions} from "@/constants";

interface CompanionSessionPageProps {
    params: Promise<{ id: string}>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
    const { id } = await params;
    const user = await currentUser();

    if(!user) redirect('/sign-in');

    // Try to get from database first, fallback to mock data
    let companion;
    try {
        companion = await getCompanion(id);
        
        // Verify the companion belongs to the current user
        if (companion && companion.author !== user.id) {
            // User doesn't own this companion, check if it's a mock companion they can access
            const mockCompanion = recentSessions.find(session => session.id === id);
            if (!mockCompanion) {
                redirect('/companions'); // Redirect if trying to access someone else's companion
            }
            companion = null; // Force to use mock data
        }
    } catch (error) {
        console.error('Error fetching companion from database:', error);
    }

    // If no companion from database, use mock data
    if (!companion) {
        companion = recentSessions.find(session => session.id === id);
    }

    // If still no companion found, redirect
    if (!companion) {
        redirect('/companions');
    }

    const { name, subject, topic, duration } = companion;

    return (
        <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject)}}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">
                                {name}
                            </p>
                            <div className="subject-badge max-sm:hidden">
                                {subject}
                            </div>
                        </div>
                        <p className="text-lg">{topic}</p>
                    </div>
                </div>
                <div className="items-start text-2xl max-md:hidden">
                    {duration} minutes
                </div>
            </article>

            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    )
}

export default CompanionSession