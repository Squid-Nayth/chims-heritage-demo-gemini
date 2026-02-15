import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique' | 'account') => void;
}

const Artists: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    const artists = [
        {
            name: "CHIMA OGBONNAYA",
            image: "/Assets/Chims-lartiste.jpeg",
            role: "Maître Artiste"
        },
        {
            name: "AGWAOMA HARMONIE",
            image: "/Assets/Agwama.jpg",
            role: "Artiste Peintre"
        },
        {
            name: "PONCTUALITÉ ETETAMNUURA",
            image: "/Assets/Eteta.jpg",
            role: "Artiste Peintre"
        },
        {
            name: "GIFT CHIMAAMAKA",
            image: "/Assets/Chimaamaka.jpg",
            role: "Apprentie"
        },
    ];

    return (
        <section id="artists" className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-white' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-7xl mx-auto">
                <div className={`mb-16 border-b pb-8 flex justify-between items-end ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Nos artistes</h2>
                    <button
                        className={`hidden md:block px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all hover:scale-105 ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}
                        onClick={() => setView('biographie')}
                    >
                        En savoir plus sur nous
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {artists.map((artist, index) => (
                        <div key={index} className="group cursor-pointer" onClick={() => setView('biographie')}>
                            <div className={`aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-1 transition-colors group-hover:text-gold">
                                {artist.name}
                            </h3>
                            <p className={`text-sm tracking-wide uppercase ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>{artist.role}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:hidden flex justify-center">
                    <button
                        className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all hover:scale-105 ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-black/20 text-black hover:bg-black hover:text-white'}`}
                        onClick={() => setView('biographie')}
                    >
                        En savoir plus sur nous
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Artists;
