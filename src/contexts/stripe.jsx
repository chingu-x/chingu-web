import React from 'react';
import { StripeProvider } from 'react-stripe-elements';

export default function ChinguStripeProvider({ children }) {
  return (
    <StripeProvider apiKey="pk_test_CKs9563PQxnbAE1K6PF87OZk00AU8ayDdI">
      {children}
    </StripeProvider>
  );
}
