import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Pangea</h3>
            <p className="text-gray-400 text-sm">
              AI-powered construction workforce management software.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/workforce-management-software" className="text-gray-400 hover:text-white text-sm transition">
                  Workforce Management
                </Link>
              </li>
              <li>
                <Link href="/compliance-software" className="text-gray-400 hover:text-white text-sm transition">
                  Compliance Software
                </Link>
              </li>
              <li>
                <Link href="/onboarding-software" className="text-gray-400 hover:text-white text-sm transition">
                  Onboarding Software
                </Link>
              </li>
              <li>
                <Link href="/replace-agencies" className="text-gray-400 hover:text-white text-sm transition">
                  Replace Agencies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://joinpangea.ai/features/" className="text-gray-400 hover:text-white text-sm transition">
                  Features
                </a>
              </li>
              <li>
                <a href="https://joinpangea.ai/pricing/" className="text-gray-400 hover:text-white text-sm transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://joinpangea.ai/roi/" className="text-gray-400 hover:text-white text-sm transition">
                  ROI Calculator
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://joinpangea.ai/demo/" className="text-gray-400 hover:text-white text-sm transition">
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pangea. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
