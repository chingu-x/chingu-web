import React from "react";
import { Layout } from 'antd';
import Header from "../components/Header";
import CompleteSignUpForm from "../components/CompleteSignUpForm";

export default function CompleteSignUp(): React.ReactElement {
  return (
    <Layout>
      <Header />
      <CompleteSignUpForm />
    </Layout>
  );
}