import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface CookieBannerProps {
    isDarkMode: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({ isDarkMode }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        hideBanner();
    };

    const handleDecline = () => {
        hideBanner();
    };

    const hideBanner = () => {
        gsap.to('.cookie-banner-inner', {
            y: 50,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => setIsVisible(false)
        });
    };

    useEffect(() => {
        if (isVisible) {
            gsap.fromTo('.cookie-banner-inner',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
            );
        }
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-3rem)] md:w-auto">
            <div className={`cookie-banner-inner flex flex-col md:flex-row items-center gap-6 p-4 md:py-2 md:px-8 rounded-[3rem] md:rounded-full shadow-2xl backdrop-blur-xl transition-colors duration-700 border ${isDarkMode
                ? 'bg-[#1A1816]/70 text-white border-white/10 shadow-black'
                : 'bg-[#F3F1ED]/70 text-zinc-900 border-black/10 shadow-black/[0.05]'
                }`}>
                <p className={`text-[13px] md:text-sm leading-tight max-w-sm py-2 ${isDarkMode ? 'text-white/70' : 'text-zinc-600'}`}>
                    Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic du site.{' '}
                    <a href="#" className="font-medium text-gold hover:opacity-80 transition-colors">
                        En savoir plus
                    </a>
                </p>

                <div className="flex items-center gap-2 mb-2 md:mb-0">
                    <button
                        onClick={handleDecline}
                        className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-medium transition-all border ${isDarkMode
                            ? 'border-white/10 hover:bg-white/5 text-white'
                            : 'border-zinc-200 hover:bg-zinc-50 text-zinc-700'
                            }`}
                    >
                        Refuser
                    </button>
                    <button
                        onClick={handleAccept}
                        className={`px-6 py-2.5 rounded-full text-[13px] md:text-sm font-medium transition-all ${isDarkMode
                            ? 'bg-white text-black hover:bg-zinc-200'
                            : 'bg-black text-white hover:bg-zinc-800'
                            }`}
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
