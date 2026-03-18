import { Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Construction Compliance Software UK | CSCS Tracking | Pangea AI',
  description: 'Automate CSCS, right-to-work, H&S compliance. AI-powered cert tracking with 90/30/7-day expiry alerts. Avoid HSE fines. From £497/month.',
};

const faqs = [
  {
    question: "What is construction compliance software?",
    answer: "Construction compliance software automates CSCS card tracking, right-to-work verification, H&S inductions, and certification management. It replaces manual spreadsheets with automated expiry alerts and audit trails, preventing HSE fines (£875+), Home Office penalties (£45,000-£60,000), and insurance voids."
  },
  {
    question: "How do I track CSCS card expiry dates?",
    answer: "Pangea method: Worker uploads CSCS card via WhatsApp, AI reads expiry date automatically, automated alerts sent at 90, 30, and 7 days before expiry. Dashboard shows all expiries. No manual checking, zero missed expirations."
  },
  {
    question: "What happens if a worker's CSCS card expires on site?",
    answer: "HSE can issue on-the-spot fine of £875 minimum. Insurance coverage may be voided if worker gets injured. Main contractors can ban your firm from future tenders. Prevention: Automated expiry tracking with alerts at 90, 30, and 7 days."
  },
  {
    question: "How does right-to-work verification work?",
    answer: "Pangea method: Worker uploads passport/ID via WhatsApp, AI verifies document authenticity, document stored securely, audit trail created. Verification time under 2 minutes. Proves due diligence if Home Office investigates. Penalty for no check: £45,000-£60,000 per worker."
  },
  {
    question: "Is digital H&S induction legally valid?",
    answer: "Yes, if content meets HSE requirements, worker signs digitally (electronic signature valid under UK law), and audit trail stored. Pangea's digital inductions are HSE-compliant, stored forever with timestamped proof, retrievable instantly for inspections."
  },
  {
    question: "What is the HMRC April 2026 PAYE shift?",
    answer: "HMRC is shifting PAYE liability from agencies/subcontractors to construction contractors. If your agency doesn't pay PAYE, you're liable. Construction companies need audit-ready compliance records: right-to-work checks, cert verification, timesheets, H&S sign-offs. Pangea creates this audit trail automatically."
  },
  {
    question: "How much does construction compliance software cost?",
    answer: "SME-focused software costs £497-£1,197/month (Pangea). Enterprise solutions cost £2,000-£5,000/month. ROI: Avoiding one HSE fine (£875) pays for 1-2 months. Avoiding one right-to-work penalty (£45,000) pays for 3 years. Compliance software is insurance, not a cost."
  },
  {
    question: "Can compliance software prevent HSE fines?",
    answer: "Yes. HSE fines result from expired CSCS cards, no proof of H&S induction, missing risk assessments, inadequate cert tracking. Compliance software prevents these with automated CSCS expiry alerts, digital H&S induction records, cert tracking with audit trail, and retrievable proof in seconds. Pangea users report zero HSE fines."
  }
];

