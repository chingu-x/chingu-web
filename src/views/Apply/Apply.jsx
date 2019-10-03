import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Row, Col, Input } from 'antd';
import { useAuth0 } from '../../contexts/auth';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import CountrySelect from '../../components/CountrySelect';
import TimeZoneSelect from '../../components/TimeZoneSelect';
import styles from './Apply.module.scss';

const CREATE_APPLICATION = gql`
  mutation createApplication($applicationInput: VoyageApplicationInput!) {
    createVoyageApplication(applicationInput: $applicationInput)
  }
`;

export default function Apply() {
  const { loginWithRedirect } = useAuth0();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState();
  const [otherGender, setOtherGender] = useState('');
  const [email, setEmail] = useState('');
  const [desiredRole, setDesiredRole] = useState('DEVELOPER');
  const [countryCode, setCountryCode] = useState();
  const [city, setCity] = useState('');
  const [timeZone, setTimeZone] = useState();
  const [isPreviousMember, setIsPreviousMember] = useState(false);
  const [excitedTo, setExcitedTo] = useState();
  const [otherExcitedTo, setOtherExcitedTo] = useState('');
  const [source, setSource] = useState();
  const [otherSource, setOtherSource] = useState('');
  const [tier, setTier] = useState();

  const [createApplication, { loading: creatingApplication }] = useMutation(
    CREATE_APPLICATION,
    {
      onCompleted: () => {
        loginWithRedirect({
          redirect_uri: `${window.location.origin}/payment`,
          login_hint: email
        });
      }
    }
  );

  async function submitApplication() {
    const applicationInput = {
      firstName,
      lastName,
      email,
      gender,
      isPreviousMember,
      reasonForApplying: excitedTo,
      desiredRole,
      desiredTier: tier,
      countryCode,
      cityName: city,
      source,
      timezoneName: timeZone
    };

    if (gender === 'OTHER' && otherGender.length) {
      applicationInput.otherGender = otherGender;
    }
    if (source === 'OTHER' && otherSource.length) {
      applicationInput.otherSource = otherSource;
    }
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
    <Wrapper>
      <Title className={styles.title}>
        Apply to join the <span style={{ color: '#15cf89' }}>October</span>{' '}
        cohort!
      </Title>
      <div className={styles.question}>
        <Title level={3}>Tell us a little about yourself</Title>
        <label>
          <span>First Name</span>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
      </div>
      <div className={styles.question}>
        <Title level={3}>Have you been in a Chingu cohort before?</Title>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="is-previous-member"
              value={true}
              checked={isPreviousMember}
              onChange={() => setIsPreviousMember(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="is-previous-member"
              value={false}
              checked={!isPreviousMember}
              onChange={() => setIsPreviousMember(false)}
            />
            No
          </label>
        </div>
      </div>
      <div className={styles.question}>
        <Title level={3}>What opportunity in Chingu most excites you?</Title>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="excited-to"
              value="NETWORK_WITH_SHARED_GOALS"
              checked={excitedTo === 'NETWORK_WITH_SHARED_GOALS'}
              onChange={() => setExcitedTo('NETWORK_WITH_SHARED_GOALS')}
            />
            To join a friendly group of learners who share my goals and meet new
            friends
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
      <div className={styles.question}>
        <Title level={3}>Where are you joining from?</Title>
        <Row type="flex" style={{ marginBottom: 16 }}>
          <Col span={12}>
            <CountrySelect
              value={countryCode}
              onChange={v => setCountryCode(v)}
            />
          </Col>
        </Row>
        <Row type="flex" style={{ marginBottom: 16 }}>
          <Col span={12}>
            <Input
              className={styles.textInput}
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </Col>
        </Row>
        <Row type="flex">
          <Col span={12}>
            <TimeZoneSelect
              countryCode={countryCode}
              value={timeZone}
              onChange={v => setTimeZone(v)}
            />
          </Col>
        </Row>
      </div>
      <div className={styles.question}>
        <Title level={3}>What is your gender?</Title>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={gender === 'FEMALE'}
              onChange={() => setGender('FEMALE')}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={gender === 'MALE'}
              onChange={() => setGender('MALE')}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="OTHER"
              checked={gender === 'OTHER'}
              onChange={() => setGender('OTHER')}
            />
            Other
            {gender === 'OTHER' && (
              <input
                type="text"
                placeholder="Please specify"
                value={otherGender}
                onChange={e => setOtherGender(e.target.value)}
              />
            )}
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="PREFER_NOT_TO_DISCLOSE"
              checked={gender === 'PREFER_NOT_TO_DISCLOSE'}
              onChange={() => setGender('PREFER_NOT_TO_DISCLOSE')}
            />
            Prefer not to say
          </label>
        </div>
      </div>
      {desiredRole === 'DEVELOPER' && (
        <div className={styles.question}>
          <Title level={3}>Which tier and project type best suits you?</Title>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="disired-tier"
                value="TIER_3"
                checked={tier === 'TIER_3'}
                onChange={() => setTier('TIER_3')}
              />
              Tier 3 - Advanced Projects - Data Visualization - Back-end (FULL
              STACK)
            </label>
            <label>
              <input
                type="radio"
                name="disired-tier"
                value="TIER_2"
                checked={tier === 'TIER_2'}
                onChange={() => setTier('TIER_2')}
              />
              Tier 2 - Intermediate Algorithms - Front-end Projects (FRONT-END)
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
      {!isPreviousMember && (
        <div className={styles.question}>
          <Title level={3}>Where did you hear about Chingu?</Title>
          <div className={styles.radioGroup}>
            <label>
              <input
                type="radio"
                name="source"
                value="MEDIUM"
                checked={source === 'MEDIUM'}
                onChange={() => setSource('MEDIUM')}
              />
              On Medium
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="PERSONAL_NETWORK"
                checked={source === 'PERSONAL_NETWORK'}
                onChange={() => setSource('PERSONAL_NETWORK')}
              />
              From a friend/someone I know
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="FREE_CODE_CAMP_FORUM"
                checked={source === 'FREE_CODE_CAMP_FORUM'}
                onChange={() => setSource('FREE_CODE_CAMP_FORUM')}
              />
              The FreeCodeCamp Forum
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="GOOGLE_SEARCH"
                checked={source === 'GOOGLE_SEARCH'}
                onChange={() => setSource('GOOGLE_SEARCH')}
              />
              Google Search
            </label>
            <label>
              <input
                type="radio"
                name="source"
                value="OTHER"
                checked={source === 'OTHER'}
                onChange={() => setSource('OTHER')}
              />
              Other
              {source === 'OTHER' && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherSource}
                  onChange={e => setOtherSource(e.target.value)}
                />
              )}
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
    </Wrapper>
  );
}
