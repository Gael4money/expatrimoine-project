import { loadStripe } from '@stripe/stripe-js';

const stripePublicKey = 'pk_live_51RDu5tA34r1a8Q1JeJG4zu3e6webqP5ikCg0ozhEcN3SDx4GCDpLNsdRg7o21WEWQ1aYzABvVzflv4DhZNrX3RMP00OiBe1nYD';
if (!stripePublicKey) {
  throw new Error('Missing Stripe public key');
}

export const stripe = loadStripe(stripePublicKey);