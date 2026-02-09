export default function EOBPaymentPostingAI() {
  const sections = [
    {
      title: "Start with clean, complete insurance data",
      bullets: [
        "EOB and EOP ingestion",
        "Claim and payer matching",
        "Bulk check identification",
        "Missing data detection"
      ]
    },
    {
      title: "Post accurately — not manually",
      bullets: [
        "Line-item validation",
        "Deductible and co-insurance logic",
        "LEAT and downcoding recognition",
        "Patient balance calculations"
      ]
    },
    {
      title: "Nothing falls through the cracks",
      bullets: [
        "Dental reason summaries",
        "Underpayment flags",
        "Adjustment audit trail",
        "Posting verification support"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 mx-auto max-w-7xl">
      <div className="bg-gradient-to-br from-[#0c52e0] to-[#0a3fa8] rounded-lg p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 !text-white">
              EOB Payment Posting AI
            </h2>

            <p className="text-lg mb-12 !text-white">
              Our flagship AI tool is designed specifically for dental insurance workflows.
            </p>

            <div className="grid grid-cols-1 gap-8 mb-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4 !text-white">
                    {section.title}
                  </h3>

                  <ul className="space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <span className="!text-white text-lg leading-none">•</span>
                        <span className="!text-white">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-block bg-white !text-[#0c52e0] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition"
            >
              Get a Demo
            </a>
          </div>

          {/* RIGHT IMAGES */}
          <div className="flex flex-col gap-6 items-center justify-center">
            {/* First Image */}
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="/images/eob1.png"
                alt="EOB Payment Posting AI - Dashboard"
                className="w-[600px] h-[400px]"
              />
            </div>

            {/* Second Image */}
            <div className="w-full rounded-lg overflow-hidden">
              <img
                src="/images/eob2.png"
                alt="EOB Payment Posting AI - Reports"
                className="w-full h-[350px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
