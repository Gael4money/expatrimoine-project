import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Check, Download } from 'lucide-react';

export default function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const paymentIntentId = searchParams.get('payment_intent');
    if (paymentIntentId) {
      fetchOrder(paymentIntentId);
    }
  }, [searchParams]);

  const fetchOrder = async (paymentIntentId: string) => {
    try {
      const { data: order } = await supabase
        .from('orders')
        .select('*, customers(*)')
        .eq('stripe_payment_intent_id', paymentIntentId)
        .single();

      setOrder(order);
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFFCEF] pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#193A6B] mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de votre commande...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-[#FFFCEF] pt-24">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#193A6B] mb-4">Commande non trouvée</h1>
          <p className="text-gray-600">Désolé, nous n'avons pas pu trouver votre commande.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFCEF] pt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-100 rounded-full p-3">
              <Check className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center text-[#193A6B] mb-2">
            Merci pour votre commande !
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Votre commande a été confirmée et vos produits sont prêts à être téléchargés.
          </p>

          <div className="border-t border-gray-200 pt-8 mb-8">
            <h2 className="text-xl font-semibold text-[#193A6B] mb-4">Détails de la commande</h2>
            <div className="space-y-4">
              {order.products.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-gray-600">{product.price}€</p>
                  </div>
                  <button className="flex items-center space-x-2 text-[#193A6B] hover:text-[#122c52]">
                    <Download size={20} />
                    <span>Télécharger</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#FFFCEF] rounded-lg p-6">
            <h3 className="font-semibold text-[#193A6B] mb-2">Prochaines étapes</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Vous recevrez un email de confirmation</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Les liens de téléchargement resteront actifs pendant 30 jours</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check size={16} className="text-green-500" />
                <span>Support disponible par email pour toute question</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}