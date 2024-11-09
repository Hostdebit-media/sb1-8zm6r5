import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

function ServiceCard({ title, description, image, features, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
      <div className="relative h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Link
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;