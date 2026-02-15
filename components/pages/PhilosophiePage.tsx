import React from 'react';

interface PhilosophiePageProps {
    isDarkMode: boolean;
}

const PhilosophiePage: React.FC<PhilosophiePageProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen pt-32 pb-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">PHILOSOPHIE ARTISTIQUE</h1>
                    <div className="w-24 h-1 bg-gold mb-12"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-1">
                        <div className={`aspect-[4/5] overflow-hidden shadow-2xl relative group ${isDarkMode ? 'bg-white/5' : 'bg-gray-200'}`}>
                            <img src="/Assets/cimg7263.jpg" alt="Artiste au travail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed font-light">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-gold">
                            Se sentir heureux et libre dans nos expressions artistiques est nos atouts majeurs, parce que le bonheur et la liberté sont les principaux outils de la création qui attire toutes les richesses et la prospérité au-delà de notre imagination.
                        </p>
                        <p className={isDarkMode ? 'text-white/70' : 'text-zinc-800'}>
                            Grâce à nos créations artistiques, nous partageons notre joie avec nos chers clients qui prennent ces œuvres qui les accompagne dans leurs maisons respectives. Et lorsqu'ils contemplent les tableaux, ils se sentent en paix, en l'harmonie et dans l'état de joie auquel l'artiste vibrée lorsqu'il crée l'œuvre.
                        </p>
                        <p className={isDarkMode ? 'text-white/70' : 'text-zinc-800'}>
                            Des même que vous achetez nos peintures, le bonheur et la joie vous suivront tout au long de votre vie, et ces œuvres rayonnerons la Paix et le Bien-être autour de la maison auquel elle son accrochées.
                        </p>
                    </div>
                </div>

                <div className="mt-32 space-y-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Moyen d'expression 01</h3>
                            <h2 className="text-3xl font-bold mb-6">PORTRAITS</h2>
                            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-zinc-600'}`}>
                                L'homme est beau, souverain et plus puissant qu'il ne pouvait imaginer, en peignant des portraits, nous retrouvons la clarté et la verticalité sacrée.
                            </p>
                        </div>
                        <div className="aspect-video overflow-hidden shadow-xl">
                            <img src="/Assets/1er-M.jpg" alt="Portrait" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="md:order-last">
                            <h3 className="text-sm uppercase tracking-[0.4em] text-gold font-bold mb-4">Moyen d'expression 02</h3>
                            <h2 className="text-3xl font-bold mb-6">PAYSAGES</h2>
                            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-white/60' : 'text-zinc-600'}`}>
                                Les paysages renferment dans notre environnement tropicale Africain de grandes valeurs naturelles qui s'expriment au quotidien et que nous pouvons apprécier surtout lorsque nous sortons de chez nous.
                            </p>
                        </div>
                        <div className="aspect-video overflow-hidden shadow-xl">
                            <img src="/Assets/1-paysage.jpg" alt="Paysage" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhilosophiePage;
