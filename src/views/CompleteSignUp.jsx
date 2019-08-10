import React from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { useUser } from '../contexts/user';
import Header from '../components/Header';
import CompleteSignUpForm from '../components/CompleteSignUpForm';

export default function CompleteSignUp() {
  const { user } = useUser();

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <Header />
      <CompleteSignUpForm />
    </Layout>
  );
}
