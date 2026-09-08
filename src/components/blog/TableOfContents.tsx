'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find all headings within the article content
    const articleContent = document.querySelector('.prose');
    if (!articleContent) return;

    const elements = Array.from(articleContent.querySelectorAll('h2, h3'));
    
    // Add IDs to headings if they don't have them
    const items: TOCItem[] = elements.map((element, index) => {
      if (!element.id) {
        element.id = `heading-${index}`;
      }
      return {
        id: element.id,
        title: element.textContent || '',
        level: element.tagName === 'H2' ? 2 : 3,
      };
    });

    // eslint-disable-next-line
    setHeadings(items);

    // Setup intersection observer to highlight active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    elements.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="bg-surface-muted rounded-2xl p-6 border border-border sticky top-24">
      <h3 className="font-bold text-text-primary text-lg mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
        Table of Contents
      </h3>
      
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              setActiveId(heading.id);
            }}
            className={`block py-1.5 text-sm transition-colors duration-200 ${
              heading.level === 3 ? 'ml-4' : ''
            } ${
              activeId === heading.id
                ? 'text-primary font-bold border-l-2 border-primary pl-2'
                : 'text-text-secondary hover:text-primary border-l-2 border-transparent pl-2 hover:border-primary-light/50'
            }`}
          >
            {heading.title}
          </a>
        ))}
      </nav>
    </div>
  );
}
