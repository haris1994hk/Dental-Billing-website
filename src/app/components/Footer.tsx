export default function Footer() {
  return (
    <footer className="w-full mt-12">
      <div className="bg-[#0c52e0] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src="/images/logo.webp" alt="Dental Billing Logo" className="w-16 h-16 rounded-md bg-white p-2" />
            <div>
              <div className="font-bold text-xl">Dental Billing</div>
              <div className="text-sm text-blue-200">Dental Billing Services & Solutions</div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold mb-2">Product</h5>
              <ul className="text-sm space-y-1 text-emerald-100">
                <li>Features</li>
                <li>Integrations</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="text-sm space-y-1 text-emerald-100">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Resources</h5>
              <ul className="text-sm space-y-1 text-emerald-100">
                <li>Help Center</li>
                <li>Guides</li>
                <li>API Docs</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Contact</h5>
              <div className="text-sm text-emerald-100">info@dentalbilling.com</div>
              <div className="text-sm text-emerald-100">(555) 123-4567</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0c52e0] text-blue-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-sm">
          <div>© {new Date().getFullYear()} Dental Billing. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="underline">Privacy</a>
            <a href="#" className="underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
