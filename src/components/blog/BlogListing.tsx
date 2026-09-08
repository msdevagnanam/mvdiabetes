'use client';

import { useState, useMemo } from 'react';
import { BlogPost, allBlogPosts, getAllCategories } from '@/data/blogData';
import BlogCard from './BlogCard';

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  
  const categories = ['All', ...getAllCategories()];
  const postsPerPage = 9;

  // Find the featured post (first post, or most recent)
  const featuredPost = allBlogPosts[0];
  
  // Filter remaining posts
  const filteredPosts = useMemo(() => {
    let posts = allBlogPosts.filter(p => p.id !== featuredPost.id); // Exclude featured
    
    if (selectedCategory !== 'All') {
      posts = posts.filter(p => p.category === selectedCategory);
    }
    
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      posts = posts.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    
    return posts;
  }, [searchQuery, selectedCategory, featuredPost.id]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of grid
    document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="container-site py-12 md:py-20">
      {/* Featured Article - only show on page 1 and when no search/filters applied */}
      {currentPage === 1 && selectedCategory === 'All' && searchQuery === '' && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-text-primary border-l-4 border-primary-light pl-4">Featured Article</h2>
          <BlogCard post={featuredPost} featured={true} />
        </div>
      )}

      {/* Filters and Search */}
      <div id="blog-grid" className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-10 pt-4">
        {/* Category Filters (Scrollable) */}
        <div className="flex-1 w-full overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
          <div className="flex gap-2 w-max">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-text-secondary border border-border hover:border-primary hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary-light/50 focus:border-primary-light transition-shadow bg-white"
          />
          <svg className="w-5 h-5 absolute left-3.5 top-3 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-text-secondary">
        Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
      </div>

      {/* Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-white rounded-2xl border border-border mb-16">
          <div className="w-16 h-16 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-2">No articles found</h3>
          <p className="text-text-secondary mb-6">We couldn't find any articles matching your current filters.</p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-primary-light font-semibold hover:text-primary transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary disabled:opacity-50 disabled:hover:border-border disabled:hover:text-text-secondary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
              // Show limited pages on mobile, more on desktop
              if (
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full font-medium transition-colors ${
                      currentPage === page 
                        ? 'bg-primary text-white' 
                        : 'text-text-secondary hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (
                page === currentPage - 2 ||
                page === currentPage + 2
              ) {
                return <span key={page} className="w-10 h-10 flex items-center justify-center text-text-secondary">...</span>;
              }
              return null;
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full border border-border text-text-secondary hover:text-primary hover:border-primary disabled:opacity-50 disabled:hover:border-border disabled:hover:text-text-secondary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2001/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
