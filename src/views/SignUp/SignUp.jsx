import React, { useState, useReducer, useCallback } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useQueryParam, StringParam } from 'use-query-params';
import { useUser } from '../../contexts/user';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Button } from '../../components/Button';
import CountrySelect from '../../components/CountrySelect';
import TimeZoneSelect from '../../components/TimeZoneSelect';
import styles from './SignUp.module.scss';

const PRIVACY_POLICY_CONSENT_MESSAGE = '';

const SIGN_UP = gql`
  mutation signUp($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput) {
      id
      auth0Id
      email
      firstName
      lastName
      countryCode
      cityName
      timezoneName
      githubUsername
    }
  }
`;

const SUBMIT_SURVEY = gql`
  mutation submitPostSignUpSurvey(
    $postSignUpSurveyInput: PostSignUpSurveyInput!
  ) {
    submitPostSignUpSurvey(postSignUpSurveyInput: $postSignUpSurveyInput)
  }
`;

function SignUp() {
  const { user } = useUser();
  const history = useHistory();
  const [returnTo] = useQueryParam('returnTo', StringParam);
  const [signUpComplete, setSignUpComplete] = useState(true);
  const [signUpState, signUpDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET':
          return {
            ...state,
            [action.name]: action.value
          };
        default:
          return state;
      }
    },
    {
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      gender: null,
      otherGender: null,
      countryCode: '',
      cityName: '',
      timezoneName: '',
      githubUsername: ''
    }
  );
  const [surveyState, surveyDispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET':
          return {
            ...state,
            [action.name]: action.value
          };
        default:
          return state;
      }
    },
    {
      isPreviousMember: false,
      source: null,
      otherSource: null
    }
  );
  const setSignUpInputValue = useCallback(
    e => {
      signUpDispatch({
        type: 'SET',
        name: e.target.name,
        value: e.target.value
      });
    },
    [signUpDispatch]
  );
  const setSurveyInputValue = useCallback(
    e => {
      surveyDispatch({
        type: 'SET',
        name: e.target.name,
        value: e.target.value
      });
    },
    [surveyDispatch]
  );
  const [signUp, { loading }] = useMutation(SIGN_UP, {
    variables: {
      signUpInput: {
        email: signUpState.email,
        password: signUpState.password,
        firstName: signUpState.firstName,
        lastName: signUpState.lastName,
        gender: signUpState.gender,
        otherGender: signUpState.otherGender,
        countryCode: signUpState.countryCode,
        cityName: signUpState.cityName,
        timezoneName: signUpState.timezoneName,
        privacyPolicyConsentMessage: PRIVACY_POLICY_CONSENT_MESSAGE,
        githubUsername: signUpState.githubUsername
      }
    },
    onCompleted: data => {
      if (data && data.signUp) {
        localStorage.setItem('me', JSON.stringify(data.signUp));
      }
      setSignUpComplete(true);
    }
  });
  const [submitSurvey, { loading: surveyLoading }] = useMutation(
    SUBMIT_SURVEY,
    {
      variables: {
        postSignUpSurveyInput: {
          isPreviousMember: surveyState.isPreviousMember,
          source: surveyState.source,
          otherSource: surveyState.otherSource
        }
      },
      onCompleted: data => {
        if (data && data.submitPostSignUpSurvey) {
          if (returnTo && returnTo.startsWith('/') && !returnTo.includes(':')) {
            history.push(returnTo);
          } else {
            history.push('/');
          }
        }
      }
    }
  );

  if (user) {
    history.push('/');
  }

  return signUpComplete ? (
    <Wrapper className={styles.wrapper}>
      <Title level={3}>Are you a previous member?</Title>
      <input
        type="checkbox"
        name="isPreviousMember"
        onChange={e =>
          surveyDispatch({
            type: 'SET',
            name: 'isPreviousMember',
            value: !!e.target.checked
          })
        }
        checked={surveyState.isPreviousMember}
      />
      <Title level={3}>Where did you hear about Chingu?</Title>
      <div className={styles.radioGroup}>
        <label>
          <input
            type="radio"
            name="source"
            value="DEV"
            checked={surveyState.source === 'DEV'}
            onChange={setSurveyInputValue}
          />
          On Dev.to
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="TWITTER"
            checked={surveyState.source === 'TWITTER'}
            onChange={setSurveyInputValue}
          />
          On Twitter
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="MEDIUM"
            checked={surveyState.source === 'MEDIUM'}
            onChange={setSurveyInputValue}
          />
          On Medium
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="PERSONAL_NETWORK"
            checked={surveyState.source === 'PERSONAL_NETWORK'}
            onChange={setSurveyInputValue}
          />
          From a friend/someone I know
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="FREE_CODE_CAMP_FORUM"
            checked={surveyState.source === 'FREE_CODE_CAMP_FORUM'}
            onChange={setSurveyInputValue}
          />
          The FreeCodeCamp Forum
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="GOOGLE_SEARCH"
            checked={surveyState.source === 'GOOGLE_SEARCH'}
            onChange={setSurveyInputValue}
          />
          Google Search
        </label>
        <label>
          <input
            type="radio"
            name="source"
            value="OTHER"
            checked={surveyState.source === 'OTHER'}
            onChange={setSurveyInputValue}
          />
          Other
          {surveyState.source === 'OTHER' && (
            <input
              type="text"
              name="otherSource"
              placeholder="Please specify"
              value={surveyState.otherSource}
              onChange={setSurveyInputValue}
            />
          )}
        </label>
      </div>
      <Button type="primary" onClick={submitSurvey} disabled={surveyLoading}>
        Submit
      </Button>
    </Wrapper>
  ) : (
    <Wrapper className={styles.wrapper}>
      <Title level={3}>Email</Title>
      <input
        type="email"
        name="email"
        value={signUpState.email}
        onChange={setSignUpInputValue}
      />
      <Title level={3}>Password</Title>
      <input
        type="password"
        name="password"
        value={signUpState.password}
        onChange={setSignUpInputValue}
      />
      <Title level={3}>Confirm Password</Title>
      <input
        type="password"
        name="passwordConfirm"
        value={signUpState.passwordConfirm}
        onChange={setSignUpInputValue}
      />
      <Title level={3}>First Name</Title>
      <input
        type="text"
        name="firstName"
        value={signUpState.firstName}
        onChange={setSignUpInputValue}
      />
      <Title level={3}>Last Name</Title>
      <input
        type="text"
        name="lastName"
        value={signUpState.lastName}
        onChange={setSignUpInputValue}
      />
      <Title level={3}>Github Username</Title>
      <input
        type="text"
        name="githubUsername"
        value={signUpState.githubUsername}
        onChange={setSignUpInputValue}
      />
      <Title level={3}>Where are you joining from?</Title>
      <div className={styles.location}>
        <CountrySelect
          value={signUpState.countryCode}
          onChange={value =>
            signUpDispatch({ type: 'SET', name: 'countryCode', value })
          }
        />
        <input
          className={styles.textInput}
          placeholder="City"
          name="cityName"
          value={signUpState.cityName}
          onChange={setSignUpInputValue}
        />
        <TimeZoneSelect
          countryCode={signUpState.countryCode}
          value={signUpState.timezoneName}
          onChange={value =>
            signUpDispatch({ type: 'SET', name: 'timezoneName', value })
          }
        />
      </div>
      <div>
        <Title level={3}>What is your gender?</Title>
        <div className={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="gender"
              value="FEMALE"
              checked={signUpState.gender === 'FEMALE'}
              onChange={setSignUpInputValue}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="MALE"
              checked={signUpState.gender === 'MALE'}
              onChange={setSignUpInputValue}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="OTHER"
              checked={signUpState.gender === 'OTHER'}
              onChange={setSignUpInputValue}
            />
            Other
            {signUpState.gender === 'OTHER' && (
              <input
                type="text"
                name="otherGender"
                placeholder="Please specify"
                value={signUpState.otherGender}
                onChange={setSignUpInputValue}
              />
            )}
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="PREFER_NOT_TO_DISCLOSE"
              checked={signUpState.gender === 'PREFER_NOT_TO_DISCLOSE'}
              onChange={setSignUpInputValue}
            />
            Prefer not to say
          </label>
        </div>
      </div>
      <Button type="primary" onClick={signUp} disabled={loading}>
        Sign Up
      </Button>
    </Wrapper>
  );
}

export default SignUp;
