export default function Consultation() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 flex flex-col justify-center px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Get Your Billing Sorted Today with Dental Billing Aid</h2>
            <p className="muted mb-6">Sign up and get your consultation scheduled. We have top professionals from the dental industry on board who can guide through all your problems and offer exciting services!</p>

            <div className="mt-4">
              <img src="/images/free.jpg" alt="Doctor" className="w-full max-w-md object-cover rounded-lg shadow-lg" />
            </div>
          </div>

          <aside className="md:col-span-1 bg-blue-700 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl !text-white font-extrabold mb-4">Get a Free Consultation!</h3>
            <p className="text-white mb-6">We are ready to answer right now! Sign up for a free consultation.</p>

            <label className="block mb-3 text-sm text-white/90">Select Service</label>
            <select className="w-full mb-4 p-3 rounded border border-white/20 bg-blue-600 text-white">
              <option>Insurance Verification</option>
              <option>Full Billing Audit</option>
              <option>Collections Improvement</option>
              <option>Custom RCM</option>
            </select>

            <input placeholder="Full Name" className="w-full mb-3 p-3 rounded border border-white/20 bg-white/10" />
            <input placeholder="Phone Number" className="w-full mb-3 p-3 rounded border border-white/20 bg-white/10" />
            <input placeholder="Email Address" className="w-full mb-4 p-3 rounded border border-white/20 bg-white/10" />

            <button className="w-full bg-white text-blue-700 font-semibold py-3 rounded">GET STARTED</button>
          </aside>
        </div>
      </div>
    </section>
  );
}
