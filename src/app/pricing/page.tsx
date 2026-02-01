export default function Pricing() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 animate-fade-in">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white rounded-xl shadow p-6 animate-fade-in-up flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Starter</h2>
          <div className="text-3xl font-bold mb-2">$99<span className="text-base font-normal">/mo</span></div>
          <ul className="text-blue-700 mb-4 space-y-1">
            <li>✔ Insurance Verification</li>
            <li>✔ Guided Onboarding</li>
            <li>✔ Email Support</li>
          </ul>
          <button className="px-6 py-2 rounded-full bg-red-40000 text-white font-semibold hover:bg-blue-800 transition">Get Started</button>
        </div>
        <div className="bg-white rounded-xl shadow p-6 animate-fade-in-up flex flex-col items-center border-2 border-blue-700 scale-105">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Pro</h2>
          <div className="text-3xl font-bold mb-2">$199<span className="text-base font-normal">/mo</span></div>
          <ul className="text-blue-700 mb-4 space-y-1">
            <li>✔ Everything in Starter</li>
            <li>✔ EOB Payment Posting</li>
            <li>✔ Priority Support</li>
          </ul>
          <button className="px-6 py-2 rounded-full bg-red-40000 text-white font-semibold hover:bg-blue-800 transition">Get Started</button>
        </div>
        <div className="bg-white rounded-xl shadow p-6 animate-fade-in-up flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Enterprise</h2>
          <div className="text-3xl font-bold mb-2">Custom</div>
          <ul className="text-blue-700 mb-4 space-y-1">
            <li>✔ All Pro Features</li>
            <li>✔ Custom Integrations</li>
            <li>✔ Dedicated Manager</li>
          </ul>
          <button className="px-6 py-2 rounded-full bg-red-40000 text-white font-semibold hover:bg-blue-800 transition">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
