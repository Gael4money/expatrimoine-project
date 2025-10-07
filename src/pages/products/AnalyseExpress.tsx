import React, { useState } from 'react';
import { ArrowRight, Check, FileText, Building2, Calculator, BarChart as ChartBar, Clock, Shield, ChevronDown } from 'lucide-react';

export default function AnalyseExpress() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const openStripePopup = (url: string) => {
    const width = 450;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      url,
      'Stripe Checkout',
      `width=${width},height=${height},left=${left},top=${top},location=no,menubar=no,toolbar=no,status=no,scrollbars=yes`
    );
  };

  const handleDirectCheckout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmRedirect = () => {
    openStripePopup('https://buy.stripe.com/aEU7vudDI60C4BaaEG');
    setShowConfirmation(false);
  };

  const features = [
    {
      icon: <Building2 className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse vidéo détaillée",
      description: "Examen approfondi du bien et de son environnement"
    },
    {
      icon: <Calculator className="h-5 w-5 text-[#193A6B]" />,
      title: "Étude de rentabilité",
      description: "Calculs détaillés du rendement et des cash-flows"
    },
    {
      icon: <ChartBar className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse des risques",
      description: "Identification et évaluation des points de vigilance"
    },
    {
      icon: <Clock className="h-5 w-5 text-[#193A6B]" />,
      title: "Meeting de restitution",
      description: "Session de coaching personnalisée d'1h30"
    },
    {
      icon: <Shield className="h-5 w-5 text-[#193A6B]" />,
      title: "Sécurisation du projet",
      description: "Validation des aspects juridiques et techniques"
    },
    {
      icon: <FileText className="h-5 w-5 text-[#193A6B]" />,
      title: "Rapport complet",
      description: "Document détaillé avec recommandations"
    }
  ];

  const faqs = [
    {
      question: "Combien de temps prend l'analyse complète d'un bien ?",
      answer: "Notre analyse express est réalisée en 48-72h ouvrées après réception de tous les documents nécessaires. Cela inclut l'analyse approfondie du bien, l'étude de marché, et la préparation du rapport détaillé. Le rendez-vous de restitution d'1h30 est programmé dans les jours qui suivent."
    },
    {
      question: "Quels documents dois-je fournir pour l'analyse ?",
      answer: "Pour une analyse optimale, nous avons besoin de l'annonce immobilière complète, des photos du bien, du DPE, des plans si disponibles, et de tout document technique en votre possession. Plus nous avons d'informations, plus notre analyse sera précise."
    },
    {
      question: "L'analyse est-elle adaptée aux investisseurs débutants ?",
      answer: "Absolument ! Notre analyse est particulièrement utile pour les investisseurs débutants car nous expliquons chaque aspect de manière claire et pédagogique. Nous vous guidons à travers tous les points importants à considérer et vous aidons à prendre une décision éclairée."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Product Image and Details */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3"
              alt="Analyse Express"
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
                L'analyse express de bien
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Une analyse approfondie de votre bien pour une décision éclairée
              </p>
              <div className="text-3xl font-bold text-[#193A6B] mb-8">500€</div>
            </div>

            <div className="prose text-gray-600">
              <p className="mb-4">
                Vous avez repéré un bien qui vous intéresse ? Notre analyse express vous permet de valider votre choix et d'identifier tous les points clés avant de vous engager. Un investissement réussi commence par une analyse détaillée.
              </p>
            </div>

            <div className="bg-[#FFFCEF] rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Pourquoi choisir l'analyse express ?</h3>
              <ul className="space-y-3">
                {[
                  "Validation professionnelle de votre choix d'investissement",
                  "Identification des risques potentiels",
                  "Analyse détaillée de la rentabilité",
                  "Expertise du marché local",
                  "Évaluation des travaux nécessaires",
                  "Vérification de la cohérence du prix",
                  "Étude du potentiel locatif",
                  "Recommandations personnalisées"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Le processus en 3 étapes</h3>
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#193A6B] text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#193A6B]">Envoi des informations</h4>
                    <p className="text-gray-600">Transmettez-nous l'annonce et les documents disponibles</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#193A6B] text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#193A6B]">Analyse approfondie</h4>
                    <p className="text-gray-600">Notre équipe réalise une étude complète du bien</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#193A6B] text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#193A6B]">Restitution personnalisée</h4>
                    <p className="text-gray-600">Session de coaching d'1h30 pour présenter les résultats</p>
                  </div>
                </li>
              </ol>
            </div>

            <button
              onClick={handleDirectCheckout}
              className="w-full bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Réserver mon analyse maintenant</span>
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

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <h3 className="text-xl font-semibold text-[#193A6B] mb-4">
              Confirmation de commande
            </h3>
            <p className="text-gray-600 mb-6">
              Vous allez être redirigé vers notre page de paiement sécurisée Stripe pour finaliser votre commande de l'Analyse Express.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmRedirect}
                className="px-6 py-2 bg-[#193A6B] text-white rounded-lg hover:bg-[#122c52] transition-colors"
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}