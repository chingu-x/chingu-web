import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useQueryParam, StringParam } from 'use-query-params';

const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      auth0Id
      email
      firstName
      lastName
      countryCode
      cityName
      timezoneName
    }
  }
`;

function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [returnTo] = useQueryParam('returnTo', StringParam);
  const [signIn, { loading, data }] = useMutation(SIGN_IN, {
    variables: {
      email,
      password
    }
  });

  useEffect(() => {
    if (data && data.signIn) {
      localStorage.setItem('me', JSON.stringify(data.signIn));

      if (returnTo && returnTo.startsWith('/') && !returnTo.includes(':')) {
        history.push(returnTo);
      } else {
        history.push('/');
      }
    }
  }, [data, history, returnTo]);

  return (
    <>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={signIn} disabled={loading}>
        Sign In
      </button>
    </>
  );
}

export default SignIn;
