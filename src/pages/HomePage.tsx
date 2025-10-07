import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribeToNewsletter } from '../lib/brevo';
import {
  Globe,
  Clock,
  BookOpen,
  Building2,
  PiggyBank,
  FileText,
  ArrowRight,
  Check,
  Package,
  Briefcase,
  Calculator,
  Building,
  Users,
  Calendar,
  MailIcon,
  Book,
  Lock,
  ShieldCheck,
  Box,
  Target,
  Brain,
  Puzzle as PuzzlePiece
} from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await subscribeToNewsletter(email);
      if (response) {
        setShowSuccess(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setEmailError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { number: "1000+", label: "Clients Satisfaits" },
    { number: "15+", label: "Années d'Expérience" },
    { number: "50+", label: "Pays Couverts" },
    { number: "500M€+", label: "Actifs Gérés" }
  ];

  const totalValue = 940;
  const packPrice = 560;
  const savings = totalValue - packPrice;
  const savingsPercentage = Math.round((savings / totalValue) * 100);

  const engagements = [
    {
      icon: <Target className="h-12 w-12 text-[#193A6B]" />,
      title: "Pour des expats, par des expats",
      description: "Tous nos contenus et services sont conçus pour répondre aux problématiques spécifiques des expatriés."
    },
    {
      icon: <Brain className="h-12 w-12 text-[#193A6B]" />,
      title: "Pédagogie pragmatique",
      description: "On va droit à l'essentiel, sans jargon inutile. Nos guides sont pensés pour vous aider à agir."
    },
    {
      icon: <Lock className="h-12 w-12 text-[#193A6B]" />,
      title: "De l'expérience terrain",
      description: "Les guides sont issus de notre expérience personnel en temps qu'investisseurs expatriés."
    },
    {
      icon: <PuzzlePiece className="h-12 w-12 text-[#193A6B]" />,
      title: "Approche modulaire",
      description: "Vous choisissez ce dont vous avez besoin. Un guide ? Une analyse ? Un accompagnement complet ?"
    }
  ];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Modern real estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#193A6B]/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Investissez sereinement depuis l'étranger
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Des solutions complètes pour réussir vos investissements immobiliers en France, même à distance.
            </p>
            <Link 
              to="/solutions" 
              className="inline-flex items-center bg-white text-[#193A6B] px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors space-x-2"
            >
              <span>Découvrez nos solutions</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Engagements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#193A6B] mb-4">Nos Engagements</h2>
            <p className="text-xl text-gray-600">Des valeurs fortes pour un accompagnement de qualité</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagements.map((engagement, index) => (
              <div key={index} className="bg-[#FFFCEF] rounded-xl p-8 text-center transform hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  {engagement.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#193A6B] mb-3">{engagement.title}</h3>
                <p className="text-gray-600">{engagement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Guides Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#193A6B] mb-4">L'essentiel pour avancer en autonomie</h2>
            <p className="text-xl text-gray-600 mb-8">Le pack parfait pour vous former et avancer seul sur votre projet</p>
          </div>

          {/* Pack Promo Banner */}
          <div className="mb-16 bg-gradient-to-r from-[#193A6B] to-[#2d5494] rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <Package className="h-8 w-8" />
                    <h2 className="text-3xl font-bold">Pack Complet</h2>
                  </div>
                  <div className="bg-white/20 text-white inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    Économisez {savingsPercentage}% !
                  </div>
                  <p className="text-white/90 text-lg mb-6">
                    Obtenez nos 3 guides essentiels pour maîtriser tous les aspects de votre investissement immobilier en France.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span>Accès à tous nos guides premium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span>Économisez {savings}€ sur le prix individuel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-yellow-400" />
                      <span>Mises à jour gratuites pendant 1 an</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    
                    <Link
                      to="/products/pack-complet"
                      className="bg-white text-[#193A6B] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                    >
                      <span>Voir le pack</span>
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "/Acc%C3%A8s%20au%20cr%C3%A9dit%20(1).png",
                    "/Optimisation Fiscale (2).png",
                    "/Trouver son bien rentable (1).png"
                  ].map((image, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
                      <img src={image} alt={`Guide ${index + 1}`} className="w-full h-32 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/solutions" 
              className="inline-flex items-center bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors space-x-2"
            >
              <span>Voir tous nos guides</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Coaching Premium Section */}
      <section className="py-20 bg-[#FFFCEF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#193A6B] mb-4">Un accompagnement complet et sur mesure</h2>
            <p className="text-xl text-gray-600">Avancez sur votre projet accompagné par notre équipe d'experts</p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-[#193A6B]" />
                  <h3 className="text-2xl font-bold text-[#193A6B]">Pack Coaching Premium</h3>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
                  Économisez 600€
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    "5h de coaching personnalisé",
                    "Accès aux 3 guides premium",
                    "Réseau de partenaires",
                    "Analyse patrimoniale complète"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-4 mb-8">
                  
                  <Link
                    to="/products/coaching-premium"
                    className="bg-[#193A6B] text-white px-8 py-3 rounded-lg hover:bg-[#122c52] transition-colors flex items-center space-x-2"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Coaching Premium"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#193A6B] mb-4">Besoin d'un avis expert sur un bien ?</h2>
            <p className="text-xl text-gray-600">Faites analyser votre projet d'investissement par nos experts</p>
          </div>

          <div className="bg-[#FFFCEF] rounded-xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Analyse Express"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Calculator className="h-8 w-8 text-[#193A6B]" />
                  <h3 className="text-2xl font-bold text-[#193A6B]">L'analyse express de bien</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Une analyse approfondie de votre bien pour une décision éclairée
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Coach analyse en vidéo du bien",
                    "Étude de rentabilité détaillée",
                    "Meeting intro + restitution",
                    "Analyse des travaux et risques"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    to="/products/analyse-express"
                    className="bg-[#193A6B] text-white px-8 py-3 rounded-lg hover:bg-[#122c52] transition-colors flex items-center space-x-2"
                  >
                    <span>En savoir plus</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email capture section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#193A6B] to-[#2d5494] rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Book className="h-8 w-8" />
                  <h2 className="text-3xl font-bold">Guide Kickstart </h2>
                </div>
                <p className="text-white/90 text-lg mb-6">
                  Découvrez les bases essentielles de l'investissement immobilier avec notre guide gratuit. Idéal pour les débutants qui souhaitent comprendre les fondamentaux.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-yellow-400" />
                    <span>Les concepts clés expliqués simplement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-yellow-400" />
                    <span>Checklist pour démarrer sereinement</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-yellow-400" />
                    <span>Conseils d'experts pour éviter les erreurs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#193A6B] mb-2">
                    Recevez votre guide gratuit
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Rejoignez plus de 5000 investisseurs qui ont déjà téléchargé le guide
                  </p>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        emailError ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-[#193A6B]`}
                      disabled={isSubmitting}
                    />
                    {emailError && (
                      <p className="mt-1 text-sm text-red-500">{emailError}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#193A6B] text-white px-6 py-3 rounded-lg hover:bg-[#122c52] transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <span>Télécharger le guide gratuit</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Lock size={14} />
                    <span>Vos données sont protégées</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <ShieldCheck size={14} />
                    <span>Désabonnement en 1 clic</span>
                  </div>
                </form>
                
                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-green-700">
                      <Check className="h-5 w-5" />
                      <p>Merci ! Vérifiez votre boîte mail pour télécharger le guide.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}