import React from 'react';
import gql from 'graphql-tag';
import { Redirect, useHistory } from 'react-router-dom';
import { injectStripe, Elements } from 'react-stripe-elements';
import { useMutation, useQuery } from '@apollo/react-hooks';
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
    application: createVoyageCheckoutSession(choice: $choice) {
      id
      status
      paymentStatus
      checkoutSession {
        checkoutSessionId
      }
    }
  }
`;

const GET_EXISTING_APPLICATION = gql`
  query getExistingApplication {
    application {
      id
      status
      paymentStatus
      checkoutSession {
        checkoutSessionId
      }
    }
  }
`;

function Form({ stripe }) {
  const history = useHistory();
  const { data: applicationData = {}, loading: loadingApplication } = useQuery(
    GET_EXISTING_APPLICATION,
    { fetchPolicy: 'network-only' }
  );
  const [createCheckoutSession, { loading }] = useMutation(
    CREATE_CHECKOUT_SESSION,
    {
      onCompleted: data => {
        if (data.application.paymentStatus === 'NOT_REQUIRED') {
          history.push('/profile');
          return;
        }
        if (data.application.checkoutSession) {
          stripe
            .redirectToCheckout({
              sessionId: data.application.checkoutSession.checkoutSessionId
            })
            .then(result => {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            });
        }
      },
      fetchPolicy: 'no-cache'
    }
  );

  if (loadingApplication) {
    return <LoadingView />;
  }

  if (applicationData.application) {
    const { paymentStatus } = applicationData.application;
    if (paymentStatus === 'PAID') {
      return <Redirect to="/profile" />;
    }
  }

  return (
    <>
      <div className={styles.offers}>
        <OfferCard
          className={styles.offer}
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
          className={styles.offer}
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
        <OfferCard
          className={styles.offer}
          title="SOLO"
          subtitle="For those who want to build a solo project"
          price="Free"
          features={[
            'Build a project from start to finish',
            'Gain confidence as a developer',
            'Prep to be a team developer',
            'Support from Chingu community'
          ]}
          actionText="Sign Up"
          action={() =>
            createCheckoutSession({ variables: { choice: 'SOLO' } })
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
    <>
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
      <Wrapper contentAttributes={{ className: styles.experience }}>
        <div className={styles.experienceList}>
          <div style={{ flex: 1 }}>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A laptop emoji">
                💻
              </span>
              <Paragraph>
                <b>Build with other software developers in a team</b> & gain
                vital developer experience.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A party popper emoji">
                🎉
              </span>
              <Paragraph>
                <b>Be pushed outside your comfort zone</b> and make progress
                beyond what you would on your own.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A brain emoji">
                🧠
              </span>
              <Paragraph>
                <b>Gain in-demand soft skills</b> that all companies in the 21st
                century need and look for.
              </Paragraph>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A laptop emoji">
                💯
              </span>
              <Paragraph>
                <b>Finally get out of Tutorial Purgatory</b> and solidify your
                skills with real projects.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A party popper emoji">
                🌍
              </span>
              <Paragraph>
                <b>Collaborate with like-minded coders</b> who share your goals
                from around the world.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A brain emoji">
                💎
              </span>
              <Paragraph>
                <b>Boost your portfolio with finished projects</b> and earn
                Completion Certificates.
              </Paragraph>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
