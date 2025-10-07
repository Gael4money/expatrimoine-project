import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  Package, 
  Book, 
  Clock, 
  Shield, 
  Star, 
  Users,
  ChevronDown,
  Download,
  FileText,
  Building2,
  Calculator,
  Network
} from 'lucide-react';

export default function CoachingPremium() {
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
    openStripePopup('https://buy.stripe.com/8wM2ba9nscp06Ji145');
    setShowConfirmation(false);
  };

  const features = [
    {
      icon: <Package className="h-5 w-5 text-[#193A6B]" />,
      title: "Pack Complet Guides",
      description: "Accès à tous nos guides premium avec mises à jour"
    },
    {
      icon: <FileText className="h-5 w-5 text-[#193A6B]" />,
      title: "Checklists Exclusives",
      description: "Avant visite et RDV bancaire + outils incontournables"
    },
    {
      icon: <Clock className="h-5 w-5 text-[#193A6B]" />,
      title: "5h de Coaching 1-1",
      description: "Sessions personnalisées avec un expert dédié"
    },
    {
      icon: <Network className="h-5 w-5 text-[#193A6B]" />,
      title: "Réseau Partenaires",
      description: "Accès à notre réseau de professionnels qualifiés"
    },
    {
      icon: <Building2 className="h-5 w-5 text-[#193A6B]" />,
      title: "Dossier Bancaire",
      description: "Préparation complète de votre dossier de financement"
    },
    {
      icon: <Calculator className="h-5 w-5 text-[#193A6B]" />,
      title: "Analyse Patrimoniale",
      description: "Étude approfondie et stratégie personnalisée"
    }
  ];

  const caseStudy = {
    name: "Romain",
    age: 33,
    location: "Singapour",
    project: {
      type: "Colocation 5 chambres",
      city: "Nantes",
      price: "320 000 €"
    },
    results: [
      {
        label: "Apport réduit",
        before: "80 000 €",
        after: "32 000 €",
        savings: "+48 000 € de trésorerie"
      },
      {
        label: "Taux négocié",
        before: "4,10%",
        after: "2,85%",
        savings: "-17 600 € d'intérêts"
      },
      {
        label: "Cash-flow mensuel",
        value: "+625 €"
      },
      {
        label: "Gain patrimonial projeté",
        value: "≈ 103 000 € sur 20 ans"
      }
    ]
  };

  const faqs = [
    {
      question: "Comment se déroulent les sessions de coaching ?",
      answer: "Les sessions sont réalisées en visioconférence. les sujetes évoqués dépendent de vos besoins : financement, négociation, montage financier, etc."
    },
    {
      question: "Combien de temps dure l'accompagnement ?",
      answer: "L'accompagnement est calqué sur votre rythme, vous prenez votre RDV avec votre coach quand vous en avez besoin. Vous avez un accès illimité aux guides et aux checklists. Les sessions de coaching ont une durée limite de 1 an."
    },
    {
      question: "Comment accéder au réseau de partenaires ?",
      answer: "Dès la validation de votre inscription, vous recevez un accès à notre liste de partenaires et les contacts directs de nos collaborateurs de confiance dans les principales villes de France."
    }
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3"
              alt="Pack Coaching Premium"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#193A6B]/90 to-transparent"></div>
          </div>
          
          <div className="relative py-24 px-8 md:px-12">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Users className="h-8 w-8 text-white" />
                <h1 className="text-4xl font-bold text-white">Pack Coaching Premium</h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8">
                Un accompagnement complet et personnalisé pour réussir votre investissement immobilier depuis l'étranger.
              </p>

              <div className="flex items-center space-x-8">
                <div className="text-4xl font-bold text-white">1890€</div>
                <button
                  onClick={handleDirectCheckout}
                  className="bg-white text-[#193A6B] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-[#FFFCEF] rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#193A6B] mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Case Study */}
        <div className="bg-[#FFFCEF] rounded-xl p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#193A6B] mb-8 text-center">
              Ils l'ont fait : l'exemple de Romain
            </h2>
            
            <div className="bg-white rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="Romain"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#193A6B]">Romain, {caseStudy.age} ans</h3>
                  <p className="text-gray-600">Ingénieur français basé à {caseStudy.location}</p>
                </div>
              </div>

              <blockquote className="text-lg text-gray-600 italic mb-6">
                "Grâce à Expatrimoine, j'ai conservé près de 50 000 € de trésorerie et je me crée un cash-flow positif depuis l'autre bout du monde !"
              </blockquote>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-[#FFFCEF] rounded-lg p-4">
                    <h4 className="font-semibold text-[#193A6B] mb-2">{result.label}</h4>
                    {'before' in result ? (
                      <>
                        <div className="text-gray-500 line-through">{result.before}</div>
                        <div className="text-xl font-bold text-[#193A6B]">{result.after}</div>
                        <div className="text-green-600">{result.savings}</div>
                      </>
                    ) : (
                      <div className="text-xl font-bold text-[#193A6B]">{result.value}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
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

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#193A6B] mb-6">Prêt à transformer votre projet en réalité ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez les investisseurs qui ont déjà réussi leur projet immobilier avec notre accompagnement premium.
          </p>
          <button
            onClick={handleDirectCheckout}
            className="bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors inline-flex items-center space-x-2"
          >
            <span>Commencer maintenant</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md mx-4">
              <h3 className="text-xl font-semibold text-[#193A6B] mb-4">
                Confirmation de commande
              </h3>
              <p className="text-gray-600 mb-6">
                Vous allez être redirigé vers notre page de paiement sécurisée Stripe pour finaliser votre commande du Pack Coaching Premium.
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
    </div>
  );
}