import React, { useState } from 'react';
import { ArrowRight, Check, Target, Compass, PiggyBank, FileText, BarChart as ChartBar, Scale, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function StrategieImmo() {
  const { dispatch } = useCart();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: 'strategie-immo',
        title: "Stratégie Immo",
        price: 245,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80"
      }
    });
  };

  const features = [
    {
      icon: <Target className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse budgétaire",
      description: "Évaluation précise de votre capacité d'investissement"
    },
    {
      icon: <Compass className="h-5 w-5 text-[#193A6B]" />,
      title: "Stratégie personnalisée",
      description: "Plan d'action adapté à vos objectifs"
    },
    {
      icon: <Scale className="h-5 w-5 text-[#193A6B]" />,
      title: "Optimisation fiscale",
      description: "Stratégies pour minimiser votre imposition"
    },
    {
      icon: <ChartBar className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse de marché",
      description: "Identification des zones à fort potentiel"
    },
    {
      icon: <PiggyBank className="h-5 w-5 text-[#193A6B]" />,
      title: "Plan financier",
      description: "Structuration optimale de votre investissement"
    },
    {
      icon: <FileText className="h-5 w-5 text-[#193A6B]" />,
      title: "Rapport stratégique",
      description: "Document détaillé avec plan d'action"
    }
  ];

  const faqs = [
    {
      question: "Quelle est la différence avec un conseiller bancaire classique ?",
      answer: "Contrairement à un conseiller bancaire qui se concentre uniquement sur le financement, notre approche est globale. Nous analysons votre situation complète (fiscalité, patrimoine, objectifs) pour créer une stratégie d'investissement personnalisée et optimisée. De plus, nous sommes totalement indépendants et travaillons exclusivement dans votre intérêt."
    },
    {
      question: "Comment se déroule la session de coaching ?",
      answer: "La session de coaching d'1h se déroule en visioconférence. Nous analysons ensemble votre situation, vos objectifs et contraintes. Nous vous présentons ensuite nos recommandations détaillées et répondons à toutes vos questions. Suite à la session, vous recevez un plan d'action personnalisé."
    },
    {
      question: "La stratégie est-elle adaptée aux non-résidents ?",
      answer: "Absolument ! Notre expertise est particulièrement pertinente pour les non-résidents car nous prenons en compte les spécificités de votre pays de résidence (fiscalité, réglementation, etc.) pour optimiser votre stratégie d'investissement en France."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Product Image and Details */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1333&q=80"
              alt="Stratégie Immo"
              className="rounded-2xl shadow-2xl mb-8"
            />
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-[#193A6B] mb-6">Ce qui est inclus</h2>
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
                Stratégie Immo
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Construisez une stratégie d'investissement solide et personnalisée
              </p>
              <div className="text-3xl font-bold text-[#193A6B] mb-8">245€</div>
            </div>

            <div className="prose text-gray-600">
              <p className="mb-4">
                Avant de vous lancer dans la recherche d'un bien, il est essentiel d'avoir une stratégie claire et adaptée à votre situation. Notre service Stratégie Immo vous permet de définir précisément votre plan d'action pour un investissement réussi.
              </p>
            </div>

            <div className="bg-[#FFFCEF] rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Ce que vous obtiendrez</h3>
              <ul className="space-y-3">
                {[
                  "Une stratégie d'investissement sur mesure",
                  "Une analyse détaillée de votre capacité d'investissement",
                  "Des recommandations de zones d'investissement",
                  "Un plan d'optimisation fiscale",
                  "Une évaluation des différents montages possibles",
                  "Des objectifs clairs et atteignables",
                  "Un plan d'action détaillé",
                  "Des conseils d'experts personnalisés"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Comment ça marche ?</h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#193A6B] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#193A6B]">Questionnaire initial</h4>
                    <p className="text-gray-600">Remplissez notre questionnaire détaillé pour nous permettre de comprendre votre situation</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#193A6B] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#193A6B]">Session de coaching</h4>
                    <p className="text-gray-600">Participez à une session de coaching personnalisée d'1h avec un expert</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#193A6B] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#193A6B]">Plan d'action</h4>
                    <p className="text-gray-600">Recevez votre stratégie détaillée et votre plan d'action personnalisé</p>
                  </div>
                </li>
              </ol>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Commencer ma stratégie</span>
              <ArrowRight size={20} />
            </button>
          </div>

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
                        className={`w-5 h-5 text-[#193A6B] transform transition-transform ${
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