import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de Contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Adresse</h3>
                      <p className="text-gray-600">123 Rue Example<br />Casablanca, Maroc</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                      <p className="text-gray-600">+212 5XX-XXXXXX</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">contact@signcraft.ma</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Horaires</h3>
                      <p className="text-gray-600">
                        Lun - Ven: 9h00 - 18h00<br />
                        Sam: 9h00 - 13h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option>Demande de devis</option>
                      <option>Question technique</option>
                      <option>Service après-vente</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;