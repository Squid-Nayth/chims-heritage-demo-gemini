import React from 'react';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleTheme, setView }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300 pointer-events-auto shadow-sm border-b ${isDarkMode ? 'bg-[#050505]/95 backdrop-blur-md border-white/10' : 'bg-white/95 backdrop-blur-md border-gray-100'}`}>
      {/* Logo */}
      <div className={`text-lg font-medium tracking-tight cursor-pointer flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-black'}`} onClick={() => setView('home')}>
        <img src="/Assets/Capture-Chims.png" alt="Chim's Heritage Logo" className="h-8 w-auto object-contain" />
        <span className="font-serif italic text-xl">Chim's Heritage</span>
      </div>

      {/* Center Links & Toggle */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center gap-8 mr-4">
          <button className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setView('gallery')}>Galerie</button>
          <button className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setView('about')}>À propos</button>
          <button className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setView('contact')}>Services</button>
        </div>


      </div>

      {/* CTA & Cart & Theme */}
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
        <button className={`p-2 rounded-full transition-colors duration-300 ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'}`} aria-label="Panier">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        </button>
        <button className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1 group ${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-900'}`} onClick={() => setView('contact')}>
          Commander une œuvre <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;