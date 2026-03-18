import { Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Construction Workforce Management Software UK | Pangea AI',
  description: 'AI-powered workforce management for UK construction. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets. Replace agencies. From £497/month.',
};

const faqs = [
  {
    question: "What is the best construction workforce management software in the UK?",
    answer: "For 10-200 worker SMEs, Pangea offers WhatsApp-native, AI-powered onboarding at £497-£1,197/month. Enterprise firms (200+ workers) may consider Boxcore or GoContractor. Pangea has 98% worker adoption vs 40-50% for portal-based competitors."
  },
  {
    question: "How much does construction workforce management software cost?",
    answer: "SME-focused solutions cost £497-£1,197/month (Pangea). Enterprise solutions cost £2,000-£10,000/month (Boxcore, GoContractor). Consider ROI vs cost — if software saves £120,000/year in agency costs, £800/month is cheap."
  },
  {
    question: "Can workforce management software replace recruitment agencies?",
    answer: "Yes. Pangea's AI screens applicants for 30p each vs £2/hour ongoing agency margins. One firm replaced £600,000/year in agency spend with £6,000/year Pangea subscription, saving £594,000 annually."
  },
  {
    question: "How long does it take to onboard workers with workforce management software?",
    answer: "Traditional portals take 30-60 minutes per worker. Messaging-native software (Pangea) takes 2 minutes via WhatsApp. Worker gets link, verifies ID, signs H&S, gets scheduled."
  },
  {
    question: "Does workforce management software track CSCS compliance?",
    answer: "Yes. Pangea tracks CSCS card expiry with automated alerts at 90, 30, and 7 days before expiry. Prevents expired cards on site and HSE fines (£875+ per incident)."
  },
  {
    question: "Is workforce management software easy for construction workers to use?",
    answer: "Portal/app-based systems have 40% worker adoption. WhatsApp/SMS-based systems (Pangea) have 98% adoption. Workers already use WhatsApp — no app install, no login, no training needed."
  },
  {
    question: "What is the ROI of construction workforce management software?",
    answer: "Typical 50-worker firm saves £181,200/year (agency costs £120K, admin time £30K, no-shows £31K). Pangea costs £9,564/year. ROI: 18.9x. Real Pangea ROI: 12-46x (UK), 14-64x (US)."
  },
  {
    question: "Does workforce management software integrate with payroll?",
    answer: "Yes. Pangea integrates with Xero, QuickBooks, and Sage. GPS-verified timesheets export directly to payroll software. No manual data entry, no payroll errors, HMRC-compliant records."
  }
];

