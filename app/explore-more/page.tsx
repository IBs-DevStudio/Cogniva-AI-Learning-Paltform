import CompanionCard from "@/components/CompanionCard";
import { recentSessions } from "@/constants";

const ExploreMore = () => {
  return (
    <main>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1>Explore New Subjects</h1>
          <p className="text-lg text-gray-600">
            Discover our latest AI companions covering cutting-edge topics and essential skills
          </p>
        </div>

        <section className="companions-grid">
          {recentSessions.map((session) => (
            <CompanionCard
              key={session.id}
              id={session.id}
              name={session.name}
              topic={session.topic}
              subject={session.subject}
              duration={session.duration}
            />
          ))}
        </section>

        <section className="mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">What Makes These Subjects Special?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🎯 Interview Prep</h3>
                <p className="text-sm">Master behavioral questions and technical interviews with AI-powered practice sessions.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">💻 Advanced Coding</h3>
                <p className="text-sm">Level up your programming skills with data structures, algorithms, and best practices.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🔬 CS Fundamentals</h3>
                <p className="text-sm">Deep dive into computer science concepts like operating systems and system design.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">📊 Advanced Math</h3>
                <p className="text-sm">Explore complex mathematical concepts with personalized explanations and examples.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🗣️ Communication</h3>
                <p className="text-sm">Improve your public speaking, presentation, and interpersonal communication skills.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🤖 Machine Learning</h3>
                <p className="text-small">Understand AI and ML concepts from neural networks to deep learning applications.</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ExploreMore;