const sections = [
  {
    title: "What Is Construction Compliance Software?",
    content: `<p>Construction compliance software is a digital system that tracks worker certifications, right-to-work status, insurance, and H&S inductions.</p>
    
    <p>It replaces manual spreadsheets with automated alerts, expiry tracking, and audit trails.</p>
    
    <p><strong>Core compliance areas covered:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>CSCS card tracking</strong> — Expiry dates, renewal alerts</li>
      <li><strong>Right-to-work verification</strong> — Passport/ID checks, Home Office compliance</li>
      <li><strong>Health & safety inductions</strong> — Digital sign-off, site-specific tracking</li>
      <li><strong>Certification management</strong> — NVQs, trade certs, first aid, IPAF</li>
      <li><strong>Insurance tracking</strong> — Public liability, professional indemnity</li>
      <li><strong>Working Time Directive</strong> — Max hours, break enforcement</li>
    </ul>
    
    <p>Why automation matters: Manual tracking = gaps = fines. One expired CSCS card on site = £875 HSE fine minimum. One illegal worker = £45,000-£60,000 Home Office penalty. Compliance software prevents both.</p>`
  },
  {
    title: "The Cost of Non-Compliance in Construction",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">HSE Fines</h3>
    <p>HSE (Health & Safety Executive) fines for construction non-compliance:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>Minimum fine:</strong> £875 per incident</li>
      <li><strong>Conviction rate:</strong> 96%</li>
      <li><strong>Total fines issued:</strong> £33 million (recent data)</li>
    </ul>
    
    <p><strong>Common violations:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Expired CSCS cards on site</li>
      <li>No proof of H&S induction</li>
      <li>Missing risk assessments</li>
      <li>Inadequate safety equipment records</li>
    </ul>
    
    <p>One missing induction record = £875. Three workers with expired certs = £2,625. One serious incident = £50,000-£500,000+.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Right-to-Work Fines</h3>
    <p>Home Office penalties for employing illegal workers:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>First offence:</strong> £45,000 per worker</li>
      <li><strong>Repeat offence:</strong> £60,000 per worker</li>
      <li><strong>Criminal prosecution:</strong> Directors can face jail time</li>
    </ul>
    
    <p>Right-to-work checks are mandatory. No proof = illegal employment. Illegal employment = £45,000-£60,000 per worker.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">HMRC April 2026 Urgency</h3>
    <p>HMRC is shifting PAYE liability to contractors in April 2026. If your agency or subcontractor doesn't pay PAYE, you're liable. Construction companies need audit-ready compliance records.</p>`
  },
  {
    title: "How Pangea Automates Construction Compliance",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">WhatsApp-Based Cert Collection</h3>
    <p>Workers don't log into portals. They send cert photos via WhatsApp.</p>
    
    <p><strong>Pangea's AI:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Reads CSCS card expiry date</li>
      <li>Extracts cert details</li>
      <li>Verifies right-to-work documents</li>
      <li>Stores everything securely</li>
    </ul>
    
    <p>2 minutes per worker. No paperwork. No manual data entry.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Automated Expiry Alerts</h3>
    <p>Pangea sends SMS/WhatsApp alerts automatically:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>90 days:</strong> "Your CSCS card expires in 3 months. Renew now."</li>
      <li><strong>30 days:</strong> "Your CSCS card expires in 1 month. Book renewal."</li>
      <li><strong>7 days:</strong> "Your CSCS card expires in 7 days. Urgent action needed."</li>
    </ul>
    
    <p>Managers get dashboard alerts: 10 workers expiring in next 30 days. 3 workers overdue. 2 workers with missing certs.</p>
    
    <p>Proactive compliance. Never reactive.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Digital H&S Inductions</h3>
    <p>Pangea sends H&S induction video via WhatsApp. Worker watches on their phone. Signs digitally at the end. Manager sees completion in real-time.</p>
    
    <p><strong>Stored forever:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Who completed induction</li>
      <li>Which site</li>
      <li>Date/time</li>
      <li>Video version watched</li>
    </ul>
    
    <p>HSE asks for proof? Retrieve it in 10 seconds.</p>`
  },
  {
    title: "CSCS Compliance Automation",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">CSCS Challenges</h3>
    <p>240,000 construction workers in UK. Cards expire every 5 years. No central CSCS expiry tracking system exists. Construction companies use spreadsheets. Result: Gaps. Expired cards slip through. HSE shows up. £875 minimum fine per card.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Pangea's Solution</h3>
    <ol class="list-decimal list-inside space-y-2 ml-4 mb-4">
      <li><strong>Step 1:</strong> Worker uploads CSCS card photo via WhatsApp during onboarding</li>
      <li><strong>Step 2:</strong> AI reads expiry date automatically</li>
      <li><strong>Step 3:</strong> Expiry date added to database</li>
      <li><strong>Step 4:</strong> Automated alerts sent at 90, 30, 7 days</li>
      <li><strong>Step 5:</strong> Manager dashboard shows all expiries</li>
      <li><strong>Step 6:</strong> Workers with expired cards blocked from site scheduling</li>
    </ol>
    
    <p><strong>Result:</strong> Zero expired cards on site. Zero HSE fines. Zero insurance voids.</p>`
  }
];

const relatedPages = [
  {
    title: "Workforce Management",
    url: "/workforce-management-software",
    description: "Complete guide to construction workforce management software."
  },
  {
    title: "Onboarding Software",
    url: "/onboarding-software",
    description: "2-minute WhatsApp onboarding for construction workers."
  },
  {
    title: "Replace Agencies",
    url: "/replace-agencies",
    description: "Save £120K+ annually by eliminating agency dependency."
  }
];

const schemaData = {
  article: {
    headline: "Construction Compliance Software: Automate CSCS, Right-to-Work & HSE (2026)",
    description: "Automate CSCS, right-to-work, H&S compliance. AI-powered cert tracking with 90/30/7-day expiry alerts. Avoid HSE fines from £497/month.",
    url: "https://joinpangea.ai/compliance-software/",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20"
  },
  faq: { faqs }
};

export default function ComplianceSoftwarePage() {
  return (
    <PillarPage
      title="Construction Compliance Software: Automate CSCS, Right-to-Work & HSE (2026)"
      metaDescription="Automate CSCS, right-to-work, H&S compliance. AI-powered cert tracking with 90/30/7-day expiry alerts. Avoid HSE fines. From £497/month."
      intro="Construction compliance software automates CSCS card tracking, right-to-work verification, and health & safety inductions — so you never face an HSE fine again.

96% HSE conviction rate. £33 million in total fines issued. One missing induction record costs £875 minimum.

HMRC is shifting PAYE liability in April 2026. If you can't prove compliance, you're liable."
      sections={sections}
      faqs={faqs}
      schemaData={schemaData}
      relatedPages={relatedPages}
    />
  );
}
