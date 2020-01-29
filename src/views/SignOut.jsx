import React from 'react';
import { Redirect } from 'react-router-dom';

function SignOut() {
  localStorage.removeItem('me');

  return <Redirect to="/" />;
}

export default SignOut;
