import React, { useState } from 'react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setView: (view: 'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique' | 'account' | 'services') => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleTheme, setView }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[60] px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300 pointer-events-auto shadow-sm border-b ${isDarkMode ? 'bg-[#1A1816]/90 backdrop-blur-md border-white/5' : 'bg-[#F3F1ED]/90 backdrop-blur-md border-gray-200'}`}>
        {/* Logo */}
        <div className={`text-lg font-medium tracking-tight cursor-pointer flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={() => { setView('home'); setIsAboutOpen(false); setIsGalleryOpen(false); }}>
          <img src="/Assets/Capture-Chims.png" alt="Chim's Heritage Logo" className="h-8 w-auto object-contain" />
          <span className="font-serif italic text-xl">Chim's Heritage</span>
        </div>

        {/* Center Links & Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-8 mr-4">
            {/* Gallery Dropdown Trigger */}
            <div className="relative">
              <button
                className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'} ${isGalleryOpen ? 'text-gold' : ''}`}
                onClick={() => {
                  setView('home');
                  setTimeout(() => {
                    document.getElementById('style-selection')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                  setIsGalleryOpen(!isGalleryOpen);
                  setIsAboutOpen(false);
                }}
              >
                Galerie
                <svg className={`w-3 h-3 transition-transform duration-300 ${isGalleryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>

            <button className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('home'); setTimeout(() => document.getElementById('custom-portraits')?.scrollIntoView({ behavior: 'smooth' }), 100); setIsAboutOpen(false); setIsGalleryOpen(false); }}>Services</button>

            {/* About Dropdown Trigger */}
            <div className="relative">
              <button
                className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'} ${isAboutOpen ? 'text-gold' : ''}`}
                onClick={() => {
                  setView('home');
                  setTimeout(() => {
                    document.getElementById('artists')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                  setIsAboutOpen(!isAboutOpen);
                  setIsGalleryOpen(false);
                }}
              >
                À propos
                <svg className={`w-3 h-3 transition-transform duration-300 ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>

            <button className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('boutique'); setIsAboutOpen(false); setIsGalleryOpen(false); }}>Boutique</button>

            <button className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('home'); setTimeout(() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }), 100); setIsAboutOpen(false); setIsGalleryOpen(false); }}>Avis</button>
          </div>
        </div>

        {/* Actions & Theme */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>

          {/* Mon Compte (Icon Style) */}
          <button
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`}
            onClick={() => { setView('account'); setIsAboutOpen(false); setIsGalleryOpen(false); }}
            aria-label="Mon Compte"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </button>

          {/* Panier */}
          <button className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`} aria-label="Panier">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>

          {/* Contact (Text Style) */}
          <button
            className={`ml-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${isDarkMode ? 'text-white hover:text-gold' : 'text-black hover:text-gold'}`}
            onClick={() => { setView('contact'); setIsAboutOpen(false); setIsGalleryOpen(false); }}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Gallery Megamenu Dropdown */}
      <div className={`fixed left-0 w-full z-50 transition-all duration-500 ease-in-out ${isGalleryOpen ? 'top-[72px] opacity-100 visible' : 'top-[50px] opacity-0 invisible pointer-events-none'}`}>
        <div className={`w-full shadow-2xl border-b ${isDarkMode ? 'bg-[#1A1816] border-white/5' : 'bg-[#F3F1ED] border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <button className={`text-xs font-bold tracking-[0.2em] uppercase hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('gallery'); setIsGalleryOpen(false); }}>Toutes les œuvres</button>
            </div>
            <div>
              <button className={`text-xs font-bold tracking-[0.2em] uppercase hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('paysages'); setIsGalleryOpen(false); }}>Paysages</button>
            </div>
            <div>
              <button className={`text-xs font-bold tracking-[0.2em] uppercase hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('elephants'); setIsGalleryOpen(false); }}>Royaume des Éléphants</button>
            </div>
            <div>
              <button className={`text-xs font-bold tracking-[0.2em] uppercase hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('spirituelles'); setIsGalleryOpen(false); }}>Peintures Spirituelles</button>
            </div>
            <div>
              <button className={`text-xs font-bold tracking-[0.2em] uppercase hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('musee'); setIsGalleryOpen(false); }}>Musée Familial</button>
            </div>
          </div>
        </div>
        <div className="h-screen w-full bg-black/5 backdrop-blur-[2px]" onClick={() => setIsGalleryOpen(false)}></div>
      </div>

      {/* About Megamenu Dropdown */}
      <div className={`fixed left-0 w-full z-50 transition-all duration-500 ease-in-out ${isAboutOpen ? 'top-[72px] opacity-100 visible' : 'top-[50px] opacity-0 invisible pointer-events-none'}`}>
        <div className={`w-full shadow-2xl border-b ${isDarkMode ? 'bg-[#1A1816] border-white/5' : 'bg-[#F3F1ED] border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">

            {/* Column 1 */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-gold">Nos Artistes</h3>
              <ul className="space-y-4">
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('biographie'); setIsAboutOpen(false); }}>Chim's l'Artiste / Biographie</button></li>
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('cv'); setIsAboutOpen(false); }}>Parcours Artistique / CV</button></li>
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('philosophie'); setIsAboutOpen(false); }}>Philosophie Artistique</button></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-gold">Nos Archives</h3>
              <ul className="space-y-4">
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('tous-archives'); setIsAboutOpen(false); }}>Œuvres Archivés</button></li>
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('portraits-uniques'); setIsAboutOpen(false); }}>Portraits Uniques</button></li>
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`}>Partenaires</button></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-8 text-gold">Événements</h3>
              <ul className="space-y-4">
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`} onClick={() => { setView('evenements'); setIsAboutOpen(false); }}>Publications / Événements</button></li>
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`}>Livre d'or</button></li>
                <li><button className={`text-sm hover:translate-x-1 transition-transform ${isDarkMode ? 'text-white/60 hover:text-gold' : 'text-zinc-600 hover:text-gold'}`}>À venir...</button></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Overlay to close when clicking outside */}
        <div className="h-screen w-full bg-black/5 backdrop-blur-[2px]" onClick={() => setIsAboutOpen(false)}></div>
      </div>
    </>
  );
};

export default Navigation;