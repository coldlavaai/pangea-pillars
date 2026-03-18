'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 last:border-b-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-4 hover:bg-gray-50 transition flex justify-between items-center"
          >
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-700 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
