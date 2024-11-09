import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">SignCraft</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/process" className="text-gray-700 hover:text-blue-600 transition">Notre Processus</Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-blue-600 transition">Portfolio</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">À Propos</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
            <Link to="/contact" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Contactez-nous
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/process" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Notre Processus</Link>
            <Link to="/portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">À Propos</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className="block px-3 py-2 text-blue-600 font-medium">Contactez-nous</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;