import React from 'react';

interface BiographyPageProps {
    isDarkMode: boolean;
}

const BiographyPage: React.FC<BiographyPageProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen pt-32 pb-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left Column: Image and Sticky Info */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-40">
                            <div className="relative group">
                                <div className="absolute -inset-4 border border-gold/30 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                                <div className={`relative aspect-[4/5] overflow-hidden shadow-2xl ${isDarkMode ? 'bg-white/5' : 'bg-gray-200/10'}`}>
                                    <img src="/Assets/Chims-lartiste.jpeg" alt="Chima Ogbonnaya" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                                </div>
                            </div>
                            <div className="mt-12">
                                <h1 className="text-4xl font-bold tracking-tighter mb-2">CHIMA OGBONNAYA</h1>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[1px] bg-gold"></div>
                                    <p className="text-xs uppercase tracking-[0.4em] text-gold font-bold">Maître Peintre</p>
                                </div>
                                <div className={`text-sm space-y-2 ${isDarkMode ? 'text-white/40' : 'text-zinc-500'}`}>
                                    <p>Né en 1966, Abia State, Nigéria</p>
                                    <p>Basé à Libreville, Gabon</p>
                                    <p>Style : Création en Relief</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Narrative */}
                    <div className="lg:w-2/3">
                        <div className={`prose prose-lg ${isDarkMode ? 'prose-invert' : ''} max-w-none`}>
                            <h2 className={`text-3xl md:text-5xl font-bold tracking-tight mb-12 italic serif ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>"Mon génie créateur s'est réveillé en m'observant, me guidant sur le chemin des Arts."</h2>

                            <div className={`space-y-8 text-lg leading-relaxed font-light ${isDarkMode ? 'text-white/70' : 'text-zinc-800'}`}>
                                <p>
                                    Je suis <span className="font-medium text-gold">Chima Ogbonnaya</span>, Autodidacte, Artiste peintre au talent inné, jouissant du Don de Dieu. De nationalité Nigériane, au Gabon depuis 1983, mon voyage artistique a commencé dès l'enfance dans le village d'Obuohia Ibere.
                                </p>

                                <p>
                                    Cinquième fils d'une famille de neuf enfants, j'ai grandi en observant mon frère aîné créer. C'est là que mon génie créateur s'est réveillé, dessinant sur le sol et modelant la terre blanche pour donner vie à des véhicules, des avions et des animaux. Déjà à l'école, on m'appelait <span className="italic">"Chima, Okpu moto"</span>, le mouleur de véhicules.
                                </p>

                                <div className={`p-12 border-l-2 border-gold my-16 ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`}>
                                    <p className={`text-2xl italic font-serif leading-relaxed ${isDarkMode ? 'text-white' : 'text-zinc-900'}`}>
                                        "Chi (Dieu) est la Source de toute création, l'observateur silencieux de notre avenir."
                                    </p>
                                </div>

                                <p>
                                    Mon parcours m'a mené des salons de coiffure de Mont Bouet à Libreville, où j'intégrais déjà mes visions artistiques à mon métier, jusqu'à ma rencontre déterminante en 1988 avec le Maître Ekang Henry, qui m'initia à la magie du mixage des couleurs.
                                </p>

                                <div className="grid grid-cols-2 gap-8 my-16">
                                    <div className="aspect-square overflow-hidden shadow-xl">
                                        <img src="/Assets/CIMG7250.jpg" alt="Work 1" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="aspect-square overflow-hidden shadow-xl translate-y-8">
                                        <img src="/Assets/cimg7263.jpg" alt="Work 2" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                <p>
                                    En 1993, une révélation spirituelle et artistique m'a conduit à inventer mon propre style : la <span className="font-bold text-gold">“Création en Relief”</span> et la peinture sur fibres de cocotier. Ce fut le début d'une ère de reconnaissance, me menant à exposer dans des lieux prestigieux comme les Hôtels Méridien Re-Ndama, réalisant des portraits pour les plus grands leaders de ce monde.
                                </p>

                                <p>
                                    Aujourd'hui, mon art est une quête de l'invisible sacré, une célébration de la Nature et de ses habitants, visant à émouvoir et à immortaliser l'âme de ceux qui croisent mon chemin.
                                </p>

                                <div className="mt-24 pt-12 border-t border-gold/20 italic text-sm opacity-50">
                                    Exerçant sur tout le territoire Gabonais avec le label "Chim's Décor" et "CHIFART".
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiographyPage;
