import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const CustomPortraits: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    return (
        <section id="custom-portraits" className={`transition-colors duration-700 py-24 ${isDarkMode ? 'bg-[#1A1816] text-white' : 'bg-[#F3F1ED] text-zinc-900'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Left Side: Image Collage */}
                <div className="w-full md:w-1/2 relative h-[600px] flex gap-4">
                    <div className="flex flex-col gap-4 w-1/2">
                        <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                            <img src="/Assets/Fam-Presi.jpg" alt="Portrait Officiel" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                            <img src="/Assets/1er-M.jpg" alt="Portrait Unique" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-1/2 mt-12">
                        <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                            <img src="/Assets/Famille.jpg" alt="Portrait de Famille" className="w-full h-full object-cover" />
                        </div>
                        <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500">
                            <img src="/Assets/CIMG7250.jpg" alt="Scène de Vie" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2">
                    <span className="uppercase text-xs font-bold tracking-[0.2em] text-gold mb-6 block">
                        De l'inspiration À La Réalité
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-current">
                        Des œuvres et portraits sur mesure, adaptés à votre vision.
                    </h2>

                    <div className={`space-y-6 text-lg leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                        <p>
                            Nous vous accompagnons pas à pas dans la création de votre portrait ou de toute œuvre artistique.
                        </p>
                        <p>
                            Chaque étape est personnalisée selon vos envies et votre vision. Le résultat : une œuvre unique, qui vous ressemble et raconte votre histoire.
                        </p>
                    </div>

                    <button
                        className={`mt-10 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest border transition-all hover:scale-105 shadow-xl ${isDarkMode ? 'border-white/20 text-white hover:bg-white hover:text-black shadow-white/5 hover:shadow-white/10' : 'border-black/20 text-black hover:bg-black hover:text-white shadow-black/5 hover:shadow-black/20'}`}
                        onClick={() => setView('contact')}
                    >
                        COMMENCER MON PORTRAIT
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomPortraits;
