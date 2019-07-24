import React from "react";
import { Layout } from 'antd';

const { Header } = Layout;

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Header>Header</Header>
    </Layout>
  );
}