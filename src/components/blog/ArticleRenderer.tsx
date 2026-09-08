import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleRendererProps {
  content: string;
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  return (
    <div className="font-sans text-base lg:text-lg text-text-secondary leading-relaxed max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mt-10 mb-5 leading-tight" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-bold text-text-primary mt-8 mb-4 leading-tight" {...props} />,
          h4: ({node, ...props}) => <h4 className="text-lg md:text-xl font-bold text-text-primary mt-6 mb-3 leading-tight" {...props} />,
          p: ({node, ...props}) => <p className="mb-6" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-outside ml-5 mb-6 space-y-2" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-5 mb-6 space-y-2" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-primary-light pl-6 py-2 my-8 bg-primary-light/5 rounded-r-xl italic text-primary text-lg" {...props} />
          ),
          a: ({node, ...props}) => <a className="text-primary-light font-semibold hover:text-primary transition-colors underline underline-offset-4 decoration-primary-light/30 hover:decoration-primary" {...props} />,
          img: ({node, ...props}) => <img className="rounded-2xl shadow-lg my-10 w-full object-cover" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-text-primary" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
