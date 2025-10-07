import React from 'react';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const handleContactClick = () => {
    // You can replace this with your own contact form logic
    window.location.href = 'mailto:contact@expatrimoine.com';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-[#FFFCEF] rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-6 w-6 text-[#193A6B]" />
          </div>
          <h3 className="font-semibold text-[#193A6B] mb-2">30 Minutes</h3>
          <p className="text-gray-600">Consultation dédiée</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#FFFCEF] rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="h-6 w-6 text-[#193A6B]" />
          </div>
          <h3 className="font-semibold text-[#193A6B] mb-2">Expert Dédié</h3>
          <p className="text-gray-600">Accompagnement personnalisé</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 bg-[#FFFCEF] rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-6 w-6 text-[#193A6B]" />
          </div>
          <h3 className="font-semibold text-[#193A6B] mb-2">Flexible</h3>
          <p className="text-gray-600">Choix du créneau adapté</p>
        </div>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#193A6B] mb-4">
          Réservez votre consultation gratuite
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discutez de votre projet d'investissement avec l'un de nos experts. 
          Nous analyserons ensemble vos objectifs et vous guiderons vers les meilleures solutions.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleContactClick}
          className="bg-[#193A6B] text-white px-8 py-4 rounded-lg hover:bg-[#122c52] transition-colors inline-flex items-center space-x-2 font-semibold"
        >
          <span>Contactez-nous</span>
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}