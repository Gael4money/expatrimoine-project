import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { stripe } from '../_shared/stripe.ts';
import { createClient } from 'npm:@supabase/supabase-js';

const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');

serve(async (req) => {
  const signature = req.headers.get('stripe-signature');

  try {
    const event = stripe.webhooks.constructEvent(
      await req.text(),
      signature,
      endpointSecret
    );

    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        
        // Update order status
        await supabase
          .from('orders')
          .update({ status: 'paid' })
          .eq('stripe_payment_intent_id', paymentIntent.id);

        // Send confirmation email and delivery links
        // TODO: Implement email sending logic

        break;
      
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        
        await supabase
          .from('orders')
          .update({ status: 'failed' })
          .eq('stripe_payment_intent_id', failedPayment.id);
        
        break;
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: `Webhook Error: ${err.message}` }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
});