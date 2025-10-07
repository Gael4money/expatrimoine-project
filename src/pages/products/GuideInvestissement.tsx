import React, { useState } from 'react';
import { ArrowRight, Check, Download, Clock, FileText, PiggyBank, Calculator, Building2, BarChart as ChartBar, ChevronDown } from 'lucide-react';

export default function GuideInvestissement() {
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
    openStripePopup('https://buy.stripe.com/00g1768jocp02t228d');
    setShowConfirmation(false);
  };

  const features = [
    {
      icon: <Building2 className="h-5 w-5 text-[#193A6B]" />,
      title: "Classement des meilleures banques",
      description: "Accédez à notre classement exclusif des banques les plus favorables aux non-résidents"
    },
    {
      icon: <Calculator className="h-5 w-5 text-[#193A6B]" />,
      title: "Solutions de financement innovantes",
      description: "Découvrez des montages juridiques spécifiques et des prêts sans apport"
    },
    {
      icon: <PiggyBank className="h-5 w-5 text-[#193A6B]" />,
      title: "Optimisation de l'apport",
      description: "Stratégies pour réduire votre apport au niveau des résidents"
    },
    {
      icon: <FileText className="h-5 w-5 text-[#193A6B]" />,
      title: "Dossier bancaire optimal",
      description: "Guide étape par étape pour préparer un dossier bancaire convaincant"
    },
    {
      icon: <ChartBar className="h-5 w-5 text-[#193A6B]" />,
      title: "Scoring bancaire",
      description: "Techniques pour améliorer votre scoring et maximiser vos chances"
    },
    {
      icon: <Clock className="h-5 w-5 text-[#193A6B]" />,
      title: "Timeline détaillée",
      description: "Planification précise de toutes les étapes du financement"
    }
  ];

  const faqs = [
    {
      question: "Le guide est-il mis à jour régulièrement ?",
      answer: "Oui, le guide est mis à jour tous les trimestres pour refléter les dernières conditions bancaires, les nouveaux programmes de financement et les changements réglementaires. Les acheteurs ont accès gratuitement aux mises à jour pendant un an après l'achat."
    },
    {
      question: "Quel taux d'apport minimum puis-je espérer en tant que non-résident ?",
      answer: "Cela dépend de votre pays de résidence et de votre profil, mais notre guide vous montre comment obtenir des financements avec seulement 15-20% d'apport, alors que la plupart des banques demandent 30-40% aux non-résidents. Nous détaillons les stratégies spécifiques pour y parvenir."
    },
    {
      question: "Le guide convient-il aux primo-investisseurs ?",
      answer: "Absolument ! Le guide est conçu pour être accessible aux débutants tout en restant pertinent pour les investisseurs expérimentés. Nous expliquons chaque concept en détail et fournissons des exemples concrets pour faciliter la compréhension."
    },
    {
      question: "Puis-je obtenir un financement si je suis travailleur indépendant ?",
      answer: "Oui, le guide contient une section spéciale dédiée aux travailleurs indépendants et entrepreneurs. Nous expliquons comment présenter vos revenus de manière optimale et quelles banques sont les plus ouvertes à ce profil spécifique."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Product Image and Details */}
          <div>
            <img
              src="/Acc%C3%A8s%20au%20cr%C3%A9dit%20(1).png"
              alt="Guide Crédit Non-Résident"
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
                Guide Accès au crédit immobilier pour Non-résident
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Obtenez les meilleurs financements même en tant que non-résident
              </p>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-3xl font-bold text-[#193A6B]">490€</span>
                <span className="text-lg text-gray-500 line-through">590€</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  -17%
                </span>
              </div>
            </div>

            <div className="prose text-gray-600">
              <p className="mb-4">
                Découvrez comment obtenir les meilleures conditions de financement en tant que non-résident. Notre guide vous donne accès aux stratégies éprouvées et aux solutions concrètes pour surmonter les obstacles traditionnels du crédit immobilier.
              </p>
            </div>

            <div className="bg-[#FFFCEF] rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">Ce guide vous apprendra :</h3>
              <ul className="space-y-3">
                {[
                  "Comment obtenir des prêts sans apport",
                  "Les montages juridiques spécifiques pour non-résidents",
                  "Les techniques pour réduire votre apport initial",
                  "La préparation optimale d'un dossier bancaire",
                  "L'amélioration de votre scoring bancaire",
                  "Les points essentiels à aborder en rendez-vous bancaire",
                  "La planification des étapes de financement",
                  "Les stratégies pour dépasser son taux d'endettement",
                  "Le processus de refinancement d'un bien"
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
                  <span>Classement actualisé des banques partenaires</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Modèles de dossiers bancaires</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-[#193A6B]" />
                  <span>Mises à jour gratuites pendant 1 an</span>
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
              Vous allez être redirigé vers notre page de paiement sécurisée Stripe pour finaliser votre commande du Guide Crédit Non-Résident.
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