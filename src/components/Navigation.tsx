import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Building2,
  HandshakeIcon,
  HomeIcon,
  Users,
  ChevronDown,
  MenuIcon,
  X,
  Package,
  Calculator,
  Building,
  BookOpen,
  FileText,
  Mail
} from 'lucide-react';
import CartButton from './CartButton';

function NavLink({ icon, text, to, isActive }: { icon: React.ReactNode; text: string; to: string; isActive: boolean }) {
  return (
    <Link 
      to={to} 
      className={`flex items-center space-x-1 transition-colors ${
        isActive ? 'text-[#193A6B] font-semibold' : 'text-gray-600 hover:text-[#193A6B]'
      }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default function Navigation() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const mobileMenuItems = [
    { icon: <HomeIcon size={18} />, text: "Accueil", to: "/" },
    { icon: <HandshakeIcon size={18} />, text: "Nos Solutions", to: "/solutions" },
    { icon: <Users size={18} />, text: "À propos", to: "/about" },
    { icon: <Mail size={18} />, text: "Contact", to: "/contact" }
  ];

  const solutionsMenuItems = [
    {
      title: "Accompagnement",
      items: [
        {
          icon: <Users size={18} />,
          title: "Pack Coaching Premium",
          description: "Accompagnement complet personnalisé",
          to: "/products/coaching-premium"
        },
        {
          icon: <Calculator size={18} />,
          title: "L'analyse express de bien",
          description: "Coaching et analyse détaillée",
          to: "/products/analyse-express"
        }
      ]
    },
    {
      title: "Guides",
      items: [
        {
          icon: <BookOpen size={18} />,
          title: "Guide Crédit Non-Résident",
          description: "Financement immobilier",
          to: "/products/guide-investissement"
        },
        {
          icon: <FileText size={18} />,
          title: "Guide Fiscal",
          description: "Optimisation fiscale",
          to: "/products/guide-fiscal"
        },
        {
          icon: <Building size={18} />,
          title: "Guide Immobilier",
          description: "Investissement immobilier",
          to: "/products/guide-immobilier"
        },
        {
          icon: <Package size={18} />,
          title: "Pack Complet Guides",
          description: "Tous nos guides essentiels",
          to: "/products/pack-complet"
        }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Building2 className="h-8 w-8 text-[#193A6B]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-grow justify-center items-center space-x-12">
            <NavLink icon={<HomeIcon size={18} />} text="Accueil" to="/" isActive={isActive('/')} />
            
            {/* Nos Solutions Mega Menu */}
            <div className="relative group">
              <Link
                to="/solutions"
                className={`flex items-center space-x-1 py-2 transition-colors ${
                  isActive('/solutions') 
                    ? 'text-[#193A6B] font-semibold' 
                    : 'text-gray-600 hover:text-[#193A6B]'
                }`}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <HandshakeIcon size={18} />
                <span>Nos Solutions</span>
                <ChevronDown size={14} className={`transform transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-[42rem] mt-1 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                  isSolutionsOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                }`}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                style={{ maxWidth: 'calc(100vw - 2rem)' }}
              >
                <div className="grid grid-cols-2 gap-6 p-6">
                  {solutionsMenuItems.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-[#193A6B] font-semibold mb-4">{section.title}</h3>
                      <div className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            to={item.to}
                            className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-[#FFFCEF] hover:text-[#193A6B] rounded-lg transition-colors"
                          >
                            {item.icon}
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-gray-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <NavLink 
              icon={<Users size={18} />} 
              text="À propos" 
              to="/about" 
              isActive={isActive('/about')} 
            />

            <NavLink 
              icon={<Mail size={18} />} 
              text="Contact" 
              to="/contact" 
              isActive={isActive('/contact')} 
            />
            
            <CartButton />
          </div>

          {/* Mobile menu button and cart */}
          <div className="md:hidden flex items-center space-x-4">
            <CartButton />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#193A6B] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="p-4 space-y-4">
          {/* Main navigation items */}
          {mobileMenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`flex items-center space-x-2 p-4 rounded-lg transition-colors ${
                isActive(item.to) 
                  ? 'bg-[#FFFCEF] text-[#193A6B] font-semibold' 
                  : 'text-gray-600 hover:bg-[#FFFCEF] hover:text-[#193A6B]'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.icon}
              <span>{item.text}</span>
            </Link>
          ))}

          {/* Solutions sections */}
          {solutionsMenuItems.map((section, index) => (
            <div key={index} className="pt-4">
              <h3 className="text-[#193A6B] font-semibold px-4 mb-2">{section.title}</h3>
              <div className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.to}
                    className="flex items-center space-x-3 p-4 text-gray-700 hover:bg-[#FFFCEF] hover:text-[#193A6B] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}