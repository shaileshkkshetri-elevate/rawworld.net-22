import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Page, GalleryItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Lightbox } from './components/Lightbox';
import { PreviewToolbar } from './components/PreviewToolbar';

import { HomePage } from './pages/HomePage';
import { OneTreeOneVotePage } from './pages/OneTreeOneVotePage';
import { CarbonEnginePage } from './pages/CarbonEnginePage';
import { ImpactPage } from './pages/ImpactPage';
import { TeamPage } from './pages/TeamPage';
import { ContestantsPage } from './pages/ContestantsPage';
import { NewsPage } from './pages/NewsPage';
import { ShowInfoPage } from './pages/ShowInfoPage';

import { CURATED_GALLERY } from './data/gallery';

function parseHashToPage(hash: string): Page {
  const clean = hash.replace(/^#\/?/, '').toLowerCase();
  switch (clean) {
    case 'vote':
    case 'one-tree-one-vote':
    case 'cause':
      return 'vote';
    case 'carbon':
    case 'carbon-engine':
    case 'engine':
      return 'carbon';
    case 'impact':
    case 'sacred-soil':
    case 'regions':
      return 'impact';
    case 'team':
    case 'leadership':
      return 'team';
    case 'contestants':
    case 'laureates':
    case 'champions':
      return 'contestants';
    case 'news':
    case 'media':
    case 'press':
    case 'dispatches':
      return 'news';
    case 'info':
    case 'show-info':
    case 'arena':
    case 'inquire':
    case 'syndicate':
      return 'info';
    default:
      return 'home';
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      return parseHashToPage(window.location.hash);
    }
    return 'home';
  });

  // Lightbox state
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [lightboxList, setLightboxList] = useState<GalleryItem[]>(CURATED_GALLERY);

  // Hero kicker inline editing state
  const [heroKickerPart1, setHeroKickerPart1] = useState(() => {
    try {
      return localStorage.getItem('raw_hero_kicker_part1') || 'Original Television Franchise';
    } catch {
      return 'Original Television Franchise';
    }
  });
  const [isEditingKickerPart1, setIsEditingKickerPart1] = useState(false);
  const [tempKickerPart1, setTempKickerPart1] = useState(heroKickerPart1);

  // Preview environment detection
  const isPreviewEnvironment = useMemo(() => {
    if (typeof window === 'undefined') return true;
    const host = window.location.hostname;
    return (
      host.includes('ais-dev') ||
      host.includes('ais-pre') ||
      host.includes('run.app') ||
      host === 'localhost' ||
      host === '127.0.0.1' ||
      new URLSearchParams(window.location.search).get('edit') === 'true'
    );
  }, []);

  const [previewEditActive, setPreviewEditActive] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('raw_preview_edit_mode');
      if (saved !== null) return saved === 'true';
    } catch {}
    return true;
  });

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const targetPage = parseHashToPage(window.location.hash);
      setCurrentPage(targetPage);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    const hash = page === 'home' ? '' : `#${page}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash || window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openLightbox = useCallback((index: number, list: GalleryItem[]) => {
    setLightboxList(list);
    setActiveLightboxIndex(index);
  }, []);

  const handleImgError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    const currentSrc = target.getAttribute('src') || '';
    if (!target.dataset.tried) {
      target.dataset.tried = '1';
      if (currentSrc.startsWith('/')) {
        target.src = currentSrc.substring(1);
      } else {
        target.src = '/' + currentSrc;
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#1a1a1a] flex flex-col justify-between selection:bg-[#d4a234] selection:text-white">
      
      {/* Top Navigation Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={navigateTo}
        handleImgError={handleImgError}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateTo}
            handleImgError={handleImgError}
            openLightbox={openLightbox}
            heroKickerPart1={heroKickerPart1}
            setHeroKickerPart1={setHeroKickerPart1}
            isEditingKickerPart1={isEditingKickerPart1}
            setIsEditingKickerPart1={setIsEditingKickerPart1}
            tempKickerPart1={tempKickerPart1}
            setTempKickerPart1={setTempKickerPart1}
            previewEditActive={previewEditActive}
          />
        )}

        {currentPage === 'vote' && (
          <OneTreeOneVotePage 
            onNavigate={navigateTo}
            handleImgError={handleImgError}
          />
        )}

        {currentPage === 'carbon' && (
          <CarbonEnginePage 
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'impact' && (
          <ImpactPage 
            onNavigate={navigateTo}
            handleImgError={handleImgError}
          />
        )}

        {currentPage === 'contestants' && (
          <ContestantsPage 
            onNavigate={navigateTo}
            handleImgError={handleImgError}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage 
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'team' && (
          <TeamPage 
            onNavigate={navigateTo}
            handleImgError={handleImgError}
          />
        )}

        {currentPage === 'info' && (
          <ShowInfoPage 
            onNavigate={navigateTo}
            handleImgError={handleImgError}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={navigateTo}
        handleImgError={handleImgError}
      />

      {/* Lightbox Modal */}
      <Lightbox 
        activeLightboxIndex={activeLightboxIndex}
        lightboxList={lightboxList}
        onClose={() => setActiveLightboxIndex(null)}
        onPrev={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxList.length) % lightboxList.length : 0))}
        onNext={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxList.length : 0))}
        onSelectIndex={(idx) => setActiveLightboxIndex(idx)}
        handleImgError={handleImgError}
      />

      {/* Preview Mode Inline Edit Switcher */}
      <PreviewToolbar 
        isVisible={isPreviewEnvironment}
        editActive={previewEditActive}
        onToggle={() => {
          const next = !previewEditActive;
          setPreviewEditActive(next);
          try { localStorage.setItem('raw_preview_edit_mode', String(next)); } catch {}
        }}
      />

    </div>
  );
}
