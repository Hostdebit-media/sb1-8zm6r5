import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tous les Projets' },
    { id: 'enseignes', label: 'Enseignes Lumineuses' },
    { id: 'signaletique', label: 'Signalétique' },
    { id: 'facades', label: 'Habillage Façades' },
    { id: 'vehicules', label: 'Marquage Véhicules' }
  ];

  const projects = [
    {
      id: 1,
      title: "Centre Commercial Morocco Mall",
      category: "enseignes",
      description: "Ensemble complet d'enseignes lumineuses LED pour le plus grand centre commercial d'Afrique",
      image: "https://images.unsplash.com/photo-1519420573924-65fcd45245f8?auto=format&fit=crop&q=80&w=800",
      tags: ["Enseigne LED", "Grande Surface", "Installation Complexe"]
    },
    {
      id: 2,
      title: "Siège Social BMCE Bank",
      category: "signaletique",
      description: "Signalétique directionnelle et identification des services pour le siège social",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      tags: ["Signalétique Intérieure", "Corporate", "Wayfinding"]
    },
    {
      id: 3,
      title: "Façade Anfa Place",
      category: "facades",
      description: "Habillage complet de la façade en Alucobond avec éclairage architectural",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
      tags: ["Alucobond", "Éclairage", "Design Architectural"]
    },
    {
      id: 4,
      title: "Flotte Marjane",
      category: "vehicules",
      description: "Marquage de la flotte de 50 véhicules de livraison Marjane",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      tags: ["Covering", "Flotte", "Grande Distribution"]
    },
    {
      id: 5,
      title: "Twin Center Casablanca",
      category: "enseignes",
      description: "Enseignes monumentales LED pour les tours emblématiques",
      image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?auto=format&fit=crop&q=80&w=800",
      tags: ["Enseigne Monumentale", "LED", "Prestige"]
    },
    {
      id: 6,
      title: "Marina Shopping",
      category: "signaletique",
      description: "Signalétique complète du centre commercial Marina Shopping",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      tags: ["Centre Commercial", "Wayfinding", "Digital"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Nos Réalisations
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez nos projets de signalétique et d'enseignes réalisés pour des clients prestigieux à Casablanca
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Discuter d'un projet similaire
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Vous avez un Projet en Tête?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
              >
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;