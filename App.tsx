import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

import Footer from './components/Footer';
import gsap from 'gsap';

import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'about' | 'contact'>('home');

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    // Global GSAP settings
    gsap.config({
      autoSleep: 60,
      force3D: true,
    });
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#050505] text-white selection:bg-orange-900 selection:text-orange-100' : 'bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900'} overflow-x-hidden`}>
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} setView={setCurrentView} />
      <main>
        {currentView === 'home' && (
          <>
            <Hero isDarkMode={isDarkMode} setView={setCurrentView} />
          </>
        )}

        {currentView === 'gallery' && <GalleryPage isDarkMode={isDarkMode} setView={setCurrentView} />}
        {currentView === 'contact' && <ContactPage isDarkMode={isDarkMode} />}
        {currentView === 'about' && <AboutPage isDarkMode={isDarkMode} setView={setCurrentView} />}
      </main>

      <Footer isDarkMode={isDarkMode} />

      {/* Footer fixed at bottom right or hidden for infinite feel */}

    </div>
  );
};

export default App;