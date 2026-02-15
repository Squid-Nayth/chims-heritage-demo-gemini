import React from 'react';

interface ServicesProps {
    isDarkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
    const services = [
        {
            title: "Création Sur Mesure",
            description: "Donnez vie à vos idées. Je réalise des peintures personnalisées selon vos envies, vos photos ou vos souvenirs, dans un style unique.",
            icon: "🎨"
        },
        {
            title: "Vente d'Œuvres Originales",
            description: "Explorez ma collection de toiles disponibles à la vente. Chaque pièce est une création originale signée, prête à enrichir votre intérieur.",
            icon: "🖼️"
        },
        {
            title: "Consultation & Conseils",
            description: "Besoin d'aide pour choisir une œuvre ? Je vous accompagne pour trouver la pièce parfaite qui s'harmonisera avec votre espace.",
            icon: "💡"
        }
    ];

    return (
        <section className={`relative z-10 py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-black/80 text-white backdrop-blur-md' : 'bg-white/80 text-zinc-900 backdrop-blur-md'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Services & Prestations</h2>
                    <div className={`h-1 w-20 ${isDarkMode ? 'bg-white' : 'bg-black'}`}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-gray-600' : 'text-gray-600'}`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
