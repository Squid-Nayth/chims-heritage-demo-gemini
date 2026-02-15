import React, { useState } from 'react';

interface ArchivesPageProps {
    isDarkMode: boolean;
}

const ArchivesPage: React.FC<ArchivesPageProps> = ({ isDarkMode }) => {
    const [activeVolume, setActiveVolume] = useState<number | null>(1);

    const volumes = [
        { id: 1, title: "Archives Volume 1", images: ["/Assets/CIMG7250.jpg", "/Assets/cimg7254.jpg", "/Assets/cimg7257.jpg", "/Assets/cimg7263.jpg", "/Assets/1er-M.jpg", "/Assets/Famille.jpg"] },
        { id: 2, title: "Archives Volume 2", images: ["/Assets/Fam-Presi.jpg", "/Assets/1-paysage.jpg", "/Assets/CIMG7250.jpg", "/Assets/cimg7254.jpg"] },
        { id: 3, title: "Archives Volume 3", images: ["/Assets/cimg7257.jpg", "/Assets/cimg7263.jpg", "/Assets/Fam-Presi.jpg"] },
        { id: 4, title: "Archives Volume 4", images: ["/Assets/1er-M.jpg", "/Assets/Famille.jpg", "/Assets/1-paysage.jpg"] },
    ];

    return (
        <div className={`min-h-screen pt-32 pb-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">ARCHIVES</h1>
                    <div className="w-24 h-1 bg-gold mb-8"></div>
                    <p className={`text-lg max-w-2xl leading-relaxed transition-colors duration-700 ${isDarkMode ? 'text-white/60' : 'text-zinc-600'}`}>
                        Découvrez les moments, les pensées et émotions authentiques partagées par ceux qui ont vécu notre histoire.
                    </p>
                </div>

                <div className="space-y-4">
                    {volumes.map((vol) => (
                        <div key={vol.id} className={`border transition-colors duration-700 ${isDarkMode ? 'border-white/10' : 'border-black/5'} overflow-hidden`}>
                            <button
                                onClick={() => setActiveVolume(activeVolume === vol.id ? null : vol.id)}
                                className={`w-full flex items-center justify-between p-8 text-left transition-colors ${activeVolume === vol.id ? 'bg-gold text-black' : 'hover:bg-gold/10 hover:text-gold'}`}
                            >
                                <div className="flex items-center gap-6">
                                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${activeVolume === vol.id ? 'text-black/50' : 'text-gold'}`}>VOL {vol.id.toString().padStart(2, '0')}</span>
                                    <span className="text-2xl font-bold tracking-tighter uppercase">{vol.title}</span>
                                </div>
                                <span className="text-2xl font-light">{activeVolume === vol.id ? '−' : '+'}</span>
                            </button>

                            {activeVolume === vol.id && vol.images.length > 0 && (
                                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                                    {vol.images.map((img, idx) => (
                                        <div key={idx} className={`aspect-[4/5] overflow-hidden shadow-xl ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`}>
                                            <img src={img} alt={`Archive ${vol.id}-${idx}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {activeVolume === vol.id && vol.images.length === 0 && (
                                <div className="p-16 text-center opacity-30 italic">À venir prochainement...</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArchivesPage;
