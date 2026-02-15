import React, { useState } from 'react';

interface PageProps {
    isDarkMode: boolean;
}

const ContactPage: React.FC<PageProps> = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({ name: '', email: '', type: 'Portrait', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.");
        setFormData({ name: '', email: '', type: 'Portrait', message: '' });
    };

    return (
        <div className={`min-h-screen pt-32 px-6 md:px-12 flex items-center justify-center transition-colors duration-700 ${isDarkMode ? 'bg-[#1A1816] text-[#F3F1ED]' : 'bg-[#F3F1ED] text-black'}`}>
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 pb-20">

                <div>
                    <h1 className="text-5xl font-bold mb-8 transition-colors duration-700">Commandez votre Œuvre</h1>
                    <p className={`text-lg mb-12 leading-relaxed transition-colors duration-700 ${isDarkMode ? 'text-white/60' : 'text-gray-600'}`}>
                        Vous avez une idée en tête ou une photo à immortaliser ?
                        Remplissez ce formulaire pour démarrer le processus de création.
                        Nous discuterons ensemble des détails, du format et du style qui vous convient.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-gold">Email</h3>
                            <p className="text-xl">contact@chimsheritage.com</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-gold">Téléphone</h3>
                            <p className="text-xl">+241 6 99 99 99 99</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-gold">Atelier</h3>
                            <p className="text-xl">Camp de Gaulle, Libreville, Gabon</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={`p-8 rounded-2xl transition-all duration-700 border ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-white shadow-2xl shadow-black/[0.05] border-black/5'}`}>
                    <div className="mb-6">
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Nom Complet</label>
                        <input
                            type="text"
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-700 ${isDarkMode ? 'bg-black/50 border-white/10 text-white' : 'bg-gray-50 border-gray-200 border text-black'}`}
                            required
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Email</label>
                        <input
                            type="email"
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-700 ${isDarkMode ? 'bg-black/50 border-white/10 text-white' : 'bg-gray-50 border-gray-200 border text-black'}`}
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Type d'œuvre</label>
                        <select
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-700 ${isDarkMode ? 'bg-black text-white border-white/10' : 'bg-gray-50 border-gray-200 border text-black'}`}
                            value={formData.type}
                            onChange={e => setFormData({ ...formData, type: e.target.value })}
                        >
                            <option>Portrait</option>
                            <option>Paysage</option>
                            <option>Abstrait</option>
                            <option>Autre</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-700 ${isDarkMode ? 'text-white/80' : 'text-gray-700'}`}>Description du projet</label>
                        <textarea
                            rows={4}
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-700 ${isDarkMode ? 'bg-black/50 border-white/10 text-white' : 'bg-gray-50 border-gray-200 border text-black'}`}
                            required
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gold text-black font-bold py-4 rounded-full hover:scale-[1.02] transition-all shadow-xl shadow-gold/10">
                        ENVOYER LA DEMANDE
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ContactPage;
