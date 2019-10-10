import React from 'react';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { injectStripe, Elements } from 'react-stripe-elements';
import { useMutation } from '@apollo/react-hooks';
import { useUser } from '../../contexts/user';
import LoadingView from '../../components/LoadingView';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { OfferCard } from '../../components/OfferCard';
import styles from './Payment.module.scss';

const currencyFormatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'USD'
});

const VOYAGE_COHORT_COST = currencyFormatter.format(29);
const JOB_READY_PATH_COST = currencyFormatter.format(129);

const CREATE_CHECKOUT_SESSION = gql`
  mutation createVoyageCheckoutSession($choice: VoyagePathChoice!) {
    checkoutSession: createVoyageCheckoutSession(choice: $choice) {
      checkoutSessionId
    }
  }
`;

function Form({ stripe }) {
  const { data: userData = {}, loading: loadingUser } = useUser();
  const [createCheckoutSession, { loading }] = useMutation(
    CREATE_CHECKOUT_SESSION,
    {
      onCompleted: data => {
        stripe
          .redirectToCheckout({
            sessionId: data.checkoutSession.checkoutSessionId
          })
          .then(result => {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
          });
      }
    }
  );

  if (loadingUser) {
    return <LoadingView />;
  }

  if (!loadingUser && userData.application) {
    const { status } = userData.application || {};

    if (status === 'PENDING_REVIEW') {
      return <Redirect to="/profile" />;
    } else if (status !== 'PENDING_PAYMENT') {
      return <Redirect to="/apply" />;
    }
  }

  return (
    <>
      <div className={styles.offers}>
        <OfferCard
          title="Voyage Cohort"
          subtitle="For those who want to level-up."
          price={VOYAGE_COHORT_COST}
          features={[
            'Matched with a remote developer team',
            '6 weeks of team developer experience',
            '1 team developer project for your portfolio',
            '6 pair-programming matches',
            'Completion Certificate',
            'Connect with a community of learners who share your goal',
            'Get out of tutorial purgatory'
          ]}
          actionText="Pay Now"
          action={() =>
            createCheckoutSession({ variables: { choice: 'SINGLE' } })
          }
          loading={loading}
        />
        <OfferCard
          title="Job-Ready Path"
          subtitle="For those who wants to get a job within a year."
          price={JOB_READY_PATH_COST}
          features={[
            'Join all Voyage sessions in a year (up to 6)',
            '1 year of developer experience for your resume',
            '6 team projects in your portfolio',
            '50 pair-programming matches',
            'Completion Certificates'
          ]}
          actionText="Pay Now"
          action={() =>
            createCheckoutSession({ variables: { choice: 'JOB_READY_PATH' } })
          }
          loading={loading}
        />
      </div>
    </>
  );
}

const FormWithStripe = injectStripe(Form);

export default function Payment() {
  return (
    <Wrapper contentAttributes={{ className: styles.wrapper }}>
      <Title level={1} className={styles.title}>
        Complete Payment
      </Title>
      <Paragraph className={styles.subtitle} size="large">
        Chingu offers you several core features of a traditional coding
        bootcamp, but for a fraction of the cost.
      </Paragraph>
      <Title level={3}>Save thousands with Chingu.</Title>
      <Elements>
        <FormWithStripe />
      </Elements>
    </Wrapper>
  );
}
