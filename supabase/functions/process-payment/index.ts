import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { stripe } from '../_shared/stripe.ts';
import { corsHeaders } from '../_shared/cors.ts';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { cartItems } = await req.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map((item: any) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
            images: item.image ? [item.image] : [],
          },
          unit_amount: item.price * 100, // Convert to cents
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/order-confirmation?payment_intent={PAYMENT_INTENT}`,
      cancel_url: `${req.headers.get('origin')}/cart`,
      customer_update: {
        address: 'auto',
        name: 'auto',
      },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Payment processing error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An error occurred while processing the payment',
        details: error.toString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});