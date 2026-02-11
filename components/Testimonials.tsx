import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
}

const Testimonials: React.FC<ComponentProps> = ({ isDarkMode }) => {
    const reviews = [
        {
            text: "Les œuvres de Mr. Chim's dégagent une créativité exceptionnelle et un sens profond de l'esthétique. Chaque pièce est une véritable œuvre d'art qui captive et inspire.",
            author: "DIANE & DAVID",
            stars: 5
        },
        {
            text: "L'originalité de Mr. Chim's transparaît dans ses œuvres, offrant une expérience visuelle unique. Sa capacité à fusionner divers styles artistiques crée des pièces uniques et mémorables.",
            author: "EMILY",
            stars: 5
        },
        {
            text: "Les créations de Mr. Chim's sont un festin visuel, alliant harmonieusement couleurs vibrantes et formes captivantes. Chaque œuvre témoigne d'une maîtrise artistique exceptionnelle.",
            author: "LINA",
            stars: 5
        }
    ];

    return (
        <section className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">
                    Nos clients témoignent...
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className={`p-10 rounded-[2rem] transition-colors duration-300 ${isDarkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100 shadow-sm'}`}>
                            <div className="flex text-amber-500 mb-6 gap-1 text-sm">
                                {[...Array(review.stars)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            <p className={`mb-8 font-medium leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                "{review.text}"
                            </p>

                            <h4 className="font-bold tracking-wider uppercase text-sm border-t border-current pt-4 inline-block opacity-70">
                                {review.author}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
