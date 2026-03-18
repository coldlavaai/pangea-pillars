import { Metadata } from 'next';
import PillarPage from '@/components/PillarPage';

export const metadata: Metadata = {
  title: 'Construction Worker Onboarding Software | 2-Minute WhatsApp Onboarding',
  description: 'Onboard construction workers in 2 minutes via WhatsApp. AI-powered screening, CSCS verification, H&S sign-off. No paperwork. From £497/month.',
};

const faqs = [
  {
    question: "How long does construction worker onboarding take?",
    answer: "Traditional onboarding takes 30-60 minutes per worker. Pangea's WhatsApp onboarding takes 2 minutes. Worker clicks link, answers AI questions, uploads certs, watches H&S video, signs digitally. Manager reviews and schedules in 10 seconds."
  },
  {
    question: "Can onboarding be done remotely?",
    answer: "Yes. Pangea onboarding happens entirely via WhatsApp. Worker can onboard from home, on the bus, anywhere with phone signal. No need to come to office, no paperwork. Start-ready before they arrive on site."
  },
  {
    question: "Does onboarding software verify CSCS cards?",
    answer: "Yes. Pangea's AI reads CSCS card expiry date automatically. Expired cards flagged instantly. Automated alerts sent at 90, 30, 7 days before expiry. Manager dashboard shows all cert statuses."
  },
  {
    question: "How do workers access onboarding software?",
    answer: "Pangea uses WhatsApp and SMS. No app download, no portal login. Worker clicks link, onboards via chat. 98% worker adoption rate vs 40% for portal-based systems."
  },
  {
    question: "Is WhatsApp onboarding legally compliant?",
    answer: "Yes. Digital signatures are legally valid under UK law (Electronic Communications Act 2000). Audit trail includes timestamped sign-offs, video completion records, cert verification dates. HSE-compliant, Home Office-compliant, HMRC-compliant."
  },
  {
    question: "What is the cost of construction onboarding software?",
    answer: "Pangea pricing: Starter (up to 30 workers) £497/month, Growth (31-100 workers) £797/month, Scale (101-200+ workers) £1,197/month. ROI: 6-18x depending on company size. Savings from admin time, no-shows, and compliance protection exceed cost."
  }
];

