import Stripe from 'npm:stripe@14.14.0';

const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY');
if (!stripeSecretKey) {
  throw new Error('Missing Stripe secret key');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
});