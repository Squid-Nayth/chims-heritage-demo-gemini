import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
}

const Mission: React.FC<ComponentProps> = ({ isDarkMode }) => {
    return (
        <section className={`py-32 px-6 md:px-12 transition-colors duration-700 flex items-center justify-center text-center ${isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-gray-100 text-slate-900'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="w-16 h-1 bg-orange-500 mx-auto mb-10"></div>
                <p className={`text-xl md:text-3xl font-serif italic leading-relaxed mb-10 ${isDarkMode ? 'text-gray-300' : 'text-slate-800'}`}>
                    "En observant les bienfaits de la présence des éléphants dans nos forêts équatoriales, deuxièmes poumons mondiaux après l'Amazonie, nous nous sentons utiles, et nous nous servons de la peinture pour sensibiliser la population à la prise de conscience de la protection de notre patrimoine naturel..."
                </p>
                <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-orange-500 uppercase tracking-widest text-sm">
                        Chim's l'Artiste
                    </span>
                    <span className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                        Mission & Engagement
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Mission;
