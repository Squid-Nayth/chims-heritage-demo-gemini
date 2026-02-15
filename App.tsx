import React, { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';
import gsap from 'gsap';

import StyleSelection from './components/StyleSelection';
import CustomPortraits from './components/CustomPortraits';
import Mission from './components/Mission';
import Artists from './components/Artists';
import DiscoverCreations from './components/DiscoverCreations';
import Testimonials from './components/Testimonials';
import CookieBanner from './components/CookieBanner';

import GalleryPage from './components/pages/GalleryPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import CategoryPage from './components/pages/CategoryPage';
import BiographyPage from './components/pages/BiographyPage';
import CVPage from './components/pages/CVPage';
import PhilosophiePage from './components/pages/PhilosophiePage';
import ArchivesPage from './components/pages/ArchivesPage';
import EvenementsPage from './components/pages/EvenementsPage';
import BoutiquePage from './components/pages/BoutiquePage';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique' | 'account' | 'services'>('home');

  const categoryData = {
    paysages: {
      title: "PAYSAGES",
      description: "Les paysages renferment dans notre environnement tropicale Africain de grandes valeurs naturelles qui s'expriment au quotidien.",
      images: [
        { src: "/Assets/1-paysage.jpg", caption: "La Canyonne de Franceville" },
        { src: "/Assets/cimg7263.jpg", caption: "Vue Panoramique" },
        { src: "/Assets/Fam-Presi.jpg", caption: "Horizon Gabonais" },
        { src: "/Assets/1-paysage.jpg", caption: "Nature Sauvage" },
        { src: "/Assets/cimg7257.jpg", caption: "Forêt Tropicale" },
        { src: "/Assets/CIMG7250.jpg", caption: "Paysage de l'Ogooué" },
      ]
    },
    spirituelles: {
      title: "PEINTURES SPIRITUELLES",
      description: "Explorez des collections de peintures spirituelles, chaque toile une porte ouverte sur la transcendance artistique.",
      images: [
        { src: "/Assets/cimg7263.jpg", caption: "Vibration Divine" },
        { src: "/Assets/cimg7254.jpg", caption: "Harmonie Sacrée" },
        { src: "/Assets/cimg7257.jpg", caption: "Lumière Intérieure" },
        { src: "/Assets/cimg7263.jpg", caption: "Éveil Spirituel" },
        { src: "/Assets/cimg7254.jpg", caption: "Force Cosmique" },
        { src: "/Assets/cimg7257.jpg", caption: "Paix Profonde" },
      ]
    },
    elephants: {
      title: "ROYAUME DES ÉLÉPHANTS",
      description: "Chaque œuvre capturant la majesté et la grâce de ces créatures impressionnantes.",
      images: [
        { src: "/Assets/CIMG7250.jpg", caption: "Roi de la Savane" },
        { src: "/Assets/CIMG7250.jpg", caption: "Marche Tranquille" },
        { src: "/Assets/CIMG7250.jpg", caption: "Sagesse Ancestrale" },
        { src: "/Assets/CIMG7250.jpg", caption: "Le Patriarche" },
        { src: "/Assets/CIMG7250.jpg", caption: "Famille Royale" },
        { src: "/Assets/CIMG7250.jpg", caption: "Majesté" },
      ]
    },
    musee: {
      title: "MUSÉE FAMILIAL",
      description: "Explorez une collection de portraits de famille exceptionnels.",
      images: [
        { src: "/Assets/musee-fam.jpg", caption: "Portrait de Famille" },
        { src: "/Assets/Fam-Presi.jpg", caption: "Réunion Présidentielle" },
        { src: "/Assets/Famille.jpg", caption: "Générations" },
        { src: "/Assets/Fam-Presi.jpg", caption: "Héritage Commun" },
        { src: "/Assets/Famille.jpg", caption: "Liens Sacrés" },
        { src: "/Assets/Fam-Presi.jpg", caption: "Unité Familiale" },
      ]
    },
    'portraits-uniques': {
      title: "PORTRAITS UNIQUES",
      description: "Parmi nos clients, des personnalités éminentes qui ont choisi l'excellence.",
      images: [
        { src: "/Assets/1er-M.jpg", caption: "Portrait de Leader" },
        { src: "/Assets/1er-M.jpg", caption: "Excellence" },
        { src: "/Assets/1er-M.jpg", caption: "Prestige" },
        { src: "/Assets/1er-M.jpg", caption: "Visionnaire" },
        { src: "/Assets/1er-M.jpg", caption: "Éminence" },
        { src: "/Assets/1er-M.jpg", caption: "Portrait Officiel" },
      ]
    }
  };

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
    <div className={`min-h-screen transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED] selection:bg-orange-800 selection:text-orange-100' : 'bg-[#F3F1ED] text-[#1A1816] selection:bg-orange-100 selection:text-orange-900'} overflow-x-hidden`}>
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} setView={setCurrentView} />
      <main>
        {currentView === 'home' && (
          <>
            <Hero isDarkMode={isDarkMode} setView={setCurrentView} />
            <StyleSelection isDarkMode={isDarkMode} setView={setCurrentView} />
            <CustomPortraits isDarkMode={isDarkMode} setView={setCurrentView} />
            <Mission isDarkMode={isDarkMode} setView={setCurrentView} />
            <Artists isDarkMode={isDarkMode} setView={setCurrentView} />
            <DiscoverCreations isDarkMode={isDarkMode} setView={setCurrentView} />
            <Testimonials isDarkMode={isDarkMode} />
          </>
        )}

        {currentView === 'gallery' && <GalleryPage isDarkMode={isDarkMode} setView={setCurrentView} />}
        {currentView === 'contact' && <ContactPage isDarkMode={isDarkMode} />}
        {currentView === 'about' && <AboutPage isDarkMode={isDarkMode} setView={setCurrentView} />}

        {currentView === 'paysages' && <CategoryPage {...categoryData.paysages} isDarkMode={isDarkMode} />}
        {currentView === 'spirituelles' && <CategoryPage {...categoryData.spirituelles} isDarkMode={isDarkMode} />}
        {currentView === 'elephants' && <CategoryPage {...categoryData.elephants} isDarkMode={isDarkMode} />}
        {currentView === 'musee' && <CategoryPage {...categoryData.musee} isDarkMode={isDarkMode} />}
        {currentView === 'portraits-uniques' && <CategoryPage {...categoryData['portraits-uniques']} isDarkMode={isDarkMode} />}
        {currentView === 'biographie' && <BiographyPage isDarkMode={isDarkMode} />}
        {currentView === 'cv' && <CVPage isDarkMode={isDarkMode} />}
        {currentView === 'philosophie' && <PhilosophiePage isDarkMode={isDarkMode} />}
        {currentView === 'tous-archives' && <ArchivesPage isDarkMode={isDarkMode} />}
        {currentView === 'evenements' && <EvenementsPage isDarkMode={isDarkMode} />}
        {currentView === 'boutique' && <BoutiquePage isDarkMode={isDarkMode} />}
        {currentView === 'account' && (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Mon Compte</h2>
              <p className="opacity-50 italic">Espace membre en cours de maintenance...</p>
            </div>
          </div>
        )}
      </main>

      <Footer isDarkMode={isDarkMode} />
      <CookieBanner isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;