const sections = [
  {
    title: "What Is Construction Workforce Management Software?",
    content: `<p>Construction workforce management software is a digital system that automates recruitment, onboarding, compliance tracking, shift scheduling, and payroll for construction companies.</p>
    
    <p>It replaces WhatsApp groups, spreadsheets, and paper forms with a centralized platform.</p>
    
    <p><strong>Core capabilities include:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>Recruitment automation</strong> — Post jobs, screen applicants, verify certs</li>
      <li><strong>Onboarding</strong> — Collect documents, check right-to-work, sign H&S</li>
      <li><strong>Compliance tracking</strong> — Monitor CSCS cards, cert expiries, insurance</li>
      <li><strong>Time tracking</strong> — GPS-verified clock in/out, break tracking</li>
      <li><strong>Performance management</strong> — Star ratings, re-employ flags, incident reports</li>
    </ul>
    
    <p>Why construction-specific software matters: Generic HR tools don't understand CSCS cards, right-to-work checks, or HSE compliance. Construction workforce management software is purpose-built for trade businesses.</p>`
  },
  {
    title: "Why Construction Companies Need Workforce Management Software",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Admin Time Waste</h3>
    <p>Your team spends 15-30 hours per week chasing paperwork. Tracking down expired CSCS cards. Following up on missing right-to-work documents. Manually entering timesheet data into payroll systems.</p>
    
    <p>Every hour wasted costs £30-£50 in management time. That's £30,000-£60,000 per year for a 50-worker firm.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Compliance Chaos</h3>
    <p>Expired CSCS cards slip through the cracks. HSE shows up. Minimum fine: £875 per incident.</p>
    
    <p>HSE has a 96% conviction rate and issued £33 million in total fines recently. One missing H&S induction record costs you £875 minimum.</p>
    
    <p><strong>Construction companies face penalties for:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Expired CSCS cards on site</li>
      <li>Missing right-to-work documents (£45,000-£60,000 per illegal worker)</li>
      <li>No proof of H&S inductions</li>
      <li>Insurance voids due to expired certifications</li>
    </ul>
    
    <p>Manual tracking = gaps = fines.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Agency Dependency</h3>
    <p>Recruitment agencies charge 30-40% markup per worker per hour. For a 50-worker firm using 20% agency labour, that's £120,000-£180,000 per year in markup. Every hour worked. Every worker. Every day.</p>
    
    <p>One construction firm was spending £600,000 annually on agency labour. They replaced it with AI-powered recruitment software. Cost now: £6,000 per year. <strong>Savings: £594,000 annually.</strong></p>`
  },
  {
    title: "Key Features of Construction Workforce Management Software",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Recruitment & Onboarding Automation</h3>
    <p>AI-powered recruitment screens applicants 24/7. Workers apply via WhatsApp or SMS.</p>
    
    <p><strong>AI bot asks:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>What trade?</li>
      <li>Do you have a CSCS card?</li>
      <li>When can you start?</li>
      <li>What's your location?</li>
    </ul>
    
    <p>Qualified applicants get sent to managers. Unqualified ones get filtered out automatically.</p>
    
    <p><strong>Onboarding happens in 2 minutes via WhatsApp:</strong></p>
    <ol class="list-decimal list-inside space-y-2 ml-4 mb-4">
      <li>Worker clicks link</li>
      <li>Uploads CSCS card + ID</li>
      <li>Watches H&S induction</li>
      <li>Signs digitally</li>
      <li>Gets scheduled for site</li>
    </ol>
    
    <p>No app install. No portal login. No paperwork.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">CSCS & Compliance Tracking</h3>
    <p>Software tracks every worker's CSCS card expiry date. Automated alerts go out at 90, 30, and 7 days before expiry.</p>
    
    <p><strong>Managers see a dashboard:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Who's compliant</li>
      <li>Who's expiring soon</li>
      <li>Who's overdue</li>
    </ul>
    
    <p>Never get caught with an expired card on site again.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">GPS-Verified Timesheets</h3>
    <p>Workers clock in/out from their phone. GPS verifies they're on site. Break tracking included. Working Time Directive compliance automated.</p>
    
    <p>Timesheet data exports directly to payroll software (Xero, QuickBooks, Sage). No manual entry. No fraud.</p>`
  },
  {
    title: "Construction Workforce Management Software ROI",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Agency Cost Savings</h3>
    <p>50-worker firm using 20% agency labour:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Agency markup: 30-40% per worker per hour</li>
      <li>Annual cost: £120,000-£180,000</li>
    </ul>
    
    <p>Replace with AI recruitment (30p per applicant):</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Annual savings: £120,000+</li>
      <li>Pangea cost: £797/month = £9,564/year</li>
      <li><strong>Net savings: £110,436+</strong></li>
    </ul>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Total ROI (50-worker firm)</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Agency savings: £120,000</li>
      <li>Admin savings: £30,000</li>
      <li>No-show savings: £31,200</li>
      <li><strong>Total savings: £181,200/year</strong></li>
      <li>Pangea cost: £797/mo = £9,564/year</li>
      <li><strong>ROI: 18.9x</strong></li>
    </ul>
    
    <p><strong>Pangea ROI (real data):</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>UK: 12-46x</li>
      <li>US: 14-64x</li>
    </ul>
    
    <p>Software pays for itself in month one.</p>`
  }
];

const relatedPages = [
  {
    title: "Compliance Software",
    url: "/compliance-software",
    description: "Automate CSCS tracking, right-to-work verification, and HSE compliance."
  },
  {
    title: "Onboarding Software",
    url: "/onboarding-software",
    description: "2-minute WhatsApp onboarding for construction workers. No paperwork."
  },
  {
    title: "Replace Agencies",
    url: "/replace-agencies",
    description: "Eliminate 30-40% agency markup and save £120K+ annually."
  }
];

const schemaData = {
  article: {
    headline: "Construction Workforce Management Software: The Complete Guide (2026)",
    description: "AI-powered workforce management for UK construction. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets. Replace agencies from £497/month.",
    url: "https://joinpangea.ai/workforce-management-software/",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20"
  },
  faq: { faqs }
};

export default function WorkforceManagementPage() {
  return (
    <PillarPage
      title="Construction Workforce Management Software: The Complete Guide (2026)"
      metaDescription="AI-powered workforce management for UK construction. WhatsApp-native onboarding, CSCS compliance automation, GPS timesheets. Replace agencies. From £497/month."
      intro="Construction workforce management software has transformed how UK construction companies handle recruitment, onboarding, compliance, and payroll.

42% of UK construction companies have zero HR technology.

If you're managing 20+ workers with WhatsApp groups and spreadsheets, you're not alone — but you're haemorrhaging money.

A 50-worker construction firm wastes £113,000-£273,000 annually on manual admin, compliance gaps, and agency margins."
      sections={sections}
      faqs={faqs}
      schemaData={schemaData}
      relatedPages={relatedPages}
    />
  );
}
