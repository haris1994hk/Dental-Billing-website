import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50 border-b border-gray-200 text-blue-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img src="/images/logo.webp" alt="Dental Billing Logo" className="w-30 h-15" />
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-2 md:gap-4 text-base font-medium">
            <li><Link className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200" href="/">Home</Link></li>
            <li><Link className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200" href="/about">About</Link></li>
            <li><Link className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200" href="/resources">Resources</Link></li>
            <li><Link className="px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200" href="/pricing">Pricing</Link></li>
          </ul>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}
