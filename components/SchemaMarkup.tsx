import Script from 'next/script';

interface FAQ {
  question: string;
  answer: string;
}

interface SchemaMarkupProps {
  type: 'article' | 'faq' | 'howto';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schema: any = {};

  if (type === 'article') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.headline,
      "description": data.description,
      "image": data.image || "https://joinpangea.ai/images/pangea-hero.jpg",
      "author": {
        "@type": "Organization",
        "name": "Pangea"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pangea",
        "logo": {
          "@type": "ImageObject",
          "url": "https://joinpangea.ai/images/logo.png"
        }
      },
      "datePublished": data.datePublished || "2026-03-20",
      "dateModified": data.dateModified || "2026-03-20",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url
      }
    };
  } else if (type === 'faq') {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((faq: FAQ) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  } else if (type === 'howto') {
    schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": data.name,
      "description": data.description,
      "totalTime": data.totalTime || "PT2M",
      "step": data.steps.map((step: any, index: number) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text
      }))
    };
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
