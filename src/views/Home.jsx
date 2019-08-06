import React from 'react';
import { Elements } from 'react-stripe-elements';
import { Layout } from 'antd';
import Header from '../components/Header';
import CheckoutForm from '../components/CheckoutForm';

function Home() {
  return (
    <Layout>
      <Header />
      Home
      <Elements>
        <CheckoutForm />
      </Elements>
    </Layout>
  );
}

export default Home;
