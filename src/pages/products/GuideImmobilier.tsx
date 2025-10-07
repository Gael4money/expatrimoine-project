import React, { useState } from 'react';
import { ArrowRight, Check, Download, Search, Building, Calculator, PenTool as Tool, FileText, BarChart as ChartBar, PiggyBank, ChevronDown } from 'lucide-react';

export default function GuideImmobilier() {
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
    openStripePopup('https://buy.stripe.com/00g1764384Wy2t29AD');
    setShowConfirmation(false);
  };

  const features = [
    {
      icon: <Search className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse de marché",
      description: "Méthodologie pour trouver la zone idéale et analyser une ville"
    },
    {
      icon: <Building className="h-5 w-5 text-[#193A6B]" />,
      title: "Étude locative",
      description: "Comment valider la demande locative et réaliser une étude de marché"
    },
    {
      icon: <Tool className="h-5 w-5 text-[#193A6B]" />,
      title: "Estimation des travaux",
      description: "Guide complet pour estimer les coûts de rénovation"
    },
    {
      icon: <Calculator className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse de rentabilité",
      description: "Méthodes pour évaluer la rentabilité d'un investissement"
    },
    {
      icon: <FileText className="h-5 w-5 text-[#193A6B]" />,
      title: "Diagnostics techniques",
      description: "Interprétation des DPE, diagnostics plomb, amiante et électricité"
    },
    {
      icon: <PiggyBank className="h-5 w-5 text-[#193A6B]" />,
      title: "Négociation",
      description: "Stratégies pour faire une offre et négocier efficacement"
    }
  ];

  const faqs = [
    {
      question: "Comment identifier une zone à fort potentiel ?",
      answer: "Le guide fournit une méthodologie complète pour analyser une zone, incluant l'étude des indicateurs économiques clés, des projets d'urbanisme, de la démographie, et des tendances du marché locatif. Nous partageons également nos outils d'analyse et nos sources de données privilégiées."
    },
    {
      question: "Comment estimer précisément les travaux à distance ?",
      answer: "Nous détaillons une méthode en 3 étapes : l'analyse des photos et diagnostics, l'utilisation de notre grille d'estimation standardisée, et la consultation à distance d'artisans partenaires. Le guide inclut des check-lists détaillées et des exemples de devis commentés."
    },
    {
      question: "Quelle rentabilité peut-on espérer en 2024 ?",
      answer: "Le guide présente des études de cas récentes dans différentes villes, avec des rentabilités allant de 4% à 10% selon les stratégies. Nous expliquons comment maximiser le rendement tout en minimisant les risques, avec des exemples concrets d'investissements réussis."
    },
    {
      question: "Comment négocier efficacement à distance ?",
      answer: "Le guide fournit des scripts de négociation éprouvés, des techniques pour créer un rapport de force favorable, et des stratégies spécifiques pour négocier à distance. Nous partageons également nos meilleures pratiques pour travailler avec les agents immobiliers."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Product Image and Details */}
          <div>
            <img
              src="/Trouver son bien rentable (1).png"
              alt="Guide Immobilier"
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
                Trouver son bien rentable
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Guide complet pour identifier et analyser les biens à fort potentiel
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-[#193A6B]">200€</span>
                <span className="text-lg text-gray-500 line-through">300€</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  -33%
                </span>
              </div>
            </div>

            <div className="prose text-gray-600">
              <p className="mb-4">
                Découvrez notre méthodologie éprouvée pour trouver et analyser des biens rentables. De l'analyse de marché à la négociation, maîtrisez chaque étape de votre recherche immobilière.
              </p>
            </div>

            <div className="bg-[#FFFCEF] rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Ce guide vous apprendra :</h3>
              <ul className="space-y-3">
                {[
                  "Comment identifier et analyser une zone prometteuse",
                  "Techniques d'étude du marché locatif",
                  "Méthodes d'estimation précise des travaux",
                  "Calcul détaillé de la rentabilité",
                  "Analyse des diagnostics techniques",
                  "Stratégies de négociation efficaces",
                  "Évaluation complète du potentiel d'un bien",
                  "Utilisation de l'outil Simloc pour les simulations"
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
                  <span>Accès à l'outil Simloc pour vos simulations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Fiches d'analyse de marché prêtes à l'emploi</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Mises à jour régulières des données de marché</span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleDirectCheckout}
              className="w-full bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Télécharger maintenant</span>
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

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <h3 className="text-xl font-semibold text-[#193A6B] mb-4">
              Confirmation de commande
            </h3>
            <p className="text-gray-600 mb-6">
              Vous allez être redirigé vers notre page de paiement sécurisée Stripe pour finaliser votre commande du Guide Immobilier.
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