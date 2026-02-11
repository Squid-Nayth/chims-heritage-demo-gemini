import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const CustomPortraits: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    return (
        <section className={`transition-colors duration-700 py-24 ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-50 text-slate-900'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                {/* Left Side: Image Collage */}
                <div className="w-full md:w-1/2 relative h-[500px]">
                    <div className="absolute inset-0 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden translate-y-8 shadow-lg">
                            <img src="/Assets/Fam-Presi.jpg" alt="Portrait" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden -translate-y-8 shadow-lg">
                            <img src="/Assets/Famille.jpg" alt="Portrait" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden translate-y-4 shadow-lg">
                            <img src="/Assets/1er-M.jpg" alt="Portrait" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden -translate-y-4 shadow-lg">
                            <img src="/Assets/CIMG7250.jpg" alt="Portrait" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2">
                    <span className="uppercase text-xs font-bold tracking-[0.2em] text-orange-500 mb-6 block">
                        De l'inspiration À La Réalité
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Des œuvres et portraits sur mesure, adaptés à votre vision.
                    </h2>

                    <div className={`space-y-6 text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <p>
                            Nous vous accompagnons pas à pas dans la création de votre portrait ou de toute œuvre artistique.
                        </p>
                        <p>
                            Chaque étape est personnalisée selon vos envies et votre vision. Le résultat : une œuvre unique, qui vous ressemble et raconte votre histoire.
                        </p>
                    </div>

                    <button
                        className={`mt-10 px-8 py-4 rounded-full font-medium transition-all duration-300 border ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
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
