import React from "react";
import { Layout } from 'antd';
import Header from "../components/Header";
import { useUser } from "../contexts/user";

export default function Home(): React.ReactElement {
  const user = useUser();

  return (
    <Layout>
      <Header />
      Home
      {user && (
        <p>
          Hi {user.id}<br />
          You are {user.isSignUpComplete ? "signed up" : "not signed up"}  
        </p>
      )}
      
    </Layout>
  );
}