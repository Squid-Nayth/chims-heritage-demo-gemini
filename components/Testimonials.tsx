import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
}

const Testimonials: React.FC<ComponentProps> = ({ isDarkMode }) => {
    const reviews = [
        {
            text: "Les œuvres de Mr. Chim's dégagent une créativité exceptionnelle et un sens profond de l'esthétique. Chaque pièce est une véritable œuvre d'art qui captive et inspire.",
            author: "Diane & David",
            stars: 5,
            date: "il y a 2 mois",
            color: "bg-gold"
        },
        {
            text: "L'originalité de Mr. Chim's transparaît dans ses œuvres, offrant une expérience visuelle unique. Sa capacité à fusionner divers styles artistiques crée des pièces uniques et mémorables.",
            author: "Emily Johnson",
            stars: 5,
            date: "il y a 3 semaines",
            color: "bg-red-500"
        },
        {
            text: "Les créations de Mr. Chim's sont un festin visuel, alliant harmonieusement couleurs vibrantes et formes captivantes. Chaque œuvre témoigne d'une maîtrise artistique exceptionnelle.",
            author: "Lina Martin",
            stars: 5,
            date: "il y a 4 mois",
            color: "bg-green-600"
        }
    ];

    // Google G Logo SVG
    const GoogleLogo = () => (
        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );

    return (
        <section id="testimonials" className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-white' : 'bg-[#F3F1ED] text-zinc-900'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <GoogleLogo />
                            <span className={`text-sm font-bold tracking-widest uppercase ${isDarkMode ? 'text-white/40' : 'text-gray-500'}`}>Avis Google</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Confiance & Excellence
                        </h2>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <div className="flex text-amber-500 mb-1 gap-1">
                                {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                            </div>
                            <p className="text-sm font-medium opacity-60">4.9 / 5 basé sur 48 avis</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className={`p-8 rounded-3xl transition-all duration-300 flex flex-col h-full relative border ${isDarkMode ? 'bg-[#23211F] border-white/5 hover:border-gold/50 shadow-white/5' : 'bg-white shadow-xl shadow-black/[0.03] border-black/[0.05] hover:border-gold'}`}>
                            {/* Google Corner Icon */}
                            <div className="absolute top-6 right-8 opacity-20">
                                <GoogleLogo />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}>
                                    {review.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-base leading-none mb-1">{review.author}</h4>
                                    <p className={`text-xs ${isDarkMode ? 'text-white/40' : 'opacity-50'}`}>{review.date}</p>
                                </div>
                            </div>

                            <div className="flex text-amber-500 mb-4 gap-0.5 text-xs">
                                {[...Array(review.stars)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            <p className={`text-sm leading-relaxed flex-grow ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
                                "{review.text}"
                            </p>

                            <div className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'} flex items-center justify-between`}>
                                <span className={`text-[10px] font-bold tracking-widest uppercase ${isDarkMode ? 'text-white/30' : 'opacity-60'}`}>Avis vérifié</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className={`text-sm ${isDarkMode ? 'text-white/30' : 'text-gray-400'}`}>
                        Authenticité garantie par <span className="font-bold">Google Maps Business</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
