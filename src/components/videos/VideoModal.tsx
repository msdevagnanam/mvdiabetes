'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { VideoItem } from '@/data/videos';

interface VideoModalProps {
    video: VideoItem;
    onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    
    // Close on ESC key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);
    
    // Trap focus and prevent body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        // Basic focus trap - focus the close button initially
        const focusableElements = modalRef.current?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
            (focusableElements[0] as HTMLElement).focus();
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // Close when clicking the backdrop
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 transition-opacity"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            ref={modalRef}
        >
            <div className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col">
                
                {/* Header */}
                <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
                    <h2 id="modal-title" className="text-white font-bold text-lg line-clamp-1 pr-4">
                        {video.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                        aria-label="Close video player"
                    >
                        <X size={20} />
                    </button>
                </div>
                
                {/* Player Area */}
                <div className="relative w-full aspect-video bg-black">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                    />
                </div>
            </div>
        </div>
    );
}
