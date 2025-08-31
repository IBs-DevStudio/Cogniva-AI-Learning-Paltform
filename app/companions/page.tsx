import {getAllCompanions} from "@/lib/actions/companions.action";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import SearchInput from "@/components/SearchInputs";
import SubjectFilter from "@/components/SubjectFilter";
import {recentSessions} from "@/constants";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : '';
    const topic = filters.topic ? filters.topic : '';

    let companions;
    
    try {
        companions = await getAllCompanions({ subject, topic });
        // Only show actual database companions, no fallback to mock data
        if (!companions) {
            companions = [];
        }
    } catch (error) {
        console.warn('Failed to fetch companions from database:', error);
        companions = [];
    }

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilter />
                </div>
            </section>
            <section className="companions-grid">
                {companions.length > 0 ? (
                    companions.map((companion) => (
                        <CompanionCard
                            key={companion.id}
                            {...companion}
                            color={getSubjectColor(companion.subject)}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="bg-gray-100 rounded-lg p-8 max-w-md">
                            <h3 className="text-xl font-semibold mb-4">No Companions Yet</h3>
                            <p className="text-gray-600 mb-6">
                                You haven't created any companions yet. Create your first AI tutor to get started!
                            </p>
                            <a href="/companions/new" className="btn-primary inline-block">
                                Create Your First Companion
                            </a>
                        </div>
                    </div>
                )}
            </section>
        </main>
    )
}

export default CompanionsLibrary