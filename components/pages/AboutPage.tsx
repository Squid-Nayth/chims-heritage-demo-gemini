import React from 'react';
import Mission from '../Mission';
import CustomPortraits from '../CustomPortraits';
import Artists from '../Artists';
import Testimonials from '../Testimonials';

interface PageProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact') => void;
}

const AboutPage: React.FC<PageProps> = ({ isDarkMode, setView }) => {
    return (
        <div className={`min-h-screen pt-32 pb-24 px-6 md:px-12 ${isDarkMode ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'}`}>
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <span className="uppercase tracking-widest text-orange-500 font-bold mb-4 block">Notre Histoire</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">Plus qu'un atelier,<br />un héritage.</h1>
                    <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Fondé avec la conviction que l'art doit élever l'esprit et préserver la mémoire, Chim's Heritage est un carrefour où le talent rencontre l'histoire.
                    </p>
                </div>

                {/* Content Block 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 md:order-1">
                        <img src="/Assets/Fam-Presi.jpg" alt="Atelier" className="rounded-lg shadow-2xl w-full" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-bold mb-6">L'Art de la Transmission</h2>
                        <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Chez Chim's Heritage, chaque coup de pinceau est une parole, chaque toile un dialogue. Nous ne peignons pas seulement des visages, nous capturons des âmes.
                        </p>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Notre mission est double : offrir des œuvres d'une qualité technique irréprochable et utiliser notre art pour sensibiliser à la beauté fragile de notre monde, comme en témoigne notre engagement pour la préservation de la faune.
                        </p>
                    </div>
                </div>

                {/* Artist Bio */}
                <div className="bg-orange-500/10 p-12 rounded-2xl mb-24">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <img src="/Assets/cimg7263.jpg" alt="Chima Ogbonnaya" className="w-32 h-32 rounded-full object-cover border-4 border-orange-500" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Chima Ogbonnaya</h3>
                            <p className="text-orange-500 font-medium mb-4">Maître Artiste & Fondateur</p>
                            <p className={`text-lg italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                "Je peins pour que ce qui est éphémère devienne éternel. Mon espoir est que chaque regard posé sur mes toiles y trouve une part de sa propre vérité."
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <Mission isDarkMode={isDarkMode} />
            <Artists isDarkMode={isDarkMode} />
            <CustomPortraits isDarkMode={isDarkMode} setView={setView} />
            <Testimonials isDarkMode={isDarkMode} />

        </div>
    );
};

export default AboutPage;
