import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const services = [
    {
      title: "Enseignes Lumineuses",
      description: "Enseignes LED, néon et 3D pour une visibilité maximale",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Signalétique Professionnelle",
      description: "Solutions complètes pour l'intérieur et l'extérieur",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Habillage de Façades",
      description: "Transformez votre façade avec des solutions Alucobond",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Conception, Fabrication et Installation d'Enseignes à Casablanca
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Des solutions sur mesure pour votre entreprise : enseignes lumineuses, signalétique intérieure et extérieure, marquage de véhicules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition"
                >
                  Demandez un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&q=80&w=800"
                alt="Enseigne lumineuse"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600">
              Des solutions complètes pour votre identité visuelle
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir SignCraft?
              </h2>
              <div className="space-y-4">
                {[
                  "Plus de 15 ans d'expérience dans la signalétique",
                  "Équipe d'experts qualifiés",
                  "Matériaux de haute qualité",
                  "Service client exceptionnel",
                  "Installation professionnelle",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="Notre équipe au travail"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à Donner Vie à Votre Projet?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
          >
            Contactez-nous
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;