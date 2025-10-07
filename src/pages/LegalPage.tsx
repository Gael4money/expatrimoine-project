import React from 'react';

export default function LegalPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#193A6B] mb-8">Mentions Légales</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#193A6B] mb-4">1. Informations légales</h2>
            <p className="text-gray-700 mb-4">
              Expatrimoine est une société de conseil en investissement immobilier, immatriculée au Registre du Commerce et des Sociétés.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Siège social : [Adresse]</li>
              <li>SIRET : [Numéro SIRET]</li>
              <li>Directeur de la publication : [Nom du directeur]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#193A6B] mb-4">2. Protection des données personnelles</h2>
            <p className="text-gray-700 mb-4">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-[#193A6B] mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700 mb-4">
              L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#193A6B] mb-4">4. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment désactiver l'utilisation des cookies dans les paramètres de votre navigateur.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}