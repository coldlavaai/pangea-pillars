import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Pangea
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/workforce-management-software" className="text-gray-300 hover:text-white transition">
              Workforce Management
            </Link>
            <Link href="/compliance-software" className="text-gray-300 hover:text-white transition">
              Compliance
            </Link>
            <Link href="/onboarding-software" className="text-gray-300 hover:text-white transition">
              Onboarding
            </Link>
            <Link href="/replace-agencies" className="text-gray-300 hover:text-white transition">
              Replace Agencies
            </Link>
          </nav>
          <div>
            <a 
              href="https://joinpangea.ai/demo/" 
              className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded transition"
            >
              Book Demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
