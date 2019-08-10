import React from 'react';
import { Layout, Typography, Row, Col, Button } from 'antd';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <Layout>
      <Header />
      <Content>
        <Wrapper>
          <Title>Home</Title>
        </Wrapper>
      </Content>
    </Layout>
  );
}

export default Home;
