import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">SignCraft</h3>
            <p className="text-sm">
              Votre partenaire de confiance pour la signalétique et la publicité à Casablanca depuis plus de 15 ans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">À Propos</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>Enseignes Lumineuses</li>
              <li>Signalétique Intérieure</li>
              <li>Signalétique Extérieure</li>
              <li>Marquage de Véhicules</li>
              <li>Habillage de Façades</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>123 Rue Example, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@signcraft.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-sm text-center">
            <p>&copy; {new Date().getFullYear()} SignCraft. Tous droits réservés.</p>
            <div className="mt-2">
              <Link to="/privacy" className="hover:text-white transition">Politique de confidentialité</Link>
              {' • '}
              <Link to="/terms" className="hover:text-white transition">Conditions d'utilisation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;