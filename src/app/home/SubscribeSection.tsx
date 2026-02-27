"use client";

export default function SubscribeSection() {
  return (
    <section className="w-full bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14479b] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center sm:text-left">
            <div className="text-sm uppercase tracking-widest !text-white">Subscribe to our newsletter!</div>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold !text-white tracking-tight">DENTAL BILLING AID</h2>
          </div>

          <form className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              aria-label="Email"
              placeholder="Your email"
              className="h-10 w-full sm:w-64 px-3 rounded-sm border border-white/20 text-black bg-white/95 placeholder:text-zinc-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 rounded-sm bg-[#19b24a] text-white font-semibold shadow-md hover:brightness-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
