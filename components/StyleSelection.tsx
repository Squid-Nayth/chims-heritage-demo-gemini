import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const StyleSelection: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    const styles = [
        { src: "/Assets/Famille.jpg", alt: "Portrait réaliste" },
        { src: "/Assets/1-paysage.jpg", alt: "Paysage" },
        { src: "/Assets/cimg7254.jpg", alt: "Animalier" },
        { src: "/Assets/cimg7263.jpg", alt: "Abstrait" },
        { src: "/Assets/1er-M.jpg", alt: "Portrait officiel" },
    ];

    return (
        <section className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`}>
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Quel style préférez-vous ?
                    </h2>
                    <p className={`text-lg max-w-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Explorez des collections d'œuvres influencées par une gamme d'émotions et de techniques.
                    </p>
                </div>
                <button
                    className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider border transition-all hover:scale-105 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                    onClick={() => setView('gallery')}
                >
                    Découvrir
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
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500"></div>
                        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            <span className="text-white font-bold tracking-wider text-sm uppercase px-3 py-1 bg-black/50 backdrop-blur-md rounded-full">{style.alt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StyleSelection;
