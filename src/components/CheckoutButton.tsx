import React from 'react';
import { useCart } from '../context/CartContext';

export default function CheckoutButton() {
  const { state } = useCart();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = React.useState(false);

  const openStripePopup = (url: string) => {
    const width = 450;
    const height = 700;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      url,
      'Stripe Checkout',
      `width=${width},height=${height},left=${left},top=${top},location=no,menubar=no,toolbar=no,status=no,scrollbars=yes`
    );
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if cart contains only Pack Complet
      const hasOnlyPackComplet = state.items.length === 1 && state.items[0].id === 'pack-complet';

      if (hasOnlyPackComplet) {
        setShowConfirmation(true);
        setLoading(false);
        return;
      }

      // For other products, use the regular checkout process
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/process-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: state.items.map(item => ({
            title: item.title,
            price: item.price,
            image: item.image
          }))
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (!url) {
        throw new Error('No checkout URL received');
      }

      openStripePopup(url);

    } catch (error) {
      console.error('Checkout error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during checkout');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmRedirect = () => {
    openStripePopup('https://buy.stripe.com/eVa0327fk2Oq0kUeUU');
    setShowConfirmation(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCheckout}
        disabled={loading || state.items.length === 0}
        className={`w-full bg-[#193A6B] text-white py-2 rounded-lg transition-colors ${
          loading || state.items.length === 0
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-[#122c52]'
        }`}
      >
        {loading ? 'Processing...' : 'Passer la commande'}
      </button>

      {error && (
        <div className="mt-2 text-red-600 text-sm text-center">
          {error}
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4">
            <h3 className="text-xl font-semibold text-[#193A6B] mb-4">
              Confirmation de commande
            </h3>
            <p className="text-gray-600 mb-6">
              Vous allez être redirigé vers notre page de paiement sécurisée Stripe pour finaliser votre commande du Pack Complet.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmRedirect}
                className="px-6 py-2 bg-[#193A6B] text-white rounded-lg hover:bg-[#122c52] transition-colors"
              >
                Continuer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}