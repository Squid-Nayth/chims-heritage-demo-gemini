import React from 'react';

interface ComponentProps {
    isDarkMode: boolean;
}

const Artists: React.FC<ComponentProps> = ({ isDarkMode }) => {
    const artists = [
        {
            name: "CHIMA OGBONNAYA",
            image: "/Assets/cimg7263.jpg",
            role: "Maître Artiste"
        },
        {
            name: "AGWAOMA HARMONIE",
            image: "/Assets/cimg7254.jpg",
            role: "Artiste Peintre"
        },
        {
            name: "PONCTUALITÉ ETETAMNUURA",
            image: "/Assets/cimg7257.jpg",
            role: "Artiste Peintre"
        },
        {
            name: "GIFT CHIMAAMAKA",
            image: "/Assets/CIMG7250.jpg",
            role: "Apprentie"
        },
    ];

    return (
        <section className={`py-24 px-6 md:px-12 transition-colors duration-700 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Nos artistes</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {artists.map((artist, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-gray-100 relative">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500 transition-colors">
                                {artist.name}
                            </h3>
                            <p className={`text-sm tracking-wide uppercase ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{artist.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Artists;
