import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HomePage() {
  const pillars = [
    {
      title: "Workforce Management Software",
      description: "Complete guide to construction workforce management. AI-powered recruitment, onboarding, compliance tracking, and payroll integration.",
      url: "/workforce-management-software",
      stats: "Save £181,200/year • 98% worker adoption • 18.9x ROI"
    },
    {
      title: "Compliance Software",
      description: "Automate CSCS card tracking, right-to-work verification, and H&S inductions. Never face an HSE fine again.",
      url: "/compliance-software",
      stats: "Zero HSE fines • 2-minute cert verification • HMRC 2026 ready"
    },
    {
      title: "Onboarding Software",
      description: "Onboard construction workers in 2 minutes via WhatsApp. AI screening, CSCS verification, digital H&S sign-off.",
      url: "/onboarding-software",
      stats: "2-minute onboarding • 60-80% fewer no-shows • 6.8x ROI"
    },
    {
      title: "Replace Recruitment Agencies",
      description: "Eliminate 30-40% agency markup. Build your own labour pool with AI screening at 30p per applicant.",
      url: "/replace-agencies",
      stats: "Save £120K-£360K/year • 30p vs £2/hour • 33.5x ROI"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Construction Workforce Management by Pangea
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered workforce management for UK construction. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets. Replace agencies from £497/month.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://joinpangea.ai/demo/"
              className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg"
            >
              Book a Demo
            </a>
            <a 
              href="https://joinpangea.ai/roi/"
              className="inline-flex items-center px-8 py-4 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-lg transition transform hover:scale-105"
            >
              Calculate ROI
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">12-46x</div>
              <div className="text-sm text-gray-600">Average ROI (UK)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Worker Adoption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2 mins</div>
              <div className="text-sm text-gray-600">Onboarding Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">£594K</div>
              <div className="text-sm text-gray-600">Avg Annual Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Complete Construction Workforce Guides
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Everything you need to know about modern construction workforce management, compliance, onboarding, and agency replacement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Link 
                key={index}
                href={pillar.url}
                className="block bg-white rounded-lg border-2 border-gray-200 hover:border-orange-600 p-8 transition group hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="text-sm font-semibold text-orange-600 mb-4">
                  {pillar.stats}
                </div>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition">
                  Read Full Guide
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Construction Workforce?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Book a demo and see how Pangea can save you £100,000+ annually while eliminating compliance risk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://joinpangea.ai/demo/"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
            >
              Book a Demo Today
            </a>
            <a 
              href="https://joinpangea.ai/roi/"
              className="inline-flex items-center px-8 py-4 bg-orange-800 text-white font-bold rounded-lg hover:bg-orange-900 transition transform hover:scale-105"
            >
              Calculate Your ROI
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
