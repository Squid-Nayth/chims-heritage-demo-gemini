import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique' | 'account') => void;
}

const StyleSelection: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    const styles = [
        { src: "/Assets/Famille.jpg", alt: "PORTRAIT", desc: "Capturez l'essence et l'âme à travers des portraits réalistes." },
        { src: "/Assets/1-paysage.jpg", alt: "PAYSAGES", desc: "L'immensité de la nature capturée dans toute sa grandeur." },
        { src: "/Assets/cimg7254.jpg", alt: "ROYAUME DES ÉLÉPHANTS", desc: "Majesté des géants de nos forêts protégées." },
        { src: "/Assets/cimg7263.jpg", alt: "PEINTURES SPIRITUELLES", desc: "L'invisible devient visible par des traits inspirés." },
        { src: "/Assets/1er-M.jpg", alt: "MUSÉE FAMILIAL", desc: "Immortalisez vos souvenirs familiaux précieux." },
    ];

    return (
        <section id="style-selection" className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-white' : 'bg-[#F3F1ED] text-zinc-900'}`}>
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Quel style préférez-vous ?
                    </h2>
                    <p className={`text-lg max-w-lg ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                        Explorez des collections d'œuvres influencées par une gamme d'émotions et de techniques.
                    </p>
                </div>
                <button
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all hover:scale-105 ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}
                    onClick={() => setView('gallery')}
                >
                    Visiter la galerie d'oeuvres
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-0 h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                {styles.map((style, index) => (
                    <div key={index} className="relative group h-full overflow-hidden">
                        <img
                            src={style.src}
                            alt={style.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Title overlay on hover */}
                        <div className="absolute inset-x-0 bottom-0 py-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <h3 className="text-white font-bold tracking-[0.2em] text-center text-sm uppercase">{style.alt}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StyleSelection;
