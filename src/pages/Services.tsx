import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const services = [
    {
      title: "Enseignes Lumineuses",
      description: "Des enseignes lumineuses innovantes pour maximiser votre visibilité jour et nuit",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=800",
      features: [
        "Enseignes LED haute luminosité",
        "Lettres lumineuses 3D",
        "Néons sur mesure",
        "Installation professionnelle",
        "Maintenance préventive"
      ],
      link: "/contact"
    },
    {
      title: "Signalétique Intérieure",
      description: "Solutions de signalétique intérieure élégantes et fonctionnelles",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      features: [
        "Panneaux directionnels",
        "Signalétique de sécurité",
        "Plaques de porte",
        "Totems d'information",
        "Signalétique PMR"
      ],
      link: "/contact"
    },
    {
      title: "Signalétique Extérieure",
      description: "Une signalétique extérieure durable et impactante",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      features: [
        "Totems publicitaires",
        "Panneaux directionnels",
        "Enseignes de façade",
        "Signalétique de parking",
        "Solutions anti-graffiti"
      ],
      link: "/contact"
    },
    {
      title: "Marquage de Véhicules",
      description: "Transformez vos véhicules en supports publicitaires mobiles",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      features: [
        "Covering total ou partiel",
        "Lettrage adhésif",
        "Marquage flotte entreprise",
        "Films micro-perforés",
        "Protection solaire"
      ],
      link: "/contact"
    },
    {
      title: "Habillage de Façades",
      description: "Donnez du caractère à vos façades avec nos solutions d'habillage",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800",
      features: [
        "Habillage Alucobond",
        "Bardage décoratif",
        "Films adhésifs",
        "Bâches tendues",
        "Éclairage architectural"
      ],
      link: "/contact"
    },
    {
      title: "Solutions Digitales",
      description: "Des solutions d'affichage digital innovantes et interactives",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      features: [
        "Écrans LED outdoor",
        "Affichage dynamique",
        "Bornes interactives",
        "Vitrines digitales",
        "Gestion de contenu"
      ],
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Nos Solutions de Signalétique
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services de signalétique et de communication visuelle pour valoriser votre image de marque.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
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
                Besoin d'un Service Sur Mesure?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Nos experts sont là pour vous conseiller et vous proposer la solution adaptée à vos besoins.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;