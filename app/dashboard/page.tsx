import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions} from "@/lib/actions/companions.action";
import {getSubjectColor} from "@/lib/utils";

const HomePage = async () => {
    let companions: Companion[] = [];
    let recentSessionsCompanions: Companion[] = [];
   
    
    // For home page, show featured companions from database
    try {
        companions = await getAllCompanions({ limit: 3 });
        // If no companions from database, show mock data as examples
        if (!companions || companions.length === 0) {
            companions = recentSessions.slice(0, 3);
        }
    } catch (error) {
        console.warn('Failed to fetch featured companions, using mock data:', error);
        companions = recentSessions.slice(0, 3);
    }
    
    try {
        recentSessionsCompanions = await getRecentSessions(10);
        // Only show mock data if there are absolutely no database sessions
        if (!recentSessionsCompanions || recentSessionsCompanions.length === 0) {
            recentSessionsCompanions = [];
        }
    } catch (error) {
        // If database fails, show empty
        console.warn('Failed to fetch recent sessions from database:', error);
        recentSessionsCompanions = [];
    }

  return (
    <main>
      <h1>Featured Companions</h1>

        <section className="home-section">
            {companions.map((companion) => (
                <CompanionCard
                    key={companion.id}
                    {...companion}
                    color={getSubjectColor(companion.subject)}
                />
            ))}

        </section>
        <section className="home-section">
            {recentSessionsCompanions.length > 0 ? (
                <CompanionsList
                    title="Recently completed sessions"
                    companions={recentSessionsCompanions}
                    classNames="w-2/3 max-lg:w-full"
                />
            ) : (
                <div className="w-2/3 max-lg:w-full">
                    <h2 className="font-bold text-3xl mb-4">Recently completed sessions</h2>
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                        <p className="text-gray-600">
                            No sessions completed yet. Start a session with any companion to see your history here!
                        </p>
                    </div>
                </div>
            )}
            <CTA />
        </section>
    </main>
  )
}

export default HomePage
