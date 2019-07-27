import React from "react";
import { Layout } from 'antd';
import Header from "../components/Header";

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Header />
    </Layout>
  );
}