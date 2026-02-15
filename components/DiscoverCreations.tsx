import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique' | 'account') => void;
}

const DiscoverCreations: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    return (
        <section className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-white' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Découvrez nos créations
                    </h2>
                    <button
                        className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all hover:scale-105 ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}
                        onClick={() => setView('boutique')}
                    >
                        Boutique
                    </button>
                </div>

                <div className="relative h-[600px] rounded-[2rem] overflow-hidden group shadow-2xl">
                    <img
                        src="/Assets/cimg7263.jpg"
                        alt="Atelier workshop"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-12 left-12 max-w-lg">
                        <h3 className="text-3xl font-bold text-white mb-4">Œuvres de paysages</h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Découvrez la beauté sauvage de nos paysages, capturée avec une passion pour la nature et un souci du détail qui rend chaque toile vivante.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-12 h-1 bg-gold rounded-full"></div>
                            <div className="w-3 h-1 bg-white/30 rounded-full"></div>
                            <div className="w-3 h-1 bg-white/30 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverCreations;
