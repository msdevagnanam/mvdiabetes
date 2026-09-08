export default function BlogPlaceholderImage({ title, category }: { title: string, category: string }) {
  return (
    <div className="w-full h-full bg-primary-dark flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2001/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2v4h4" />
          </svg>
        </div>
        <span className="text-primary-light text-xs font-bold uppercase tracking-wider mb-2">{category}</span>
        <h3 className="text-white font-bold text-lg leading-tight line-clamp-3">{title}</h3>
      </div>
    </div>
  );
}
