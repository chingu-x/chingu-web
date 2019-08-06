import React from 'react';
import { Layout, Row, Col } from 'antd';
import Header from '../components/Header';

const { Content, Footer } = Layout;

export default function Landing() {
  return (
    <Layout>
      <Header />
      <Content>
        <Row>
          <Col span={12}>Landing</Col>
          <Col span={12}>Apply</Col>
        </Row>
        <Row>
          <Col span={12}>What can chingu do for me?</Col>
          <Col span={12}>Tech stack</Col>
        </Row>
        <Row>
          <Col span={12}>Ready?</Col>
        </Row>
        <Row>
          <Col span={24}></Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  );
}
