import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import LoadingView from '../../components/LoadingView';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import CatShouldLearnJavaScript from './assets/CatShouldLearnJavaScript.png';
import GoatQuote from './assets/GoatQuote.png';
import DuckQuote from './assets/DuckQuote.png';
import styles from './Apply.module.scss';

const CREATE_APPLICATION = gql`
  mutation createApplication($applicationInput: VoyageApplicationInput!) {
    createVoyageApplication(applicationInput: $applicationInput)
  }
`;

const GET_EXISTING_APPLICATIONS = gql`
  query getExistingApplications {
    applications {
      id
      status
      paymentStatus
    }
  }
`;

const VOYAGES = [
  { id: 'VOYAGE_15', optionText: 'Voyage 15 (Starts in January)' },
  { id: 'VOYAGE_16', optionText: 'Voyage 16 (Starts in February)' }
];

export default function Apply({ history }) {
  const { data: applicationsData, loading: loadingApplication } = useQuery(
    GET_EXISTING_APPLICATIONS,
    { fetchPolicy: 'network-only' }
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [voyage, setVoyage] = useState('');
  const [desiredRole, setDesiredRole] = useState('DEVELOPER');
  const [excitedTo, setExcitedTo] = useState();
  const [otherExcitedTo, setOtherExcitedTo] = useState('');
  const [tier, setTier] = useState();
  const [createApplication, { loading: creatingApplication }] = useMutation(
    CREATE_APPLICATION,
    {
      onCompleted: () => {
        history.push('/payment');
      }
    }
  );

  if (loadingApplication) {
    return <LoadingView />;
  }

  async function submitApplication() {
    const applicationInput = {
      reasonForApplying: excitedTo,
      desiredRole,
      desiredTier: tier,
      voyage
    };

    if (excitedTo === 'OTHER' && otherExcitedTo.length) {
      applicationInput.otherReasonForApplying = otherExcitedTo;
    }

    createApplication({
      variables: {
        applicationInput
      }
    });
  }

  return (
    <Wrapper className={styles.wrapper}>
      <Title className={styles.title}>
        Apply to join a <span style={{ color: '#15cf89' }}>Chingu Voyage!</span>{' '}
      </Title>
      <img
        className={styles.funImage}
        src={CatShouldLearnJavaScript}
        alt="A cat holding a newspaper and thinking about learning javascript"
      />
      <div className={styles.question}>
        <Title level={3}>Which voyage are you applying for?</Title>
        <div className={styles.radioGroup}>
          {VOYAGES.filter(v =>
            applicationsData && applicationsData.applications
              ? !applicationsData.applications.find(a => a.voyage === v.id)
              : true
          ).map(v => (
            <label key={v.id}>
              <input
                type="radio"
                name="desired-voyage"
                value={v.id}
                checked={voyage === v.id}
                onChange={() => setVoyage(v.id)}
              />
              {v.optionText}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.question}>
        <Title level={3}>What would you like to join as?</Title>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="desired-role"
              value="DEVELOPER"
              checked={desiredRole === 'DEVELOPER'}
              onChange={() => setDesiredRole('DEVELOPER')}
            />
            Developer
          </label>
          <label>
            <input
              type="radio"
              name="desired-role"
              value="DESIGNER"
              checked={desiredRole === 'DESIGNER'}
              onChange={() => setDesiredRole('DESIGNER')}
            />
            Designer
          </label>
          <label>
            <input
              type="radio"
              name="desired-role"
              value="DATA_SCIENTIST"
              checked={desiredRole === 'DATA_SCIENTIST'}
              onChange={() => setDesiredRole('DATA_SCIENTIST')}
            />
            Data Scientist
          </label>
        </div>
      </div>
      {desiredRole !== 'DEVELOPER' ? (
        <div className={styles.widgetArea}>
          <iframe
            title="mailjet"
            className="mj-w-res-iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://app.mailjet.com/widget/iframe/3rPm/jeP"
            width="100%"
          ></iframe>
        </div>
      ) : (
        <>
          <div className={styles.question}>
            <Title level={3}>
              What opportunity in Chingu most excites you?
            </Title>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="excited-to"
                  value="NETWORK_WITH_SHARED_GOALS"
                  checked={excitedTo === 'NETWORK_WITH_SHARED_GOALS'}
                  onChange={() => setExcitedTo('NETWORK_WITH_SHARED_GOALS')}
                />
                To join a friendly group of learners who share my goals and meet
                new friends
              </label>
              <label>
                <input
                  type="radio"
                  name="excited-to"
                  value="GET_OUT_OF_TUTORIAL_PURGATORY"
                  checked={excitedTo === 'GET_OUT_OF_TUTORIAL_PURGATORY'}
                  onChange={() => setExcitedTo('GET_OUT_OF_TUTORIAL_PURGATORY')}
                />
                To get out of "tutorial purgatory" and actually build projects
              </label>
              <label>
                <input
                  type="radio"
                  name="excited-to"
                  value="GAIN_EXPERIENCE"
                  checked={excitedTo === 'GAIN_EXPERIENCE'}
                  onChange={() => setExcitedTo('GAIN_EXPERIENCE')}
                />
                To gain experience building projects in remote teams
              </label>
              <label>
                <input
                  type="radio"
                  name="excited-to"
                  value="ACCELERATE_LEARNING"
                  checked={excitedTo === 'ACCELERATE_LEARNING'}
                  onChange={() => setExcitedTo('ACCELERATE_LEARNING')}
                />
                To get out of my comfort zone and accelerate my learning
              </label>
              <label>
                <input
                  type="radio"
                  name="excited-to"
                  value="OTHER"
                  checked={excitedTo === 'OTHER'}
                  onChange={() => setExcitedTo('OTHER')}
                />
                Other
                {excitedTo === 'OTHER' && (
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={otherExcitedTo}
                    onChange={e => setOtherExcitedTo(e.target.value)}
                  />
                )}
              </label>
            </div>
          </div>
          <img
            className={styles.funImage}
            src={GoatQuote}
            alt="A goat with a quote"
          />
          <img
            className={styles.funImage}
            src={DuckQuote}
            alt="A duck with a quote"
          />
          {desiredRole === 'DEVELOPER' && (
            <div className={styles.question}>
              <Title level={3}>
                Which tier and project type best suits you?
              </Title>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    name="disired-tier"
                    value="TIER_3"
                    checked={tier === 'TIER_3'}
                    onChange={() => setTier('TIER_3')}
                  />
                  Tier 3 - Advanced Projects - Data Visualization - Back-end
                  (FULL STACK)
                </label>
                <label>
                  <input
                    type="radio"
                    name="disired-tier"
                    value="TIER_2"
                    checked={tier === 'TIER_2'}
                    onChange={() => setTier('TIER_2')}
                  />
                  Tier 2 - Intermediate Algorithms - Front-end Projects
                  (FRONT-END)
                </label>
                <label>
                  <input
                    type="radio"
                    name="disired-tier"
                    value="TIER_1"
                    checked={tier === 'TIER_1'}
                    onChange={() => setTier('TIER_1')}
                  />
                  Tier 1 - HTML - Basic Javascript - Basic Algorithms (LANDING
                  PAGES)
                </label>
                <label>
                  <input
                    type="radio"
                    name="disired-tier"
                    value="OTHER"
                    checked={tier === 'OTHER'}
                    onChange={() => setTier('OTHER')}
                  />
                  Other
                </label>
              </div>
            </div>
          )}
          <Button
            type="primary"
            className={styles.submit}
            onClick={submitApplication}
            disabled={creatingApplication}
            size="large"
          >
            Submit
          </Button>
        </>
      )}
    </Wrapper>
  );
}
