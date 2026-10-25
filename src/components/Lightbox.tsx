import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  activeLightboxIndex: number | null;
  lightboxList: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSelectIndex: (idx: number) => void;
  handleImgError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  activeLightboxIndex,
  lightboxList,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
  handleImgError
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex !== null) {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') onNext();
        if (e.key === 'ArrowLeft') onPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, onClose, onNext, onPrev]);

  if (activeLightboxIndex === null || !lightboxList[activeLightboxIndex]) return null;

  const currentItem = lightboxList[activeLightboxIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="w-full max-w-6xl flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#d4a234] uppercase tracking-wider">
            Photo {activeLightboxIndex + 1} of {lightboxList.length}
          </span>
          <span className="text-xs text-white/30">·</span>
          <span className="text-xs text-[#dcd0bc] bg-[#141009] px-2 py-0.5 rounded-sm border border-[#d4a234]/30">
            {currentItem.location}
          </span>
        </div>

        <button 
          onClick={onClose}
          className="p-2 text-[#dcd0bc] hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          aria-label="Close photo"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Viewport */}
      <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 border border-[#d4a234]/40 text-[#f3d482] hover:text-white hover:bg-black transition-all cursor-pointer"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img 
          src={currentItem.src} 
          alt={currentItem.title} 
          onError={handleImgError}
          className="max-h-[75vh] max-w-full object-contain rounded-sm border border-[#d4a234]/25 shadow-2xl"
        />

        <button 
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 border border-[#d4a234]/40 text-[#f3d482] hover:text-white hover:bg-black transition-all cursor-pointer"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Drawer & Filmstrip */}
      <div className="w-full max-w-4xl text-center z-10" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg sm:text-xl font-serif font-bold text-[#f5ede0]">
          {currentItem.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#dcd0bc] mt-1 max-w-2xl mx-auto">
          {currentItem.caption}
        </p>

        {/* Thumbnail Strip */}
        <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto py-2 max-w-2xl mx-auto">
          {lightboxList.slice(Math.max(0, activeLightboxIndex - 3), activeLightboxIndex + 4).map((thumb) => {
            const realIndex = lightboxList.findIndex((item) => item.id === thumb.id);
            return (
              <button 
                key={thumb.id}
                onClick={() => onSelectIndex(realIndex)}
                className={`w-12 h-12 rounded-xs overflow-hidden shrink-0 border transition-all cursor-pointer ${
                  realIndex === activeLightboxIndex ? 'border-[#f3d482] scale-110' : 'border-[#d4a234]/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={thumb.src} alt={thumb.title} onError={handleImgError} className="w-full h-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
