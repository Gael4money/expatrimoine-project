import React from 'react';
import { Globe, Users, TrendingUp, Target, Brain, Lock, Puzzle as PuzzlePiece, CheckCircle, GraduationCap, Share2 } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Globe className="h-6 w-6" />, number: "32 Pays", label: "Depuis lesquels on a accompagné des investsseurs" },
    { icon: <Users className="h-6 w-6" />, number: "200+", label: "Expatriés accompagnés à travers le monde" },
    { icon: <TrendingUp className="h-6 w-6" />, number: "5 ans", label: "D'experience en temps qu'investisseur expatrié" },
    { icon: <Target className="h-6 w-6" />, number: "100+ projets", label: "Analysés avec soin pour nos clients" }
  ];

  const forces = [
    {
      icon: <GraduationCap className="h-16 w-16 text-[#193A6B]" />,
      title: "Démocratiser",
      description: "Notre volonté est de rendre accessible la connaissance financière à n'importe qui. Nos formations sont traduites avec des mots simples, sur un ton décontracté et abordable. Pas de blabla pour te perdre. Ici, nous tenons à ce que tu comprennes pour que tu sois armé."
    },
    {
      icon: <Target className="h-16 w-16 text-[#193A6B]" />,
      title: "Appliquer",
      description: "On dit ce qu'on fait et on fait ce qu'on dit. Chaque formateur et coachs investis dans l'immobilier. Nous tous réunis, ce sont des dizaines de millions d'euros investis sur des centaines d'opérations dans les quatre continents. Nous appliquons, avant tout, tout ce que nous enseignons, raison pour laquelle les résultats sont rapides. Très peu de théorie, beaucoup de concret."
    },
    {
      icon: <Brain className="h-16 w-16 text-[#193A6B]" />,
      title: "Crédibilité",
      description: "Notre expertise est reconnue dans le domaine de l'investissement immobilier pour les expatriés. Nous intervenons régulièrement dans des écoles de commerce, sur des plateaux TV et sommes consultés par les plus grands médias du secteur."
    },
    {
      icon: <Share2 className="h-16 w-16 text-[#193A6B]" />,
      title: "Réactivité",
      description: "Certains projets ou questions peuvent être lié à une certaine notion d'urgence, pour ça notre équipe reste joignable sous 24h pour répondre à vos questions, et vous aidez à avancer "
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFCEF] pt-24">
      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-[#193A6B] mb-8">Notre Mission</h1>
          <div className="space-y-6 text-lg text-gray-600">
            <p className="font-semibold text-xl text-[#193A6B]">
              Rendre l'investissement immobilier en France simple, accessible et rentable pour les expatriés francophones du monde entier.
            </p>
            <p>
              Nous savons combien il peut être frustrant de vouloir construire un patrimoine à distance sans y voir clair dans la fiscalité, les démarches, ou les bons choix à faire.
            </p>
            <p>
              Notre mission est claire : vous rendre autonome, confiant et efficace dans vos décisions d'investissement — même si vous vivez à l'autre bout du monde.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-[#FFFCEF] rounded-full flex items-center justify-center mx-auto mb-4 text-[#193A6B]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#193A6B] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Forces Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-[#193A6B] text-center mb-4">Les Forces de Notre Enseignement</h2>
          <p className="text-xl text-gray-600 text-center mb-16">Notre approche unique pour votre réussite</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {forces.map((force, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-[#FFFCEF] rounded-full flex items-center justify-center">
                    {force.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#193A6B] text-center mb-4">{force.title}</h3>
                <p className="text-gray-600 text-center">{force.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-[#193A6B] rounded-2xl shadow-xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Processus d'Accompagnement</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Consultation Initiale",
                description: "Échange approfondi pour comprendre vos objectifs et contraintes"
              },
              {
                step: "2",
                title: "Analyse Stratégique",
                description: "Élaboration d'une stratégie d'investissement personnalisée"
              },
              {
                step: "3",
                title: "Sélection d'Opportunités",
                description: "Identification et analyse des biens correspondant à vos critères"
              },
              {
                step: "4",
                title: "Accompagnement Complet",
                description: "Support continu jusqu'à la finalisation de votre investissement"
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="text-3xl font-bold mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-white/80">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-white"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}