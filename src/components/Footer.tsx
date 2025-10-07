import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#193A6B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/accompagnement" className="text-gray-300 hover:text-white transition-colors">Coaching</Link></li>
              <li><Link to="/ebooks" className="text-gray-300 hover:text-white transition-colors">Guides</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">contact@expatrimoine.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1">
                  <Scale size={16} />
                  <span>Mentions légales</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Expatrimoine. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}