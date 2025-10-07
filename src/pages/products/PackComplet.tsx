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
  Download
} from 'lucide-react';

export default function PackComplet() {
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
    openStripePopup('https://buy.stripe.com/eVa0327fk2Oq0kUeUU');
    setShowConfirmation(false);
  };

  const guides = [
    {
      title: "Guide Crédit Non-Résident",
      description: "Maximisez vos chances d'obtenir un financement optimal",
      image: "/Acc%C3%A8s%20au%20cr%C3%A9dit%20(1).png",
      features: [
        "Stratégies de financement innovantes",
        "Dossier bancaire optimal",
        "Comparatif détaillé des banques",
        "Templates et outils pratiques"
      ]
    },
    {
      title: "Guide Fiscal",
      description: "Optimisez votre fiscalité et évitez les pièges",
      image: "/Optimisation Fiscale (2).png",
      features: [
        "Stratégies d'optimisation fiscale",
        "Montages juridiques optimaux",
        "Solutions pour éviter la double imposition",
        "Conseils d'experts personnalisés"
      ]
    },
    {
      title: "Guide Immobilier",
      description: "Trouvez et analysez les meilleures opportunités",
      image: "/Trouver son bien rentable (1).png",
      features: [
        "Analyse de marché approfondie",
        "Évaluation précise des biens",
        "Calculs de rentabilité détaillés",
        "Critères de sélection éprouvés"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      role: "Expatriée à Londres",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Grâce au Pack Complet, j'ai pu structurer mon premier investissement en France tout en restant à Londres. Les guides sont complets et les conseils vraiment pratiques."
    },
    {
      name: "Thomas D.",
      role: "Entrepreneur à Singapour",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      text: "L'investissement en pack est rentabilisé dès le premier achat. J'ai économisé des milliers d'euros en évitant les erreurs classiques grâce aux conseils des guides."
    },
    {
      name: "Sophie M.",
      role: "Cadre à Dubai",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      text: "La qualité des informations et la clarté des explications m'ont permis de me lancer sereinement dans l'investissement immobilier depuis l'étranger."
    }
  ];

  const faqs = [
    {
      question: "Combien de temps ai-je accès aux guides ?",
      answer: "Vous avez un accès illimité aux guides et bénéficiez gratuitement des mises à jour pendant 12 mois. Après cette période, vous conservez l'accès aux versions que vous avez téléchargées."
    },
    {
      question: "Les guides sont-ils adaptés aux débutants ?",
      answer: "Absolument ! Les guides sont conçus pour être accessibles aux débutants tout en restant pertinents pour les investisseurs expérimentés. Chaque concept est expliqué clairement avec des exemples concrets."
    },
    {
      question: "Comment sont livrés les guides ?",
      answer: "Immédiatement après votre achat, vous recevez un email avec les liens de téléchargement de vos guides au format PDF. Vous pouvez les consulter sur tous vos appareils."
    }
  ];

  const totalValue = 940;
  const packPrice = 560;
  const savings = totalValue - packPrice;
  const savingsPercentage = Math.round((savings / totalValue) * 100);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0">
            <img 
              src="/Accès au crédit (1).png"
              alt="Pack Complet Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#193A6B]/90 to-transparent"></div>
          </div>
          
          <div className="relative py-24 px-8 md:px-12">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Package className="h-8 w-8 text-white" />
                <h1 className="text-4xl font-bold text-white">Pack Complet Guides Expatrimoine</h1>
              </div>
              
              <div className="bg-white/20 text-white inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Économisez {savingsPercentage}% !
              </div>

              <p className="text-xl text-white/90 mb-8">
                Maîtrisez tous les aspects de votre investissement immobilier en France avec nos 3 guides essentiels. De la recherche du bien au montage fiscal optimal, ne laissez rien au hasard.
              </p>

              <div className="flex items-center space-x-8">
                <div>
                  <span className="text-white/60 line-through text-lg">{totalValue}€</span>
                  <div className="text-4xl font-bold text-white">{packPrice}€</div>
                </div>
                <button
                  onClick={handleDirectCheckout}
                  className="bg-white text-[#193A6B] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                >
                  <span>Obtenir le pack</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <Book className="h-12 w-12 text-[#193A6B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#193A6B] mb-2">Guides Premium</h3>
            <p className="text-gray-600">Accès complet à nos 3 guides experts régulièrement mis à jour</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <Clock className="h-12 w-12 text-[#193A6B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#193A6B] mb-2">Accès 12 mois</h3>
            <p className="text-gray-600">Mises à jour gratuites pendant un an pour rester informé</p>
          </div>
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <Shield className="h-12 w-12 text-[#193A6B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#193A6B] mb-2">Garantie satisfait</h3>
            <p className="text-gray-600">Remboursement sous 30 jours si vous n'êtes pas satisfait</p>
          </div>
        </div>

        {/* Guides Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#193A6B] mb-8 text-center">Ce que contient le pack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">{guide.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <ul className="space-y-3">
                    {guide.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-[#FFFCEF] rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#193A6B]">5000+</div>
              <div className="text-gray-600">Guides téléchargés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#193A6B]">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#193A6B]">{savings}€</div>
              <div className="text-gray-600">Économies réalisées</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#193A6B]">12 mois</div>
              <div className="text-gray-600">Mises à jour gratuites</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#193A6B] mb-8 text-center">Ce qu'en pensent nos clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-[#193A6B]">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
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

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#193A6B] mb-6">Prêt à maîtriser votre investissement ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 5000 investisseurs qui ont déjà fait confiance à nos guides pour réussir leur projet immobilier en France.
          </p>
          <button
            onClick={handleDirectCheckout}
            className="bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors inline-flex items-center space-x-2"
          >
            <span>Obtenir le pack complet</span>
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
                Vous allez être redirigé vers notre page de paiement sécurisée Stripe pour finaliser votre commande du Pack Complet.
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