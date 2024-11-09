import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Les Tendances en Signalétique pour 2024",
      excerpt: "Découvrez les dernières innovations en matière d'enseignes et de signalétique digitale.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      date: "2024-02-15",
      author: "Mohammed Alami",
      category: "Tendances"
    },
    {
      id: 2,
      title: "Comment Choisir son Enseigne Lumineuse",
      excerpt: "Guide complet pour sélectionner l'enseigne lumineuse parfaite pour votre entreprise.",
      image: "https://images.unsplash.com/photo-1563906267088-b029e7101114?auto=format&fit=crop&q=80&w=800",
      date: "2024-02-10",
      author: "Sara Bennani",
      category: "Conseils"
    },
    {
      id: 3,
      title: "L'Impact de la Signalétique sur l'Expérience Client",
      excerpt: "Comprendre comment une bonne signalétique peut améliorer l'expérience de vos clients.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
      date: "2024-02-05",
      author: "Karim Tazi",
      category: "Marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">
              Blog & Actualités
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Restez informé des dernières tendances et innovations en matière de signalétique
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Lire la suite
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;