import { Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Replace Construction Recruitment Agencies | Save £120K-£360K Annually',
  description: 'Eliminate 30-40% agency markup. Build your own labour pool with AI screening at 30p/applicant vs £2/hr agency margin. Save £120K-£360K/year.',
};

const faqs = [
  {
    question: "Can I really replace construction recruitment agencies?",
    answer: "Yes. Pangea's AI handles screening (24/7), onboarding (2 minutes via WhatsApp), compliance automation, scheduling, and payroll integration. One UK firm replaced £600K/year agency spend with £6K Pangea subscription, saving £594K annually."
  },
  {
    question: "How long does it take to build a labour pool?",
    answer: "6-12 months to full agency replacement. Month 1: 10-20 workers. Month 3: 50-100 workers. Month 6: 100-200+ workers. Savings start immediately. Month 1: Reduce agency usage 10-20%. Month 12: Eliminate agency dependency."
  },
  {
    question: "What if I need workers urgently?",
    answer: "Pangea's AI screens applicants 24/7. Applicant applies at 11pm, screened by 11:02pm. Speed matches agencies but costs 30p per applicant vs £2-£10/hour ongoing. Keep small agency relationship for emergencies but reduce dependency 80-90%."
  },
  {
    question: "How do I find workers without agencies?",
    answer: "Advertise on Facebook (construction worker groups), Indeed (free job postings), Gumtree (local job ads), word-of-mouth (current workers refer friends), and site signage. Cost: £0-£100/month vs £120,000-£360,000/year agency markup."
  },
  {
    question: "What is the agency markup for construction labour?",
    answer: "30-40% per worker per hour. Example: You pay agency £25/hour, agency pays worker £15-£17.50/hour, agency margin £7.50-£10/hour. 50-worker firm using 20% agency labour pays £120,000-£180,000/year in markup."
  },
  {
    question: "How does AI worker screening work?",
    answer: "Worker applies via WhatsApp link. AI bot asks: trade/skill, CSCS card valid, experience, availability, location. Qualified applicants forwarded to manager, unqualified filtered out. Cost: 30p per applicant. Time: 30 seconds. Available 24/7."
  }
];

const sections = [
  {
    title: "The Agency Problem: 30-40% Markup on Every Hour",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">How Agency Pricing Works</h3>
    <p>You pay agency £25/hour for a worker. Agency pays worker £15-17.50/hour. Agency margin: £7.50-£10/hour = 30-40% markup. Every hour worked. Every worker. Every day.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Annual Cost</h3>
    <p><strong>50-worker firm using 20% agency labour:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Workers: 50 total, 10 via agency</li>
      <li>Hours: 40 hrs/week × 52 weeks = 2,080 hrs/year per worker</li>
      <li>Total agency hours: 20,800 hrs/year</li>
      <li>Agency margin: £8/hour average</li>
      <li><strong>Annual cost: £166,400</strong></li>
    </ul>
    
    <p><strong>100-worker firm using 30% agency labour:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Workers: 100 total, 30 via agency</li>
      <li>Total agency hours: 62,400 hrs/year</li>
      <li><strong>Annual cost: £499,200</strong></li>
    </ul>
    
    <p>Half a million pounds per year. In markup. For workers you don't own.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">The £600K Case Study</h3>
    <p>A UK construction firm with 80 workers was spending £600,000/year on agency labour. 30% agency markup. Every hour. Every day.</p>
    
    <p>They implemented Pangea's AI recruitment system:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Cost: £6,000/year (£500/month subscription)</li>
      <li>Result: Agency spend eliminated</li>
      <li><strong>Savings: £594,000 annually</strong></li>
    </ul>
    
    <p>48 months later: £2,376,000 saved. 200+ proprietary worker database. No more 30% markup.</p>`
  },
  {
    title: "Why Construction Companies Use Agencies",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Speed</h3>
    <p>You need 5 workers tomorrow. Call agency. Agency sends 5 workers. Problem solved. Fast.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">No Admin</h3>
    <p>Agency handles: Recruitment. Onboarding. Payroll. PAYE. H&S inductions. Compliance tracking. You just pay the invoice. Easy.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Risk Transfer</h3>
    <p>Worker doesn't show up? Agency problem. Worker gets injured? Agency's insurance. Worker quits? Agency finds replacement. You're protected.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Lack of Alternatives</h3>
    <p>Most construction companies don't have: In-house recruitment team. Workforce management system. Database of available workers. Time to screen applicants.</p>
    
    <p>Agencies fill the gap. But at 30-40% cost.</p>`
  },
  {
    title: "The Hidden Cost of Agency Dependency",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">You Don't Own the Workers</h3>
    <p>Agency builds database of workers. Not you. You lose your best workers to other clients. Agency controls access. You're dependent. Forever.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Quality Inconsistency</h3>
    <p>Agencies send whoever's available. Not necessarily the best worker. Performance varies wildly. No accountability.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Worker Loyalty Problem</h3>
    <p>Worker's loyalty is to the agency, not you. Agency calls with better rate? Worker leaves. You lose continuity. Projects suffer.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Limited Control</h3>
    <p>You can't: Build long-term relationships with workers. Track performance over multiple jobs. Re-employ top performers. Filter out poor performers.</p>
    
    <p>Agency controls the relationship. You're just a client.</p>`
  },
  {
    title: "How to Replace Agencies: The 4-Step System",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 1: Build Your Own Labour Pool</h3>
    <p>Start recruiting directly. Advertise jobs on: Facebook (construction worker groups). Indeed. Gumtree. Word-of-mouth (current workers refer friends).</p>
    <p>Target: 50-200 qualified workers in database. Takes 3-6 months to build.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 2: Screen with AI (30p vs £2/Hour)</h3>
    <p>AI bot screens applicants 24/7. Questions asked: What trade? Do you have CSCS card? How much experience? When can you start? What's your location?</p>
    <p>Qualified applicants forwarded to manager. Unqualified filtered out automatically. Cost: 30p per applicant. Compare to: £2/hour ongoing agency margin.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 3: Onboard in 2 Minutes (vs 30-60 Minutes)</h3>
    <p>Applicant clicks WhatsApp link. Uploads CSCS card + ID. Watches H&S video. Signs digitally. Gets scheduled. Total time: 2 minutes.</p>
    <p>Compare to: Agency onboarding (30-60 minutes + 1-2 day delays).</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 4: Track Performance & Build Database</h3>
    <p>Rate every worker after each job (1-5 stars). Top performers flagged for re-employment. Poor performers filtered out.</p>
    <p>Database gets smarter: "John Smith = 5-star electrician, always rehire". "Sarah Jones = reliable plumber, punctual, rehire". "Mike Brown = 2 stars, multiple no-shows, do not rehire".</p>
    
    <p><strong>You own the relationship. You own the data. You control the labour pool.</strong></p>`
  },
  {
    title: "Agency Elimination ROI",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">50-Worker Firm (20% Agency)</h3>
    <p><strong>Current agency cost:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>10 workers via agency</li>
      <li>40 hrs/week × 52 weeks = 2,080 hrs/year each</li>
      <li>Total: 20,800 agency hours/year</li>
      <li>Agency margin: £8/hour</li>
      <li><strong>Annual cost: £166,400</strong></li>
    </ul>
    
    <p><strong>Pangea cost:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Subscription: £797/month = £9,564/year</li>
      <li>AI screening: 200 applicants @ 30p = £60</li>
      <li><strong>Total: £9,624/year</strong></li>
    </ul>
    
    <p><strong>Savings:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>£166,400 - £9,624 = <strong>£156,776/year</strong></li>
      <li><strong>ROI: 16.3x</strong></li>
    </ul>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">100-Worker Firm (30% Agency)</h3>
    <p><strong>Current agency cost:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>30 workers via agency</li>
      <li>Total: 62,400 agency hours/year</li>
      <li><strong>Annual cost: £499,200</strong></li>
    </ul>
    
    <p><strong>Pangea cost:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Subscription: £1,197/month = £14,364/year</li>
      <li>AI screening: 400 applicants @ 30p = £120</li>
      <li><strong>Total: £14,484/year</strong></li>
    </ul>
    
    <p><strong>Savings:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>£499,200 - £14,484 = <strong>£484,716/year</strong></li>
      <li><strong>ROI: 33.5x</strong></li>
    </ul>
    
    <p><strong>Real Pangea ROI (UK clients):</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Minimum: 12x</li>
      <li>Average: 28x</li>
      <li>Maximum: 46x</li>
    </ul>`
  }
];

