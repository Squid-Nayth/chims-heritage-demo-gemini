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
        <div className={`min-h-screen pt-32 px-6 md:px-12 flex items-center justify-center ${isDarkMode ? 'bg-[#050505] text-white' : 'bg-white text-slate-900'}`}>
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">

                <div>
                    <h1 className="text-5xl font-bold mb-8">Commandez votre Œuvre</h1>
                    <p className={`text-lg mb-12 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Vous avez une idée en tête ou une photo à immortaliser ?
                        Remplissez ce formulaire pour démarrer le processus de création.
                        Nous discuterons ensemble des détails, du format et du style qui vous convient.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-orange-500">Email</h3>
                            <p className="text-xl">contact@chimsheritage.com</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-orange-500">Téléphone</h3>
                            <p className="text-xl">+241 00 00 00 00</p>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-orange-500">Atelier</h3>
                            <p className="text-xl">Camp de Gaulle, Libreville, Gabon</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className={`p-8 rounded-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Nom Complet</label>
                        <input
                            type="text"
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${isDarkMode ? 'bg-black/50 border-gray-700' : 'bg-white border-gray-200 border'}`}
                            required
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${isDarkMode ? 'bg-black/50 border-gray-700' : 'bg-white border-gray-200 border'}`}
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Type d'œuvre</label>
                        <select
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${isDarkMode ? 'bg-black/50 border-gray-700' : 'bg-white border-gray-200 border'}`}
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
                        <label className="block text-sm font-medium mb-2">Description du projet</label>
                        <textarea
                            rows={4}
                            className={`w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 ${isDarkMode ? 'bg-black/50 border-gray-700' : 'bg-white border-gray-200 border'}`}
                            required
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-4 rounded-md hover:bg-orange-600 transition-colors">
                        ENVOYER LA DEMANDE
                    </button>
                </form>

            </div>
        </div>
    );
};

export default ContactPage;
