import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calculator,
  Library,
  ArrowRight,
  Building,
  BookText,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Package
} from 'lucide-react';

export default function Solutions() {
  // Calculate savings for Pack Complet
  const packCompletFullPrice = 940;
  const packCompletPrice = 560;
  const packCompletSavings = packCompletFullPrice - packCompletPrice;
  const packCompletSavingsPercent = Math.round((packCompletSavings / packCompletFullPrice) * 100);

  // Calculate savings for Pack Coaching
  const packCoachingFullPrice = 2490;
  const packCoachingPrice = 1890;
  const packCoachingSavings = packCoachingFullPrice - packCoachingPrice;
  const packCoachingSavingsPercent = Math.round((packCoachingSavings / packCoachingFullPrice) * 100);

  const categories = [
    {
      title: "Nos Packs",
      description: "Des solutions complètes pour réussir votre investissement",
      image: "/Accès au crédit (1).png",
      services: [
        {
          title: "Pack Coaching Premium",
          price: "1890€",
          originalPrice: "2490€",
          savings: `Économisez ${packCoachingSavings}€ (${packCoachingSavingsPercent}%)`,
          description: "Un accompagnement complet et personnalisé pour réussir votre investissement",
          icon: <Users className="w-6 h-6" />,
          link: "/products/coaching-premium",
          benefits: [
            "5h de coaching personnalisé",
            "Accès aux 3 guides premium",
            "Réseau de partenaires",
            "Analyse patrimoniale complète"
          ]
        },
        {
          title: "Pack Complet Guides",
          price: "560€",
          originalPrice: "940€",
          savings: `Économisez ${packCompletSavings}€ (${packCompletSavingsPercent}%)`,
          description: "Maîtrisez tous les aspects de votre investissement avec nos guides essentiels",
          icon: <Package className="w-6 h-6" />,
          link: "/products/pack-complet",
          benefits: [
            "Accès aux 3 guides premium",
            "Économie de 380€",
            "Mises à jour gratuites 1 an",
            "Garantie satisfait ou remboursé"
          ]
        }
      ]
    },
    {
      title: "Accompagnement Personnalisé",
      description: "Des solutions sur mesure pour concrétiser votre projet immobilier",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      services: [
        {
          title: "L'analyse express de bien",
          price: "500€",
          description: "Une analyse approfondie de votre bien pour une décision éclairée",
          icon: <Calculator className="w-6 h-6" />,
          link: "/products/analyse-express",
          benefits: [
            "Analyse vidéo détaillée",
            "Étude de rentabilité",
            "Évaluation des risques",
            "Consultation expert"
          ]
        }
      ]
    },
    {
      title: "Guides Experts",
      description: "Des ressources complètes pour maîtriser votre investissement",
      image: "/Accès au crédit (1).png",
      services: [
        {
          title: "Guide Crédit Non-Résident",
          price: "490€",
          description: "Maximisez vos chances d'obtenir un financement optimal",
          icon: <BookOpen className="w-6 h-6" />,
          link: "/products/guide-investissement",
          benefits: [
            "Stratégies de financement",
            "Dossier bancaire optimal",
            "Comparatif des banques",
            "Templates et outils"
          ]
        },
        {
          title: "Guide Fiscal",
          price: "250€",
          description: "Optimisez votre fiscalité et évitez les pièges",
          icon: <BookText className="w-6 h-6" />,
          link: "/products/guide-fiscal",
          benefits: [
            "Stratégies d'optimisation",
            "Montages juridiques",
            "Évitement double imposition",
            "Conseils d'experts"
          ]
        },
        {
          title: "Guide Immobilier",
          price: "200€",
          description: "Trouvez et analysez les meilleures opportunités",
          icon: <Building className="w-6 h-6" />,
          link: "/products/guide-immobilier",
          benefits: [
            "Analyse de marché",
            "Évaluation des biens",
            "Calcul de rentabilité",
            "Critères de sélection"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#193A6B] mb-6">
            Des solutions adaptées à vos besoins
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services conçus pour vous accompagner à chaque étape de votre projet d'investissement immobilier.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-[#FFFCEF] p-8 rounded-2xl text-center">
            <Shield className="w-12 h-12 text-[#193A6B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#193A6B] mb-2">Expertise Reconnue</h3>
            <p className="text-gray-600">15+ années d'expérience dans l'accompagnement des expatriés</p>
          </div>
          <div className="bg-[#FFFCEF] p-8 rounded-2xl text-center">
            <Users className="w-12 h-12 text-[#193A6B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#193A6B] mb-2">Accompagnement sur mesure</h3>
            <p className="text-gray-600">Des solutions adaptées à votre situation unique</p>
          </div>
          <div className="bg-[#FFFCEF] p-8 rounded-2xl text-center">
            <Star className="w-12 h-12 text-[#193A6B] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#193A6B] mb-2">Satisfaction Client</h3>
            <p className="text-gray-600">98% de nos clients recommandent nos services</p>
          </div>
        </div>

        {/* Solutions Categories */}
        <div className="space-y-32">
          {categories.map((category, index) => (
            <div key={index} className="relative">
              {/* Category Header */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden mb-16">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#193A6B]/90 to-transparent flex items-center">
                  <div className="max-w-xl px-12">
                    <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                    <p className="text-xl text-white/90">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Link key={serviceIndex} to={service.link} className="group">
                    <div className="bg-white rounded-xl shadow-lg p-8 h-full transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="w-12 h-12 bg-[#193A6B] rounded-lg flex items-center justify-center text-white mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-semibold text-[#193A6B] mb-2">{service.title}</h3>
                      {'originalPrice' in service && (
                        <div className="mb-2">
                          <span className="text-gray-500 line-through text-lg mr-2">{service.originalPrice}</span>
                          <span className="text-2xl font-bold text-[#193A6B]">{service.price}</span>
                        </div>
                      )}
                      {'savings' in service && (
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-2">
                          {service.savings}
                        </div>
                      )}
                      {!('originalPrice' in service) && (
                        <div className="text-2xl font-bold text-[#193A6B] mb-4">{service.price}</div>
                      )}
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-[#193A6B] group-hover:text-[#122c52]">
                        <span>En savoir plus</span>
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 mb-16 bg-[#FFFCEF] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#193A6B] mb-6">Besoin d'aide pour choisir ?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous guider vers la solution la plus adaptée à votre situation.
          </p>
          <Link
            to="/#contact-section"
            className="bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors inline-flex items-center space-x-2"
          >
            <span>Contactez-nous</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}