const relatedPages = [
  {
    title: "Workforce Management",
    url: "/workforce-management-software",
    description: "Complete construction workforce management system."
  },
  {
    title: "Compliance Software",
    url: "/compliance-software",
    description: "Automate CSCS tracking and HSE compliance."
  },
  {
    title: "Onboarding Software",
    url: "/onboarding-software",
    description: "2-minute WhatsApp onboarding for construction workers."
  }
];

const schemaData = {
  article: {
    headline: "How to Replace Construction Recruitment Agencies with AI (And Save £120K+/Year)",
    description: "Eliminate 30-40% agency markup. Build your own labour pool with AI screening at 30p/applicant vs £2/hr agency margin. Save £120K-£360K/year.",
    url: "https://joinpangea.ai/replace-agencies/",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20"
  },
  faq: { faqs },
  howto: {
    name: "How to Replace Construction Recruitment Agencies",
    description: "4-step system to eliminate agency dependency and save £120,000-£360,000 annually.",
    totalTime: "P6M",
    steps: [
      {
        name: "Build Your Own Labour Pool",
        text: "Advertise jobs on Facebook (construction worker groups), Indeed, Gumtree, and word-of-mouth. Target: 50-200 qualified workers in database. Takes 3-6 months to build."
      },
      {
        name: "Screen with AI",
        text: "AI bot screens applicants 24/7. Asks: trade, CSCS card, experience, start date, location. Qualified applicants forwarded, unqualified filtered out. Cost: 30p per applicant vs £2/hour ongoing agency margin."
      },
      {
        name: "Onboard in 2 Minutes",
        text: "Applicant clicks WhatsApp link, uploads CSCS card + ID, watches H&S video, signs digitally, gets scheduled. Total time: 2 minutes vs 30-60 minutes agency onboarding + 1-2 day delays."
      },
      {
        name: "Track Performance & Build Database",
        text: "Rate every worker after each job (1-5 stars). Top performers flagged for re-employment, poor performers filtered out. Database gets smarter. You own the relationship, data, and labour pool."
      }
    ]
  }
};

export default function ReplaceAgenciesPage() {
  return (
    <PillarPage
      title="How to Replace Construction Recruitment Agencies with AI (And Save £120K+/Year)"
      metaDescription="Eliminate 30-40% agency markup. Build your own labour pool with AI screening at 30p/applicant vs £2/hr agency margin. Save £120K-£360K/year."
      intro="Construction recruitment agencies charge 30-40% markup per worker per hour, costing UK construction companies £120,000-£360,000 annually for a 50-100 worker firm.

One UK construction firm was spending £600,000/year on agency labour. They replaced it with AI-powered recruitment. Cost now: £6,000/year. Savings: £594,000 annually."
      sections={sections}
      faqs={faqs}
      schemaData={schemaData}
      relatedPages={relatedPages}
    />
  );
}
