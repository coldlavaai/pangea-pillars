import Header from './Header';
import Footer from './Footer';
import CTAButton from './CTAButton';
import FAQSection from './FAQSection';
import SchemaMarkup from './SchemaMarkup';
import { FAQ } from '@/lib/content-parser';

interface Section {
  title: string;
  content: string;
  subsections?: Array<{ title: string; content: string }>;
}

interface PillarPageProps {
  title: string;
  metaDescription: string;
  intro: string;
  sections: Section[];
  faqs: FAQ[];
  schemaData: {
    article: any;
    faq: any;
    howto?: any;
  };
  relatedPages: Array<{ title: string; url: string; description: string }>;
}

export default function PillarPage({
  title,
  metaDescription,
  intro,
  sections,
  faqs,
  schemaData,
  relatedPages
}: PillarPageProps) {
  
  return (
    <>
      <SchemaMarkup type="article" data={schemaData.article} />
      <SchemaMarkup type="faq" data={schemaData.faq} />
      {schemaData.howto && <SchemaMarkup type="howto" data={schemaData.howto} />}
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <div className="text-lg md:text-xl text-gray-300 space-y-4 leading-relaxed">
              {intro.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="https://joinpangea.ai/demo/" text="Book a Pangea Demo" />
              <CTAButton href="https://joinpangea.ai/roi/" text="Calculate Your ROI" variant="secondary" />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {sections.map((section, index) => (
            <section key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-orange-600 pb-2 inline-block">
                {section.title}
              </h2>
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              
              {/* CTA every ~2 sections */}
              {(index + 1) % 2 === 0 && index < sections.length - 1 && (
                <div className="mt-8 p-6 bg-orange-50 border-l-4 border-orange-600 rounded-r-lg">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    Ready to see Pangea in action?
                  </p>
                  <CTAButton href="https://joinpangea.ai/demo/" text="Book a Free Demo" />
                </div>
              )}
            </section>
          ))}

          {/* Related Pages */}
          <section className="mb-12 bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPages.map((page, index) => (
                <a
                  key={index}
                  href={page.url}
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-600 hover:shadow-lg transition group"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    {page.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {page.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <FAQSection faqs={faqs} />
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Construction Workforce?
            </h2>
            <p className="text-lg mb-6 text-orange-100">
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
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
