import React from 'react';


interface PageProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique') => void;
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
        { src: "/Assets/1-paysage.jpg", title: "Horizon Lointain", category: "Paysage", year: "2024" },
        { src: "/Assets/CIMG7250.jpg", title: "Regard Serein", category: "Portrait", year: "2023" },
        { src: "/Assets/Famille.jpg", title: "Unité", category: "Portrait", year: "2024" },
        { src: "/Assets/cimg7263.jpg", title: "Vibration Éthérée", category: "Spirituelle", year: "2023" },
    ];

    return (
        <div className={`min-h-screen pt-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Galerie d'Œuvres</h1>


                <div className="flex gap-4 mb-16 overflow-x-auto pb-4">
                    {['Tout', 'Portraits', 'Paysages', 'Abstrait', 'Animalier'].map(cat => (
                        <button key={cat} className={`px-6 py-2 rounded-full border text-sm font-medium transition-colors whitespace-nowrap ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}>
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
                                    <span className="text-white border border-white px-6 py-2 text-sm tracking-wider uppercase">VOIR DÉTAILS</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-lg font-medium">{art.title}</h3>
                                <span className={`text-xs ${isDarkMode ? 'text-white/40' : 'text-gray-400'}`}>{art.category}, {art.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
