import React from 'react';
import StyleSelection from '../StyleSelection'; // Adjust path as needed

interface PageProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const GalleryPage: React.FC<PageProps> = ({ isDarkMode, setView }) => {
    const artworks = [
        { src: "/Assets/Famille.jpg", title: "Portrait de Famille", category: "Portrait", year: "2023" },
        { src: "/Assets/1-paysage.jpg", title: "Rivière Sauvage", category: "Paysage", year: "2022" },
        { src: "/Assets/cimg7254.jpg", title: "Majesté du Lion", category: "Animalier", year: "2023" },
        { src: "/Assets/cimg7263.jpg", title: "Abstractions Dorées", category: "Abstrait", year: "2024" },
        { src: "/Assets/1er-M.jpg", title: "Portrait Officiel", category: "Portrait", year: "2021" },
        { src: "/Assets/CIMG7250.jpg", title: "Dignité", category: "Portrait", year: "2022" },
        { src: "/Assets/Fam-Presi.jpg", title: "Héritage Présidentiel", category: "Portrait", year: "2023" },
        { src: "/Assets/cimg7257.jpg", title: "Composition Florale", category: "Nature Morte", year: "2023" },
        { src: "/Assets/Capture-2026-02-03-225916.png", title: "Scène de Vie", category: "Vie Quotidienne", year: "2024" },
    ];

    return (
        <div className={`min-h-screen pt-32 px-6 md:px-12 ${isDarkMode ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'}`}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Galerie d'Œuvres</h1>

                <div className="mb-24">
                    <StyleSelection isDarkMode={isDarkMode} setView={setView} />
                </div>

                <div className="flex gap-4 mb-16 overflow-x-auto pb-4">
                    {['Tout', 'Portraits', 'Paysages', 'Abstrait', 'Animalier'].map(cat => (
                        <button key={cat} className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${isDarkMode ? 'border-white/20 hover:bg-white hover:text-black' : 'border-black/10 hover:bg-black hover:text-white'}`}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                    {artworks.map((art, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden bg-gray-200 mb-4 relative">
                                <img src={art.src} alt={art.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white border border-white px-6 py-2 text-sm tracking-wider uppercase">Voir Détails</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-lg font-medium">{art.title}</h3>
                                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{art.category}, {art.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
