import React from 'react';

interface CategoryPageProps {
    title: string;
    description: string;
    images: { src: string; caption: string }[];
    isDarkMode: boolean;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ title, description, images, isDarkMode }) => {
    return (
        <div className={`min-h-screen pt-32 pb-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 uppercase">{title}</h1>
                    <div className="w-24 h-1 bg-gold mb-8"></div>
                    <p className={`text-lg md:text-xl max-w-3xl leading-relaxed transition-colors duration-700 ${isDarkMode ? 'text-white/60' : 'text-zinc-600'}`}>
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {images.map((img, idx) => (
                        <div key={idx} className="group relative">
                            <div className={`relative aspect-[3/4] overflow-hidden shadow-xl transition-colors duration-700 ${isDarkMode ? 'bg-white/5' : 'bg-gray-200/10'}`}>
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white border border-white px-6 py-2 text-sm tracking-wider uppercase">VOIR DANS LA BOUTIQUE</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <span className="w-8 h-[1px] bg-gold"></span>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Œuvre Originale</span>
                                </div>
                                <h3 className="text-xl font-medium tracking-tight uppercase leading-tight">{img.caption}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
