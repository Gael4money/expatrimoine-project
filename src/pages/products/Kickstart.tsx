import React, { useState } from 'react';
import { ArrowRight, Check, Download, Building, Calculator, FileText, BarChart as ChartBar, Users, Book, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Kickstart() {
  const { dispatch, showToast } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: 'kickstart-immo',
        title: "Kickstart Immo",
        price: 150,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    });
    showToast('Guide Kickstart ajouté au panier !');
  };

  const features = [
    {
      icon: <Book className="h-5 w-5 text-[#193A6B]" />,
      title: "Les bases essentielles",
      description: "Maîtrisez les fondamentaux de l'investissement immobilier"
    },
    {
      icon: <Calculator className="h-5 w-5 text-[#193A6B]" />,
      title: "Calculs de rentabilité",
      description: "Apprenez à évaluer la rentabilité d'un investissement"
    },
    {
      icon: <Building className="h-5 w-5 text-[#193A6B]" />,
      title: "Choix du bien",
      description: "Critères essentiels pour sélectionner le bon bien"
    },
    {
      icon: <Users className="h-5 w-5 text-[#193A6B]" />,
      title: "Gestion locative",
      description: "Bases de la gestion locative et relation avec les locataires"
    },
    {
      icon: <FileText className="h-5 w-5 text-[#193A6B]" />,
      title: "Aspects juridiques",
      description: "Comprendre les bases légales et administratives"
    },
    {
      icon: <ChartBar className="h-5 w-5 text-[#193A6B]" />,
      title: "Stratégie d'investissement",
      description: "Définir ses objectifs et sa stratégie"
    }
  ];

  const faqs = [
    {
      question: "Ce guide convient-il aux débutants ?",
      answer: "Oui, ce guide est spécialement conçu pour les débutants. Il explique tous les concepts de base de manière claire et accessible, avec des exemples concrets et des cas pratiques."
    },
    {
      question: "Quels sont les prérequis pour suivre ce guide ?",
      answer: "Aucun prérequis n'est nécessaire. Le guide part des bases et progresse étape par étape. Vous avez juste besoin d'être motivé pour apprendre et investir dans l'immobilier."
    },
    {
      question: "Le guide est-il adapté au marché français ?",
      answer: "Absolument ! Le guide est spécifiquement conçu pour le marché immobilier français et prend en compte toutes ses particularités, notamment pour les expatriés."
    },
    {
      question: "Combien de temps faut-il pour assimiler le contenu ?",
      answer: "Le guide est structuré pour être parcouru en 2-3 semaines, avec des chapitres courts et des exercices pratiques. Vous pouvez bien sûr adapter le rythme selon vos disponibilités."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Product Image and Details */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Kickstart Immo"
              className="rounded-2xl shadow-2xl mb-8"
            />
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#193A6B] mb-6">Points clés du guide</h2>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#193A6B]">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#193A6B] mb-4">
                Kickstart Immo
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Les bases essentielles pour démarrer dans l'investissement immobilier
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-[#193A6B]">150€</span>
                <span className="text-lg text-gray-500 line-through">300€</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  -50%
                </span>
              </div>
            </div>

            <div className="prose text-gray-600">
              <p className="mb-4">
                Démarrez votre parcours d'investisseur immobilier avec les bonnes bases. Notre guide vous accompagne pas à pas dans la compréhension des fondamentaux et la mise en place de votre première stratégie d'investissement.
              </p>
            </div>

            <div className="bg-[#FFFCEF] rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Ce guide vous apprendra :</h3>
              <ul className="space-y-3">
                {[
                  "Les fondamentaux de l'investissement immobilier",
                  "Comment évaluer un bien et sa rentabilité",
                  "Les bases de la gestion locative",
                  "Les aspects juridiques essentiels",
                  "La création d'une stratégie d'investissement",
                  "L'analyse des marchés immobiliers",
                  "La gestion de votre premier investissement",
                  "Les erreurs à éviter en tant que débutant"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Le guide inclut :</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Download className="h-5 w-5 text-[#193A6B]" />
                  <span>Format PDF optimisé pour tous les appareils</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Exercices pratiques et cas d'études</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Fiches récapitulatives par chapitre</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Accès aux mises à jour pendant 1 an</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Ajouter au panier</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* FAQ Section */}
          <div className="md:col-span-2 mt-16">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#193A6B] mb-8">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="flex justify-between items-center w-full text-left py-4"
                    >
                      <span className="text-lg font-semibold text-[#193A6B]">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 w-5 text-[#193A6B] transform transition-transform ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 pb-4">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}