import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Shield } from 'lucide-react';

function About() {
  const stats = [
    { label: "Années d'expérience", value: "15+" },
    { label: "Projets réalisés", value: "1000+" },
    { label: "Clients satisfaits", value: "500+" },
    { label: "Professionnels qualifiés", value: "25+" }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, du design à l'installation."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Collaboration",
      description: "Nous travaillons en étroite collaboration avec nos clients pour des résultats optimaux."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Ponctualité",
      description: "Nous respectons les délais convenus pour chaque projet."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Qualité",
      description: "Nous utilisons uniquement des matériaux et équipements de haute qualité."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              À Propos de SignCraft
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leader de la signalétique et de la communication visuelle à Casablanca depuis plus de 15 ans
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Depuis notre création en 2009, SignCraft s'est imposé comme un leader dans le domaine de la signalétique et de la communication visuelle à Casablanca.
                </p>
                <p className="mb-4">
                  Notre engagement envers l'excellence et l'innovation nous a permis de développer des solutions sur mesure pour des centaines d'entreprises, des petites boutiques aux grandes enseignes nationales.
                </p>
                <p>
                  Aujourd'hui, notre équipe de plus de 25 professionnels qualifiés continue d'innover et d'offrir des solutions de signalétique qui dépassent les attentes de nos clients.
                </p>
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

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident notre travail au quotidien</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
                Prêt à Collaborer?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Découvrez comment notre expertise peut transformer votre projet en réalité
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
              >
                Contactez notre équipe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;