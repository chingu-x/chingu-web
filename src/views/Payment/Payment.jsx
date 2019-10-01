import React from 'react';
import gql from 'graphql-tag';
import { injectStripe, Elements } from 'react-stripe-elements';
import { useMutation } from '@apollo/react-hooks';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import styles from './Payment.module.scss';

const CREATE_CHECKOUT_SESSION = gql`
  mutation createVoyageCheckoutSession($choice: VoyagePathChoice!) {
    checkoutSession: createVoyageCheckoutSession(choice: $choice) {
      checkoutSessionId
    }
  }
`;

function Form({ stripe }) {
  const [createCheckoutSession, { loading, error, data }] = useMutation(
    CREATE_CHECKOUT_SESSION,
    {
      onCompleted: data => {
        stripe
          .redirectToCheckout({
            // Make the id field from the Checkout Session creation API response
            // available to this file, so you can provide it as parameter here
            // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
            sessionId: data.checkoutSession.checkoutSessionId
          })
          .then(result => {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
        console.log(error);
        console.log(data);
      }
    }
  );

  return (
    <>
      <button
        onClick={() =>
          createCheckoutSession({ variables: { choice: 'SINGLE' } })
        }
      >
        29
      </button>
      <button
        onClick={() =>
          createCheckoutSession({ variables: { choice: 'JOB_READY_PATH' } })
        }
      >
        129
      </button>
    </>
  );
}

const FormWithStripe = injectStripe(Form);

export default function Payment() {
  return (
    <Wrapper>
      <Title className={styles.title}>Complete Payment</Title>
      <Elements>
        <FormWithStripe />
      </Elements>
    </Wrapper>
  );
}
