export interface FAQ {
  question: string;
  answer: string;
}

export function extractFAQs(content: string): FAQ[] {
  const faqs: FAQ[] = [];
  const faqSection = content.match(/## Frequently Asked Questions([\s\S]*?)(?=##|$)/);
  
  if (!faqSection) return faqs;
  
  const faqText = faqSection[1];
  const questions = faqText.match(/\*\*(.+?)\*\*/g);
  
  if (!questions) return faqs;
  
  const parts = faqText.split(/\*\*(.+?)\*\*/);
  
  for (let i = 1; i < parts.length; i += 2) {
    const question = parts[i];
    const answer = parts[i + 1]?.trim().split('\n\n')[0] || '';
    
    if (question && answer) {
      faqs.push({
        question,
        answer: answer.trim()
      });
    }
  }
  
  return faqs;
}

export function extractSections(content: string): Array<{ title: string; content: string }> {
  const sections: Array<{ title: string; content: string }> = [];
  const sectionMatches = content.matchAll(/## (.+?)\n([\s\S]*?)(?=## |$)/g);
  
  for (const match of sectionMatches) {
    const title = match[1];
    const sectionContent = match[2].trim();
    
    // Skip FAQ section as it's handled separately
    if (!title.includes('Frequently Asked Questions') && 
        !title.includes('Internal Links') && 
        !title.includes('External Links') &&
        !title.includes('Schema Markup')) {
      sections.push({ title, content: sectionContent });
    }
  }
  
  return sections;
}

export function extractHero(content: string): { title: string; intro: string } {
  const titleMatch = content.match(/# (.+?)\n/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Get first paragraph after H1
  const introMatch = content.match(/# .+?\n\n([\s\S]*?)(?=\n\n##|\n\n\[|$)/);
  const intro = introMatch ? introMatch[1].trim().split('\n\n').slice(0, 3).join('\n\n') : '';
  
  return { title, intro };
}

export function renderMarkdownToHTML(markdown: string): string {
  let html = markdown;
  
  // Convert bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Convert links
  html = html.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-orange-600 hover:text-orange-700 underline">$1</a>');
  
  // Convert H3
  html = html.replace(/### (.+?)\n/g, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  
  // Convert lists
  html = html.replace(/^- \*\*(.+?):\*\* (.+)$/gm, '<li class="mb-2"><strong>$1:</strong> $2</li>');
  html = html.replace(/^- (.+)$/gm, '<li class="mb-2">$1</li>');
  
  // Wrap consecutive list items in ul
  html = html.replace(/(<li.*?<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-2 ml-4 mb-4">$&</ul>');
  
  // Convert paragraphs
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<li') || para.trim() === '') {
      return para;
    }
    return `<p class="text-gray-700 leading-relaxed mb-4">${para}</p>`;
  }).join('\n');
  
  return html;
}
