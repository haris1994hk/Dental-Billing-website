export default function WhoAreWe() {
  const goals = [
    "Maximize your billings and collections",
    "Keep patient ledgers accurate and up to date",
    "Maintain healthy and transparent accounts",
    "To help maintain healthy accounts",
    "To increase your patient acquisition",
    "To ease the process of scheduling",
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <span className="inline-block mb-4 rounded-full bg-blue-700 text-white px-4 py-1 text-sm font-semibold text-blue-700">
              About Us
            </span>
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-6">
              Who Are We?
            </h2>
            <p className="text-zinc-600 mb-4">
              DentalBillingAid is a premier dental outsourcing company delivering
              end-to-end backend solutions that streamline operations and unlock
              higher revenue for dental practices.
            </p>
            <p className="text-zinc-600 mb-4">
              Our team consists of seasoned industry professionals with years of
              hands-on experience in dental billing, collections, scheduling,
              accounts management, and digital growth strategies.
            </p>
            <p className="text-zinc-600">
              We focus on precision, compliance, and efficiency—so you can focus
              on delivering excellent patient care while we take care of the rest.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold mb-4">
                  ✓
                </div>
                <p className="text-zinc-800 font-medium">
                  {goal}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