const sections = [
  {
    title: "The Problem with Traditional Construction Onboarding",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Time Waste</h3>
    <p>Your team spends 15-30 hours per week on admin. Chasing paperwork. Verifying certs. Collecting right-to-work documents. Explaining H&S procedures. Manually entering data into systems.</p>
    
    <p>Cost per hour: £30-£50 (management time). Annual waste: £30,000-£60,000 for a 50-worker firm.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Onboarding Delays</h3>
    <p>Traditional onboarding takes 30-60 minutes per worker. Worker arrives. Sits through induction. Fills out forms. Manager verifies certs manually. Worker finally gets scheduled.</p>
    
    <p><strong>Result:</strong> Worker starts 1-2 days late. Cost per delay: £200-£500 per worker (lost productivity). If you're onboarding 10 workers/month with 2-day delays = £4,000-£10,000/month wasted.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">No-Shows</h3>
    <p>2-5 workers don't show up every week. Why? Forget their shift (no reminders). Take multiple bookings, pick best one. Poor onboarding experience = low commitment. No accountability system.</p>
    
    <p>Cost per no-show: £300+ (rescheduling, productivity loss, scrambling for replacement). Annual cost: £31,200-£78,000.</p>`
  },
  {
    title: "How Pangea's 2-Minute Onboarding Works",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 1: Worker Applies</h3>
    <p>Worker applies via WhatsApp (company sends link or QR code). AI bot starts conversation:</p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>Bot:</strong> "Hi! What trade are you?"</li>
      <li><strong>Worker:</strong> "Electrician"</li>
      <li><strong>Bot:</strong> "Do you have a valid CSCS card?"</li>
      <li><strong>Worker:</strong> "Yes"</li>
      <li><strong>Bot:</strong> "When can you start?"</li>
      <li><strong>Worker:</strong> "Monday"</li>
    </ul>
    <p>Time: 30 seconds.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 2: AI Screens Applicant</h3>
    <p>AI evaluates answers: Trade matches job requirement? ✅ Has CSCS card? ✅ Available when needed? ✅ Location works? ✅</p>
    <p>Qualified applicants proceed. Unqualified ones get filtered out automatically. No human time wasted.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 3: Worker Uploads Documents</h3>
    <p>AI bot requests documents: "Send a photo of your CSCS card" Worker takes photo, sends via WhatsApp. "Send a photo of your passport or ID" Worker sends.</p>
    
    <p>AI verifies: CSCS card expiry date. Right-to-work status. Document authenticity. Time: 1 minute.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 4: H&S Induction</h3>
    <p>AI bot sends H&S induction video link. Worker watches on their phone (5-10 minutes). Signs digitally at the end. Completion tracked automatically.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 5: Manager Reviews & Schedules</h3>
    <p>Manager sees dashboard: Qualified applicants. Verified certs. H&S completion status. Manager clicks "Approve" → Worker gets scheduled. Time: 10 seconds.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Step 6: Worker Gets Site Details</h3>
    <p>Worker receives automated WhatsApp message with site address, start time, contact, dress code. Automated reminders sent day before shift and 2 hours before start time. Result: No-shows reduced 60-80%.</p>
    
    <p><strong>Total time from application to site-ready: 2 minutes (worker time).</strong></p>`
  },
  {
    title: "AI-Powered Screening vs Manual Screening",
    content: `<table class="w-full border-collapse border border-gray-300 mb-6">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 p-3 text-left">Feature</th>
          <th class="border border-gray-300 p-3 text-left">Manual Screening</th>
          <th class="border border-gray-300 p-3 text-left">AI Screening (Pangea)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 p-3">Cost per applicant</td>
          <td class="border border-gray-300 p-3">£20-£50 (manager time)</td>
          <td class="border border-gray-300 p-3"><strong>30p</strong></td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">Time per applicant</td>
          <td class="border border-gray-300 p-3">15-30 minutes</td>
          <td class="border border-gray-300 p-3"><strong>30 seconds</strong></td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">Availability</td>
          <td class="border border-gray-300 p-3">Business hours only</td>
          <td class="border border-gray-300 p-3"><strong>24/7</strong></td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">Accuracy</td>
          <td class="border border-gray-300 p-3">70% (human error)</td>
          <td class="border border-gray-300 p-3"><strong>98%</strong></td>
        </tr>
        <tr>
          <td class="border border-gray-300 p-3">Scalability</td>
          <td class="border border-gray-300 p-3">Limited (manager bandwidth)</td>
          <td class="border border-gray-300 p-3"><strong>Unlimited</strong></td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>Pangea's AI screens for:</strong></p>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li><strong>Trade/skill</strong> — Matches job requirement</li>
      <li><strong>Experience</strong> — Years in trade</li>
      <li><strong>Certifications</strong> — CSCS, NVQs, trade certs</li>
      <li><strong>Location</strong> — Proximity to site</li>
      <li><strong>Availability</strong> — When they can start</li>
    </ul>
    
    <p>AI learns from performance data. Top-rated workers get prioritized automatically. Poor performers get filtered out. Database gets smarter with every job.</p>`
  },
  {
    title: "Construction Onboarding ROI",
    content: `<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Admin Time Saved</h3>
    <p>15-30 hours/week wasted on manual onboarding. Cost per hour: £30-£50. Annual waste: £30,000-£60,000.</p>
    
    <p>Pangea automates: Screening (AI). Cert verification (AI). H&S inductions (digital). Scheduling (automated).</p>
    
    <p><strong>Time saved: 15-30 hours/week. Annual savings: £30,000-£60,000.</strong></p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Faster Onboarding</h3>
    <p>Traditional: 30-60 minutes per worker. Pangea: 2 minutes per worker. Time saved: 28-58 minutes per worker.</p>
    
    <p>If you onboard 10 workers/month: Time saved: 280-580 minutes/month = 4.7-9.7 hours. Cost saved (@ £40/hour): £188-£388/month = £2,256-£4,656/year.</p>
    
    <p>Plus: Workers start 1-2 days sooner = £200-£500/worker productivity gain.</p>
    
    <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">Total ROI (50-Worker Firm)</h3>
    <ul class="list-disc list-inside space-y-2 ml-4 mb-4">
      <li>Admin time saved: £30,000</li>
      <li>Onboarding speed gains: £4,000</li>
      <li>No-show reduction: £31,200</li>
      <li><strong>Total savings: £65,200/year</strong></li>
      <li>Pangea cost: £797/mo = £9,564/year</li>
      <li><strong>ROI: 6.8x</strong></li>
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
    title: "Replace Agencies",
    url: "/replace-agencies",
    description: "Eliminate agency dependency and save £120K+ annually."
  }
];

const schemaData = {
  article: {
    headline: "Construction Worker Onboarding Software: From Application to Site in 2 Minutes",
    description: "Onboard construction workers in 2 minutes via WhatsApp. AI-powered screening, CSCS verification, H&S sign-off. No paperwork from £497/month.",
    url: "https://joinpangea.ai/onboarding-software/",
    datePublished: "2026-03-20",
    dateModified: "2026-03-20"
  },
  faq: { faqs },
  howto: {
    name: "How to Onboard Construction Workers in 2 Minutes with Pangea",
    description: "Complete construction worker onboarding in 2 minutes using WhatsApp-native AI-powered software.",
    totalTime: "PT2M",
    steps: [
      {
        name: "Worker Applies via WhatsApp",
        text: "Worker clicks WhatsApp link. AI bot asks: trade, CSCS card status, availability, location. Time: 30 seconds."
      },
      {
        name: "AI Screens Applicant",
        text: "AI evaluates answers: trade match, CSCS card, availability, location. Qualified applicants proceed, unqualified filtered out automatically."
      },
      {
        name: "Worker Uploads Documents",
        text: "AI bot requests CSCS card photo + passport/ID. Worker sends via WhatsApp. AI verifies expiry dates and authenticity. Time: 1 minute."
      },
      {
        name: "H&S Induction",
        text: "AI bot sends H&S video link. Worker watches (5-10 mins), signs digitally. Completion tracked automatically."
      },
      {
        name: "Manager Reviews & Schedules",
        text: "Manager sees dashboard with qualified applicants, verified certs, H&S status. Clicks 'Approve', worker gets scheduled. Time: 10 seconds."
      },
      {
        name: "Worker Gets Site Details",
        text: "Worker receives automated WhatsApp message with site address, start time, contact details. Automated reminders sent day before and 2 hours before shift."
      },
      {
        name: "Worker Clocks In",
        text: "Worker arrives on site, clocks in via WhatsApp link. GPS verifies location. Manager sees real-time update."
      }
    ]
  }
};

export default function OnboardingSoftwarePage() {
  return (
    <PillarPage
      title="Construction Worker Onboarding Software: From Application to Site in 2 Minutes"
      metaDescription="Onboard construction workers in 2 minutes via WhatsApp. AI-powered screening, CSCS verification, H&S sign-off. No paperwork. From £497/month."
      intro="Construction worker onboarding software automates recruitment screening, compliance checks, and site scheduling — eliminating the 15-30 hours/week your team wastes chasing paperwork.

Traditional onboarding: 30-60 minutes per worker. Pangea's WhatsApp onboarding: 2 minutes.

No app install. No portal login. No paperwork."
      sections={sections}
      faqs={faqs}
      schemaData={schemaData}
      relatedPages={relatedPages}
    />
  );
}
