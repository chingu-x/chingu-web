import React from 'react';
import { StripeProvider } from 'react-stripe-elements';

const {
  REACT_APP_STRIPE_API_KEY: STRIPE_API_KEY = 'pk_test_yIHwedm3UKBavN4uRagJmdet00rn37gaWb'
} = process.env;

export default function ChinguStripeProvider({ children }) {
  return <StripeProvider apiKey={STRIPE_API_KEY}>{children}</StripeProvider>;
}
