import React from 'react';

interface FooterProps {
    isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        <footer className={`pt-20 pb-10 px-6 md:px-12 border-t relative z-50 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED] border-white/5' : 'bg-[#F3F1ED] text-zinc-900 border-gray-200'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-12 lg:gap-24 items-start mb-16">

                {/* 1. Logo Section */}
                <div>
                    <div className={`w-40 h-40 flex items-center justify-center p-4 shadow-2xl rounded-2xl border mb-8 transition-colors duration-700 ${isDarkMode ? 'bg-[#23211F] border-white/5 shadow-black' : 'bg-white border-gray-100 shadow-black/[0.05]'}`}>
                        <img src="/Assets/Capture-Chims.png" alt="Logo Chifart" className="w-full h-full object-contain" />
                    </div>
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div className={`flex items-center gap-3 ${isDarkMode ? 'text-[#F3F1ED]/60' : 'text-gray-600'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            <span className="text-sm">+237 6 99 99 99 99</span>
                        </div>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" /></svg>
                            ].map((svg, i) => (
                                <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-white/5 text-white hover:bg-gold' : 'bg-gray-200 text-black hover:bg-gold hover:text-white'}`}>
                                    {svg}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Subscribe Section */}
                <div className="pt-2">
                    <h3 className="font-bold uppercase tracking-wider mb-4 text-sm md:text-base">REJOIGNEZ-NOUS MAINTENANT !</h3>
                    <p className={`text-sm mb-6 max-w-md ${isDarkMode ? 'text-[#F3F1ED]/60' : 'text-gray-600'}`}>
                        Abonnez-vous pour des mises à jour exclusives et du contenu captivant.
                    </p>
                    <form className={`flex w-full max-w-md rounded-full overflow-hidden p-1 transition-colors duration-700 ${isDarkMode ? 'bg-[#23211F] border border-white/10' : 'bg-white border border-gray-200 shadow-sm'}`}>
                        <input
                            type="email"
                            placeholder="Email"
                            className={`flex-1 bg-transparent px-6 py-3 text-sm focus:outline-none ${isDarkMode ? 'text-[#F3F1ED] placeholder-white/30' : 'text-gray-900 placeholder-gray-500'}`}
                        />
                        <button className="bg-gold text-white px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#b5952f] transition-colors rounded-full">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>

                {/* 3. Links Section */}
                <div className="pt-2">
                    <h3 className="font-bold uppercase tracking-wider mb-6 text-sm md:text-base">CHIMS HERITAGE</h3>
                    <ul className={`space-y-3 text-sm ${isDarkMode ? 'text-[#F3F1ED]/60' : 'text-gray-600'}`}>
                        {['Politique de confidentialité', 'Conditions générales de vente', 'Compte', 'FAQ'].map((link, i) => (
                            <li key={i}><a href="#" className="flex items-center gap-2 group text-inherit hover:text-gold transition-colors"><span className="text-xs group-hover:translate-x-1 transition-transform">›</span> {link}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`border-t pt-8 text-center text-xs uppercase tracking-widest ${isDarkMode ? 'border-white/5 text-[#F3F1ED]/20' : 'border-gray-200 text-gray-400'}`}>
                © Copyright {new Date().getFullYear()} CHIMS HERITAGE - Tous droits réservés
            </div>
        </footer>
    );
};

export default Footer;
