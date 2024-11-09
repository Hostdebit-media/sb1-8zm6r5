import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, PenTool, Wrench, CheckCircle2, MessageCircle, Settings } from 'lucide-react';

function Process() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-600" />,
      title: "Consultation Initiale",
      description: "Discussion approfondie de vos besoins, objectifs et contraintes spécifiques.",
      details: [
        "Analyse de vos besoins",
        "Étude de l'emplacement",
        "Définition du budget",
        "Conseils personnalisés"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Conception",
      description: "Création de designs uniques et adaptés à votre image de marque.",
      details: [
        "Recherche créative",
        "Propositions de design",
        "Visualisations 3D",
        "Ajustements illimités"
      ]
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: "Validation",
      description: "Révision et approbation finale du design et des spécifications.",
      details: [
        "Révision détaillée",
        "Validation technique",
        "Conformité réglementaire",
        "Approbation finale"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Fabrication",
      description: "Production de haute qualité avec des matériaux durables.",
      details: [
        "Matériaux premium",
        "Contrôle qualité",
        "Tests de durabilité",
        "Assemblage précis"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Installation",
      description: "Installation professionnelle par notre équipe d'experts.",
      details: [
        "Installation sécurisée",
        "Respect des normes",
        "Tests fonctionnels",
        "Nettoyage du site"
      ]
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: "Suivi",
      description: "Service après-vente et maintenance pour une durabilité optimale.",
      details: [
        "Maintenance préventive",
        "Support technique",
        "Garantie produit",
        "Service d'urgence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Notre Processus de Travail
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir des résultats exceptionnels à chaque projet
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-50 rounded-lg p-3 mr-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
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
                Prêt à Démarrer Votre Projet?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Notre équipe est là pour vous accompagner à chaque étape de votre projet
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition"
              >
                Commencer votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Process;