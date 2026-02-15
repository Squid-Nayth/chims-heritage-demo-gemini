import React from 'react';

interface CVPageProps {
    isDarkMode: boolean;
}

const CVPage: React.FC<CVPageProps> = ({ isDarkMode }) => {
    const categories = [
        {
            title: "EXPOSITION COLLECTIVE",
            items: [
                { year: "2017", content: "Salon International du Livre et des Arts de Libreville (SILAL)" },
                { year: "2016", content: "Gabon Fashion Week – SPA YACINE Libreville" },
                { year: "2015", content: "Célébration de la Journée de Patrimoine Sud-Africaine-Musée d'Arts et Tradition du Gabon" },
                { year: "2013", content: "Salon International du Livre et des Arts de Libreville (SILAL)" },
                { year: "2011", content: "Salon International du Livre et des Arts de Libreville (SILAL)" },
            ]
        },
        {
            title: "EXPOSITION INTERNATIONALE",
            items: [
                { year: "AFRIQUE 2014", content: "Centro Cultural EquatoGuineano – Malabo Equatorial Guinea" },
                { year: "ASIE 2010", content: "Expo Universelle de Shanghai 2010-stand du Gabon au pavillon Africaine" },
                { year: "USA 2008", content: "International Art expo – Las Vegas USA – Africa Salvation Inc- Booth 1256" },
                { year: "EUROPE 1996", content: "40em Foire Commerciale d'Automne Liege Belgique- Stand du Gabon" },
            ]
        },
        {
            title: "EXPOSITION PERSONNELLE",
            items: [
                { year: "2013", content: "Expo au palais du SENAT GEORGES RAWIRI Libreville" },
                { year: "2012", content: "Rentrée du SENAT au palais de Georges Rawiri Libreville" },
                { year: "2001", content: "Mystères, Club Saoti, Libreville" },
                { year: "1995-2002", content: "Atelier Gratuit/Expo à l'Hôtel Méridien Re-Ndama de Libreville" },
            ]
        }
    ];

    return (
        <div className={`min-h-screen pt-32 pb-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-4xl mx-auto">
                <div className="mb-20">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">CURRICULUM VITAE</h1>
                    <div className="w-24 h-1 bg-gold mb-12"></div>
                    <p className={`text-lg italic serif font-light transition-colors duration-700 ${isDarkMode ? 'text-white/60' : 'text-zinc-500'}`}>Un demi-siècle de passion, de couleurs et d'expositions à travers le monde.</p>
                </div>

                <div className={`relative border-l ${isDarkMode ? 'border-white/20' : 'border-black/20'} ml-3 md:ml-6 space-y-16 pb-12`}>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="relative">
                            {/* Category Header Marker */}
                            <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 ${isDarkMode ? 'border-gold bg-[#1A1816]' : 'border-gold bg-[#F3F1ED]'}`}></div>

                            <h2 className="text-xl md:text-2xl uppercase tracking-[0.2em] text-gold font-bold mb-10 pl-8 md:pl-12">
                                {cat.title}
                            </h2>

                            <div className="space-y-12">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="relative pl-8 md:pl-12 group">
                                        {/* Event Dot */}
                                        <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-white group-hover:bg-gold' : 'bg-zinc-400 group-hover:bg-gold'} group-hover:scale-150 shadow-[0_0_0_4px_rgba(197,160,101,0)] group-hover:shadow-[0_0_0_4px_rgba(197,160,101,0.2)]`}></div>

                                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 hover:translate-x-2 transition-transform duration-300">
                                            <span className={`text-xl font-bold font-serif italic shrink-0 w-32 ${isDarkMode ? 'text-white' : 'text-black'}`}>{item.year}</span>
                                            <p className={`text-lg font-light leading-relaxed ${isDarkMode ? 'text-white/70' : 'text-zinc-600'}`}>{item.content}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CVPage;
