import React from 'react';

interface EvenementsPageProps {
    isDarkMode: boolean;
}

const EvenementsPage: React.FC<EvenementsPageProps> = ({ isDarkMode }) => {
    const events = [
        {
            date: "Chronologie",
            title: "PUBLICATIONS & ÉVÉNEMENTS",
            content: "Chronologie de toutes les parutions de Chim's Heritage Fine Art au Gabon et à l'échelle mondiale."
        }
    ];

    return (
        <div className={`min-h-screen pt-32 pb-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">ÉVÉNEMENTS</h1>
                    <div className="w-24 h-1 bg-gold mb-12"></div>
                </div>

                <div className="space-y-12">
                    {events.map((event, idx) => (
                        <div key={idx} className={`group flex flex-col md:flex-row gap-12 p-12 border transition-all duration-500 ${isDarkMode ? 'border-white/5 hover:border-gold/30 bg-white/5' : 'border-black/5 hover:border-gold/30 bg-black/5'}`}>
                            <div className="md:w-1/4">
                                <span className="text-xs uppercase tracking-[0.5em] font-bold text-gold">{event.date}</span>
                                <div className="mt-4 w-12 h-[1px] bg-gold/50"></div>
                            </div>
                            <div className="md:w-3/4">
                                <h2 className="text-3xl font-bold tracking-tighter mb-6 uppercase group-hover:text-gold transition-colors">{event.title}</h2>
                                <p className={`text-lg leading-relaxed font-light ${isDarkMode ? 'text-white/60' : 'text-zinc-600'}`}>
                                    {event.content}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="py-20 text-center flex flex-col items-center">
                        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mb-8 opacity-20"></div>
                        <p className="text-sm uppercase tracking-widest opacity-30">Chargement des prochaines publications...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EvenementsPage;
