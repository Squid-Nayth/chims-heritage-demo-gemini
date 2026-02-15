import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
    setView: (view: 'home' | 'gallery' | 'about' | 'contact' | 'paysages' | 'spirituelles' | 'elephants' | 'musee' | 'portraits-uniques' | 'biographie' | 'cv' | 'philosophie' | 'tous-archives' | 'evenements' | 'boutique' | 'account') => void;
}

const Mission: React.FC<ComponentProps> = ({ isDarkMode, setView }) => {
    return (
        <section className={`py-32 px-6 md:px-12 flex items-center justify-center text-center transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-white' : 'bg-[#F3F1ED] text-zinc-900'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="w-16 h-1 bg-gold mx-auto mb-10"></div>
                <p className={`text-xl md:text-3xl font-serif italic leading-relaxed mb-10 ${isDarkMode ? 'text-white/90' : 'text-zinc-800'}`}>
                    "En vibrant aux bienfaits de la présence des éléphants dans nos forêts équatoriales, deuxièmes poumons mondiaux après l'Amazonie, nous nous sentons utiles, et nous nous servons de la peinture pour sensibiliser la population à la prise de conscience de la protection de notre patrimoine naturel..."
                </p>
                <div className="flex flex-col items-center gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-bold text-gold uppercase tracking-widest text-sm">
                            Chim's l'Artiste
                        </span>
                        <span className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-white/40' : 'text-gray-400'}`}>
                            Mission & Engagement
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Mission;
