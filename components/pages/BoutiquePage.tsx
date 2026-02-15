import React from 'react';

interface BoutiquePageProps {
    isDarkMode: boolean;
}

const BoutiquePage: React.FC<BoutiquePageProps> = ({ isDarkMode }) => {
    const products = [
        { id: 1, name: "Auto Discipline", price: "1 200 000 CFA", src: "/Assets/CIMG7250.jpg" },
        { id: 2, name: "Solidarité", price: "850 000 CFA", src: "/Assets/Fam-Presi.jpg" },
        { id: 3, name: "Persévérance", price: "950 000 CFA", src: "/Assets/cimg7263.jpg" },
        { id: 4, name: "Courage", price: "1 100 000 CFA", src: "/Assets/1-paysage.jpg" },
        { id: 5, name: "Accomplissement", price: "1 500 000 CFA", src: "/Assets/Famille.jpg" },
        { id: 6, name: "Joie", price: "750 000 CFA", src: "/Assets/cimg7254.jpg" },
        { id: 7, name: "Vision", price: "800 000 CFA", src: "/Assets/cimg7257.jpg" },
        { id: 8, name: "Sagesse", price: "2 000 000 CFA", src: "/Assets/1er-M.jpg" },
        { id: 9, name: "Héritage", price: "900 000 CFA", src: "/Assets/CIMG7250.jpg" },
    ];

    return (
        <div className={`min-h-screen pt-32 pb-32 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Banner */}
                <div className="mb-12">
                    <h1 className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase ${isDarkMode ? 'text-white' : 'text-black'}`}>BOUTIQUE</h1>
                    <div className="w-24 h-1 bg-gold mt-4"></div>
                </div>

                {/* Filters */}
                <div className={`flex justify-between items-center mb-12 border-b pb-6 ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
                    <p className="text-sm opacity-50 italic">Affichage de 1-12 sur 24 résultats</p>
                    <div className="flex gap-4">
                        <select className={`text-sm bg-transparent border rounded p-2 focus:outline-none ${isDarkMode ? 'border-white/20 text-white' : 'border-black/10'}`}>
                            <option className="bg-white text-black">Tri par défaut</option>
                            <option className="bg-white text-black">Prix croissant</option>
                            <option className="bg-white text-black">Prix décroissant</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product) => (
                        <div key={product.id} className="group flex flex-col">
                            <div className={`relative aspect-square overflow-hidden mb-6 shadow-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-200/50'}`}>
                                <img src={product.src} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white border border-white px-6 py-2 text-sm tracking-wider uppercase">VOIR DÉTAILS</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold tracking-tight uppercase mb-1">{product.name}</h3>
                            <p className="text-sm font-bold text-gold">{product.price}</p>
                            <button className="mt-4 text-xs font-bold uppercase tracking-widest border-b border-gold w-fit py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Ajouter au panier
                            </button>
                        </div>
                    ))}
                </div>

                {/* Pagination placeholder */}
                <div className="mt-20 flex justify-center gap-2">
                    {[1, 2, 3, 4].map(n => (
                        <button key={n} className={`w-10 h-10 flex items-center justify-center border transition-colors ${n === 1 ? 'bg-gold text-black border-gold' : isDarkMode ? 'border-gold text-gold hover:bg-gold hover:text-black' : 'border-gold text-gold hover:bg-gold hover:text-white'}`}>
                            {n}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoutiquePage;
