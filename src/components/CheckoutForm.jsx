import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ stripe }) {
  const [complete, setComplete] = React.useState(false);

  const submit = async ev => {
    console.log(ev);
    let { token } = await stripe.createToken({ name: 'Name' });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    });

    if (response.ok) setComplete(true);
  };

  return complete ? (
    <h1>Purchase Complete</h1>
  ) : (
    <div className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Send</button>
    </div>
  );
}

export default injectStripe(CheckoutForm);
