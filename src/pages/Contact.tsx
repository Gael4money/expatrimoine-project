import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    gdpr: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "Comment accéder à vos services ?",
      answer: "Vous pouvez accéder à nos services de plusieurs façons : en achetant directement nos guides en ligne, en prenant rendez-vous pour une consultation gratuite, ou en souscrivant à l'un de nos packs d'accompagnement. Chaque service est accessible depuis notre plateforme en quelques clics."
    },
    {
      question: "Quels sont vos délais de réponse ?",
      answer: "Nous nous engageons à répondre à toutes les demandes sous 24h ouvrées. Pour les prises de rendez-vous, vous pouvez directement réserver un créneau via notre calendrier en ligne. Les guides sont accessibles immédiatement après l'achat."
    },
    {
      question: "Quels types de produits proposez-vous ?",
      answer: "Nous proposons une gamme complète de solutions : des guides experts (fiscal, immobilier, crédit), des services d'accompagnement personnalisé comme l'analyse express de bien, et des packs complets combinant guides et coaching pour un accompagnement optimal."
    },
    {
      question: "Comment se déroule le premier rendez-vous ?",
      answer: "Le premier rendez-vous est une consultation gratuite de 30 minutes en visioconférence. Nous échangeons sur votre projet, vos objectifs et contraintes, puis nous vous présentons les solutions les plus adaptées à votre situation."
    },
    {
      question: "Quels sont vos tarifs ?",
      answer: "Nos tarifs varient selon les services : nos guides experts sont disponibles à partir de 200€, l'analyse express de bien est à 500€, et notre pack coaching premium est à 1890€. Tous nos tarifs sont transparents et accessibles sur notre site."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        gdpr: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#FFFCEF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#193A6B] mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#193A6B] mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom et prénom *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#193A6B] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#193A6B] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone (optionnel)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#193A6B] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Objet *
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#193A6B] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#193A6B] focus:border-transparent"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="gdpr"
                  required
                  checked={formData.gdpr}
                  onChange={(e) => setFormData({...formData, gdpr: e.target.checked})}
                  className="mt-1"
                />
                <label htmlFor="gdpr" className="text-sm text-gray-600">
                  J'accepte que mes données soient utilisées pour traiter ma demande conformément à la politique de confidentialité *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#193A6B] text-white px-6 py-3 rounded-lg transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#122c52]'
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitSuccess && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>Votre message a été envoyé avec succès !</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#193A6B] mb-6">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#193A6B]" />
                  <span>contact@expatrimoine.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-[#193A6B]" />
                  <span>Réponse sous 24h ouvrées</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#193A6B] mb-4">Prenez rendez-vous</h2>
              <p className="text-gray-600 mb-6">
                Réservez une consultation gratuite de 30 minutes avec l'un de nos experts pour discuter de votre projet d'investissement.
              </p>
              <div className="calendly-inline-widget" data-url="https://calendly.com/expatrimoine-info/new-meeting" style={{ minWidth: '320px', height: '700px' }}></div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#193A6B] mb-8">Questions fréquentes</h2>
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
  );
}