'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Camera, Images, Building2 } from 'lucide-react';
import {
  infrastructureLocations,
  infrastructureCategories,
  type InfrastructureFacility,
  type InfrastructureCategory,
  type InfrastructureImage,
} from '@/data/infrastructure';

// ============================================================
// LIGHTBOX
// ============================================================

function Lightbox({
  facility,
  imageIndex,
  onClose,
  onPrev,
  onNext,
}: {
  facility: InfrastructureFacility;
  imageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number>(0);

  const image = facility.images[imageIndex];
  const total = facility.images.length;

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = '';
      previousFocus.current?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  const locationName = facility.location === 'royapuram' ? 'Royapuram, Chennai' : 'Koramangala, Bengaluru';

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={`${facility.title} image gallery`}
        className="relative w-full h-full flex flex-col items-center justify-center outline-none p-4 md:p-8"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex items-start justify-between z-10">
          <div>
            <h3 className="text-white font-bold text-lg md:text-xl">{facility.title}</h3>
            <p className="text-white/60 text-sm flex items-center gap-1.5 mt-1">
              <MapPin size={14} /> {locationName}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors shrink-0"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-5xl max-h-[70vh] flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-fadeIn"
          />
        </div>

        {/* Counter */}
        <div className="mt-4 text-white/70 text-sm font-medium">
          {imageIndex + 1} / {total}
        </div>

        {/* Navigation */}
        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ============================================================
// FACILITY CARD
// ============================================================

function FacilityCard({
  facility,
  onOpen,
}: {
  facility: InfrastructureFacility;
  onOpen: (facility: InfrastructureFacility, index: number) => void;
}) {
  const hasImages = facility.images.length > 0;
  const primaryImage = hasImages ? facility.images[0] : null;
  const photoCount = facility.images.length;
  const locationLabel = facility.location === 'royapuram' ? 'Royapuram' : 'Koramangala';

  return (
    <div className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300">
      {/* Image area */}
      <button
        onClick={() => hasImages && onOpen(facility, 0)}
        disabled={!hasImages}
        className="w-full aspect-[4/3] relative overflow-hidden bg-surface-muted block"
        aria-label={hasImages ? `View ${facility.title} gallery` : facility.title}
      >
        {primaryImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={primaryImage.src}
              alt={primaryImage.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-2 text-primary-dark font-semibold text-sm shadow-lg">
                <Images size={16} />
                View Gallery
              </div>
            </div>
            {/* Photo count badge */}
            {photoCount > 1 && (
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                <Camera size={12} />
                {photoCount}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-text-secondary/40 gap-3 p-6">
            <Building2 size={40} strokeWidth={1.5} />
            <span className="text-sm font-medium text-center">No image available</span>
          </div>
        )}
      </button>

      {/* Info */}
      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-1.5 block">
          {locationLabel}
        </span>
        <h3 className="text-base font-bold text-text-primary leading-snug">
          {facility.title}
        </h3>
        {photoCount > 0 && (
          <p className="text-sm text-text-secondary mt-2">
            {photoCount} {photoCount === 1 ? 'Photo' : 'Photos'}
          </p>
        )}
      </div>
    </div>
  );
}

// ============================================================
// INFRASTRUCTURE EXPLORER
// ============================================================

export default function InfrastructureExplorer() {
  const [activeLocation, setActiveLocation] = useState<string>('royapuram');
  const [activeCategory, setActiveCategory] = useState<InfrastructureCategory>('all');
  const [lightbox, setLightbox] = useState<{
    facility: InfrastructureFacility;
    imageIndex: number;
  } | null>(null);

  const filterRef = useRef<HTMLDivElement>(null);

  const currentLocation = infrastructureLocations.find(l => l.id === activeLocation)!;

  const filteredFacilities = activeCategory === 'all'
    ? currentLocation.facilities
    : currentLocation.facilities.filter(f => f.category === activeCategory);

  // Count facilities with images in each category for the current location
  const categoryCounts = infrastructureCategories.map(cat => ({
    ...cat,
    count: cat.id === 'all'
      ? currentLocation.facilities.length
      : currentLocation.facilities.filter(f => f.category === cat.id).length,
  }));

  const openLightbox = useCallback((facility: InfrastructureFacility, index: number) => {
    setLightbox({ facility, imageIndex: index });
  }, []);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevImage = useCallback(() => {
    if (!lightbox) return;
    const total = lightbox.facility.images.length;
    setLightbox(prev => prev ? {
      ...prev,
      imageIndex: (prev.imageIndex - 1 + total) % total,
    } : null);
  }, [lightbox]);

  const nextImage = useCallback(() => {
    if (!lightbox) return;
    const total = lightbox.facility.images.length;
    setLightbox(prev => prev ? {
      ...prev,
      imageIndex: (prev.imageIndex + 1) % total,
    } : null);
  }, [lightbox]);

  // Reset category when switching locations
  useEffect(() => {
    setActiveCategory('all');
  }, [activeLocation]);

  return (
    <>
      {/* Location Switcher */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
              Explore Our Facilities
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Explore the infrastructure at our two locations across India.
            </p>
          </div>

          {/* Premium Location Switcher */}
          <div className="flex justify-center" role="tablist" aria-label="Select location">
            <div className="inline-flex flex-col sm:flex-row p-2 bg-surface-muted/50 rounded-2xl sm:rounded-[2.5rem] border border-border/60 shadow-inner gap-2 w-full sm:w-auto">
              {infrastructureLocations.map(loc => {
                const isActive = activeLocation === loc.id;
                return (
                  <button
                    key={loc.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${loc.id}`}
                    onClick={() => setActiveLocation(loc.id)}
                    className={`relative z-10 flex items-center gap-4 px-6 md:px-10 py-4 rounded-xl sm:rounded-[2rem] transition-all duration-300 w-full sm:w-auto text-left ${
                      isActive
                        ? 'text-white shadow-lg'
                        : 'text-text-secondary hover:text-primary-dark hover:bg-white'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary rounded-xl sm:rounded-[2rem] -z-10" />
                    )}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive ? 'bg-white/20 shadow-inner' : 'bg-white shadow-sm border border-border/50'
                    }`}>
                      <MapPin size={22} className={isActive ? 'text-white' : 'text-secondary'} />
                    </div>
                    <div>
                      <span className="block text-lg font-extrabold leading-tight">
                        {loc.name}
                      </span>
                      <span className={`block text-sm font-medium mt-0.5 ${
                        isActive ? 'text-white/80' : 'text-text-secondary/70'
                      }`}>
                        {loc.city}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters + Gallery */}
      <section
        id={`panel-${activeLocation}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeLocation}`}
        className="py-16 bg-surface"
      >
        <div className="container-site">
          {/* Category Filter Pills */}
          <div
            ref={filterRef}
            className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center"
          >
            {categoryCounts
              .filter(cat => cat.count > 0)
              .map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === cat.id
                      ? 'bg-primary-dark text-white border-primary-dark shadow-md'
                      : 'bg-white text-text-secondary border-border hover:border-primary/30 hover:text-primary-dark'
                  }`}
                >
                  {cat.label}
                  <span className="ml-1.5 opacity-60">({cat.count})</span>
                </button>
              ))}
          </div>

          {/* Facility Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map(facility => (
              <FacilityCard
                key={facility.id}
                facility={facility}
                onOpen={openLightbox}
              />
            ))}
          </div>

          {filteredFacilities.length === 0 && (
            <div className="text-center py-16 text-text-secondary">
              <p className="text-lg">No facilities found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          facility={lightbox.facility}
          imageIndex={lightbox.imageIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}

      {/* Global animation style */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}
