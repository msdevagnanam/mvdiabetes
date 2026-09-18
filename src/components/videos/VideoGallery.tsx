'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { videos, VideoCategory, VideoItem } from '@/data/videos';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';

// Derive unique categories from data
const ALL_CATEGORIES: VideoCategory[] = [
    'Patient Stories', 
    'Education', 
    'Legacy & History', 
    'Media Coverage', 
    'Events', 
    'MV Diabetes'
];

export default function VideoGallery() {
    const [activeCategory, setActiveCategory] = useState<VideoCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

    // Filter videos based on category and search query
    const filteredVideos = useMemo(() => {
        return videos.filter(video => {
            const matchesCategory = activeCategory === 'All' || video.category === activeCategory;
            const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  video.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            // Exclude the featured one if we want to show it separately, but here we show all in grid
            // unless requested otherwise. The prompt requested a featured video area, but the 
            // grid should likely contain all. Let's keep all in the grid for now.
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section id="gallery" className="py-20 bg-surface">
            <div className="container-site">
                
                {/* Section Header & Filters */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">Explore Our Videos</h2>
                        <p className="text-text-secondary text-lg">Watch patient stories, educational content, and more.</p>
                    </div>

                    <div className="w-full lg:w-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-text-secondary">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full lg:w-80 bg-white border border-border rounded-xl py-3 pl-11 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                            aria-label="Search videos"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-secondary hover:text-text-primary"
                                aria-label="Clear search"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-4 mb-8 mask-gradient-right">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap border ${
                            activeCategory === 'All'
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white text-text-secondary border-border hover:border-primary/30 hover:text-primary'
                        }`}
                    >
                        All
                    </button>
                    {ALL_CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors whitespace-nowrap border ${
                                activeCategory === category
                                    ? 'bg-primary text-white border-primary'
                                    : 'bg-white text-text-secondary border-border hover:border-primary/30 hover:text-primary'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Video Grid */}
                {filteredVideos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredVideos.map((video, idx) => (
                            <VideoCard 
                                key={`${video.id}-${idx}`} 
                                video={video} 
                                onClick={setSelectedVideo} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center bg-surface-muted rounded-2xl border border-border">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-text-secondary shadow-sm">
                            <Search size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary mb-2">No videos found</h3>
                        <p className="text-text-secondary max-w-md mx-auto">
                            We couldn't find any videos matching your search for "{searchQuery}". Try adjusting your filters or search term.
                        </p>
                        <button 
                            onClick={() => {
                                setSearchQuery('');
                                setActiveCategory('All');
                            }}
                            className="mt-6 font-bold text-primary hover:text-primary-dark transition-colors"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

            </div>

            {/* Video Modal Portal */}
            {selectedVideo && (
                <VideoModal 
                    video={selectedVideo} 
                    onClose={() => setSelectedVideo(null)} 
                />
            )}
        </section>
    );
}
