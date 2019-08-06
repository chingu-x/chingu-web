import React from "react";
import { Layout } from 'antd';
import Header from "../components/Header";
import CompleteSignUpForm from "../components/CompleteSignUpForm";

export default function CompleteSignUp() {
  return (
    <Layout>
      <Header />
      <CompleteSignUpForm />
    </Layout>
  );
}