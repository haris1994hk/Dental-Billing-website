export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 animate-fade-in">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-10 animate-fade-in-up">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Our Mission</h2>
          <p className="text-blue-700">To empower dental practices with the most reliable, automated insurance verification and EOB payment posting tools, saving time and reducing errors.</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Why Choose Us?</h2>
          <ul className="list-disc ml-6 text-blue-700 space-y-2">
            <li>Created by independent dentists and technologists</li>
            <li>Trusted by practices nationwide</li>
            <li>Real-world workflow integration</li>
            <li>Dedicated support and onboarding</li>
          </ul>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-8 shadow animate-fade-in-up">
        <h3 className="text-xl font-bold mb-4 text-blue-700">Meet Our Team</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-3xl mb-2">🦷</div>
            <span className="font-semibold">Dr. Sara Smith</span>
            <span className="text-zinc-500 text-sm">Founder & Dentist</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-3xl mb-2">💻</div>
            <span className="font-semibold">Alex Lee</span>
            <span className="text-zinc-500 text-sm">Lead Developer</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-green-200 flex items-center justify-center text-3xl mb-2">📞</div>
            <span className="font-semibold">Jamie Patel</span>
            <span className="text-zinc-500 text-sm">Support Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
}
