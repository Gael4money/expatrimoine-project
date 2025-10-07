import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutButton from './CheckoutButton';

export default function CartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useCart();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-600 hover:text-[#193A6B] transition-colors"
      >
        <ShoppingCart size={18} />
        <span className="bg-[#193A6B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {state.items.length}
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Cart panel */}
          <div className="fixed right-0 top-0 h-full w-full max-w-[20rem] bg-white shadow-xl z-50 md:absolute md:top-auto md:h-auto md:max-h-[32rem] md:w-80 md:rounded-lg">
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-[#193A6B]">Panier</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>

              {state.items.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Votre panier est vide</p>
              ) : (
                <>
                  <div className="space-y-4 mb-4 max-h-[calc(100vh-12rem)] md:max-h-60 overflow-auto">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.price.toFixed(2)}€</p>
                        </div>
                        <button
                          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">{state.total.toFixed(2)}€</span>
                    </div>
                    <CheckoutButton />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}