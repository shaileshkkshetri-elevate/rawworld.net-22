import React, { useState, useMemo } from 'react';
import { Page, MediaDispatch } from '../types';
import { MEDIA_DISPATCHES } from '../data/dispatches';
import { Newspaper, Calendar, ExternalLink, Search, CheckCircle2, ArrowRight } from 'lucide-react';

interface NewsPageProps {
  onNavigate: (page: Page) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNavigate }) => {
  const [mediaYearFilter, setMediaYearFilter] = useState<'all' | '2026' | '2025' | '2024' | '2023'>('all');
  const [mediaLangFilter, setMediaLangFilter] = useState<'all' | 'English' | 'Nepali'>('all');
  const [mediaSortOrder, setMediaSortOrder] = useState<'latest' | 'chronological'>('latest');
  const [mediaSearchQuery, setMediaSearchQuery] = useState('');

  const filteredDispatches = useMemo(() => {
    return MEDIA_DISPATCHES.filter((item) => {
      if (mediaYearFilter !== 'all' && item.year.toString() !== mediaYearFilter) {
        return false;
      }
      if (mediaLangFilter !== 'all' && item.language !== mediaLangFilter) {
        return false;
      }
      if (mediaSearchQuery.trim()) {
        const q = mediaSearchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesOutlet = item.outlet.toLowerCase().includes(q);
        const matchesExcerpt = item.excerpt.toLowerCase().includes(q);
        const matchesDate = item.displayDate.toLowerCase().includes(q);
        const matchesLabel = item.categoryLabel.toLowerCase().includes(q);
        if (!matchesTitle && !matchesOutlet && !matchesExcerpt && !matchesDate && !matchesLabel) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return mediaSortOrder === 'latest' ? timeB - timeA : timeA - timeB;
    });
  }, [mediaYearFilter, mediaLangFilter, mediaSortOrder, mediaSearchQuery]);

  return (
    <div className="py-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Page Header */}
      <div className="pb-12 border-b border-black/[0.08]">
        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 bg-[#d4a234]/15 rounded-xs text-[#d4a234]">
            <Newspaper className="w-4 h-4" />
          </span>
          <span className="editorial-label text-[#d4a234]">Public Record · Press Archive</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold text-[#1a1a1a] leading-[0.95] tracking-tight">
          Media & News <br />
          Dispatches.
        </h1>
        <p className="text-lg text-[#4a4844] mt-6 max-w-3xl font-normal leading-relaxed">
          The complete, chronological public record of Revolutionary Agriculture War from initial 2023 press announcement through nationwide auditions, the 289,973-tree planting campaign, and the 2026 grand finale coronation.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 font-mono text-[11px] text-[#76726b]">
          <span className="inline-flex items-center gap-1.5 text-[#1a1a1a] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#d4a234]"></span>
            26 Verified Publications
          </span>
          <span>·</span>
          <span>National Broadsheets, Digital Portals & Broadcast News</span>
          <span>·</span>
          <span>2023 – 2026 Coverage</span>
        </div>
      </div>

      {/* Filter and Control Panel */}
      <div className="p-6 sm:p-8 bg-white border border-black/[0.08] rounded-xs space-y-6">
        
        {/* Top Row: Search and Sort */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="w-4 h-4 text-[#76726b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              value={mediaSearchQuery}
              onChange={(e) => setMediaSearchQuery(e.target.value)}
              placeholder="Search by outlet (e.g. OnlineKhabar), headline, or topic..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#f8f7f4] border border-black/15 focus:border-[#d4a234] rounded-xs text-xs font-mono text-[#1a1a1a] placeholder:text-[#76726b]/70 focus:outline-none transition-colors"
            />
            {mediaSearchQuery && (
              <button 
                onClick={() => setMediaSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#76726b] hover:text-[#1a1a1a] text-xs font-mono cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort & Language Buttons */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px]">
            
            {/* Sort Order Toggle */}
            <div className="flex items-center gap-1 p-1 bg-[#f8f7f4] border border-black/10 rounded-xs">
              <button
                onClick={() => setMediaSortOrder('latest')}
                className={`px-3 py-1.5 rounded-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                  mediaSortOrder === 'latest'
                    ? 'bg-[#1a1a1a] text-white shadow-xs'
                    : 'text-[#76726b] hover:text-[#1a1a1a]'
                }`}
              >
                Latest First
              </button>
              <button
                onClick={() => setMediaSortOrder('chronological')}
                className={`px-3 py-1.5 rounded-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                  mediaSortOrder === 'chronological'
                    ? 'bg-[#1a1a1a] text-white shadow-xs'
                    : 'text-[#76726b] hover:text-[#1a1a1a]'
                }`}
              >
                Chronological (2023 →)
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-1 p-1 bg-[#f8f7f4] border border-black/10 rounded-xs">
              <button
                onClick={() => setMediaLangFilter('all')}
                className={`px-2.5 py-1.5 rounded-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                  mediaLangFilter === 'all'
                    ? 'bg-[#d4a234] text-white shadow-xs'
                    : 'text-[#76726b] hover:text-[#1a1a1a]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setMediaLangFilter('English')}
                className={`px-2.5 py-1.5 rounded-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                  mediaLangFilter === 'English'
                    ? 'bg-[#d4a234] text-white shadow-xs'
                    : 'text-[#76726b] hover:text-[#1a1a1a]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setMediaLangFilter('Nepali')}
                className={`px-2.5 py-1.5 rounded-xs uppercase tracking-wider transition-all cursor-pointer font-semibold ${
                  mediaLangFilter === 'Nepali'
                    ? 'bg-[#d4a234] text-white shadow-xs'
                    : 'text-[#76726b] hover:text-[#1a1a1a]'
                }`}
              >
                नेपाली
              </button>
            </div>

          </div>

        </div>

        {/* Milestone Era Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-black/[0.06]">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="editorial-label mr-2 hidden sm:inline-block">Filter By Milestone:</span>
            
            <button
              onClick={() => setMediaYearFilter('all')}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-xs border ${
                mediaYearFilter === 'all'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold'
                  : 'border-black/15 bg-white text-[#4a4844] hover:border-[#1a1a1a]'
              }`}
            >
              All Eras ({MEDIA_DISPATCHES.length})
            </button>

            <button
              onClick={() => setMediaYearFilter('2026')}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-xs border ${
                mediaYearFilter === '2026'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold'
                  : 'border-black/15 bg-white text-[#4a4844] hover:border-[#1a1a1a]'
              }`}
            >
              2026 · Grand Finale & Coronation (5)
            </button>

            <button
              onClick={() => setMediaYearFilter('2025')}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-xs border ${
                mediaYearFilter === '2025'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold'
                  : 'border-black/15 bg-white text-[#4a4844] hover:border-[#1a1a1a]'
              }`}
            >
              2025 · Broadcast & Tree Vote (10)
            </button>

            <button
              onClick={() => setMediaYearFilter('2024')}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-xs border ${
                mediaYearFilter === '2024'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold'
                  : 'border-black/15 bg-white text-[#4a4844] hover:border-[#1a1a1a]'
              }`}
            >
              2024 · Auditions & Casting (5)
            </button>

            <button
              onClick={() => setMediaYearFilter('2023')}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer rounded-xs border ${
                mediaYearFilter === '2023'
                  ? 'border-[#1a1a1a] bg-[#1a1a1a] text-white font-bold'
                  : 'border-black/15 bg-white text-[#4a4844] hover:border-[#1a1a1a]'
              }`}
            >
              2023 · Genesis & Hamal Reveal (6)
            </button>
          </div>

          <div className="font-mono text-[11px] text-[#76726b]">
            Showing <span className="font-bold text-[#1a1a1a]">{filteredDispatches.length}</span> of {MEDIA_DISPATCHES.length} dispatches
          </div>

        </div>

      </div>

      {/* Articles Grid */}
      {filteredDispatches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDispatches.map((item) => (
            <article 
              key={item.id}
              className="editorial-card p-6 flex flex-col justify-between group hover:border-[#d4a234]/60 hover:shadow-sm transition-all duration-300"
            >
              {/* Header Meta: SN, Outlet, Language, Year */}
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#76726b] font-bold">
                      #{item.sn.toString().padStart(2, '0')}
                    </span>
                    <span className="px-2 py-0.5 bg-[#f8f7f4] border border-black/10 rounded-xs text-[10px] font-mono font-bold uppercase tracking-wider text-[#1a1a1a]">
                      {item.outlet}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className={`px-1.5 py-0.5 rounded-xs text-[9px] font-mono font-bold tracking-wider uppercase ${
                      item.language === 'English' 
                        ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {item.language === 'English' ? 'EN' : 'नेपाली'}
                    </span>
                    <span className="font-mono text-[10px] text-[#76726b] font-semibold">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Date & Category Tag */}
                <div className="mt-3.5 flex items-center gap-2 text-xs font-mono text-[#d4a234] font-medium">
                  <Calendar className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.displayDate}</span>
                  <span className="text-black/20">·</span>
                  <span className="text-[#76726b] text-[11px] font-sans truncate">{item.categoryLabel}</span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-serif font-bold text-[#1a1a1a] mt-3 group-hover:text-[#d4a234] transition-colors leading-snug">
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.title}
                  </a>
                </h3>

                {/* Summary / Excerpt */}
                <p className="text-xs text-[#4a4844] mt-2.5 leading-relaxed font-normal">
                  {item.excerpt}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a1a1a] group-hover:text-[#d4a234] flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <span className="text-[10px] font-mono text-[#76726b] uppercase tracking-wider">
                  Official Press
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="p-16 text-center bg-white border border-black/[0.08] rounded-xs">
          <Newspaper className="w-10 h-10 text-[#76726b] mx-auto mb-3 opacity-50" />
          <h4 className="text-lg font-serif font-bold text-[#1a1a1a]">No Dispatches Found</h4>
          <p className="text-xs font-mono text-[#76726b] mt-1 max-w-sm mx-auto">
            No press articles matched your current query "{mediaSearchQuery}".
          </p>
          <button 
            onClick={() => {
              setMediaSearchQuery('');
              setMediaYearFilter('all');
              setMediaLangFilter('all');
            }}
            className="mt-4 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-[#1a1a1a] text-white rounded-xs font-semibold hover:bg-[#d4a234] transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </div>
  );
};
