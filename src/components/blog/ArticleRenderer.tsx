import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleRendererProps {
  content: string;
}

function getHeadingId(children: React.ReactNode): string {
  const getText = (node: React.ReactNode): string => {
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getText).join('');
    if (node && typeof node === 'object' && 'props' in node) {
      return getText((node as { props: { children?: React.ReactNode } }).props?.children);
    }
    return '';
  };
  return getText(children)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <div className="blog-article-content prose max-w-none font-sans text-base lg:text-lg text-text-secondary leading-relaxed">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ node, children, ...props }) => {
            const id = getHeadingId(children);
            return (
              <h2 id={id} className="text-2xl md:text-3xl font-extrabold text-text-primary mt-10 mb-5 leading-tight scroll-mt-28" {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ node, children, ...props }) => {
            const id = getHeadingId(children);
            return (
              <h3 id={id} className="text-xl md:text-2xl font-bold text-text-primary mt-8 mb-4 leading-tight scroll-mt-28" {...props}>
                {children}
              </h3>
            );
          },
          h4: ({ node, ...props }) => <h4 className="text-lg md:text-xl font-bold text-text-primary mt-6 mb-3 leading-tight" {...props} />,
          p: ({ node, ...props }) => <p className="mb-6" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-5 mb-6 space-y-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-5 mb-6 space-y-2" {...props} />,
          li: ({ node, ...props }) => <li className="pl-1" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary-light pl-6 py-2 my-8 bg-primary-light/5 rounded-r-xl italic text-primary text-lg" {...props} />
          ),
          a: ({ node, ...props }) => <a className="text-primary-light font-semibold hover:text-primary transition-colors underline underline-offset-4 decoration-primary-light/30 hover:decoration-primary" {...props} />,
          img: ({ node, ...props }) => <img className="rounded-2xl shadow-lg my-10 w-full object-cover" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-bold text-text-primary" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
