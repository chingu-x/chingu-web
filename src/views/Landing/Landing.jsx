import React from 'react';
import { Layout, Typography, Row, Col, Button } from 'antd';
import Logo from './Logo.png';
import styles from './Landing.module.scss';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const wrapper = {
  md: 24,
  lg: 18,
  xxl: 16
};

export default function Landing() {
  return (
    <Layout>
      <Content>
        <Row className={styles.top} type="flex" justify="center">
          <Col {...wrapper}>
            <span className={styles.title}>Chingu</span>
            <Row type="flex" justify="center" align="middle">
              <Col md={24} lg={12}>
                <h1>
                  Practice Building Projects.
                  <br />
                  Become Job Ready.
                </h1>
                <p>
                  Practice the technical and soft skills required in a
                  professional software job through Chingu's 10-week Cohort
                  programs. 100% online and free!
                </p>
                <Button type="primary">Join For Free</Button>
              </Col>
              <Col md={24} lg={12}>
                <img src={Logo} alt="Chingu Logo" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={styles.middle} type="flex" justify="center">
          <Col {...wrapper}>
            <Row>
              <Col span={12}>
                <Title level={4} type="secondary">
                  What can chingu do for me?
                </Title>
                <Title className={styles.sectionTitle} level={3}>
                  Think you just need to know the right language to be a good
                  programmer?
                </Title>
                <Paragraph>
                  Whether you are new to the industry or a seasoned developer,
                  Chingu's 10-week Cohorts are designed to help you level up.
                  When Chingu places you in a team, you'll have opportunities
                  to:
                </Paragraph>
                <Paragraph>
                  <ul>
                    <li>Reinforce and strengthen your technical foundation</li>
                    <li>
                      Practice common "soft" skills (e.g. project management)
                    </li>
                    <li>Build projects in a team environment</li>
                  </ul>
                </Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={styles.bottom} type="flex" justify="center">
          <Col {...wrapper}>
            <Row>
              <Col span={12}>
                <Title level={4} type="secondary">
                  Minimum Requirements
                </Title>
                <Title className={styles.sectionTitle} level={3}>
                  Are you ready for Chingu?
                </Title>
                <Paragraph>
                  You'll need, at minimum, intermediate HTML/CSS and basic
                  JavaScript knowledge to qualify for Chingu Cohorts. Know more
                  than that? Chingu's got you covered: our Cohorts have three
                  different "tiers" separated by skill level so that you can
                  work in the tier you feel most comfortable in
                </Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Row className={styles.footer} type="flex" justify="center">
        <Col {...wrapper}>
          <Row>
            <Col span={12}>
              <p className={styles.footerTitle}>Contact Us</p>
              <a
                href="mailto:support@chingu.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@chingu.io
              </a>
            </Col>
            <Col span={6}>
              <p className={styles.footerTitle}>Company</p>
              <p>Our Team</p>
              <p>Privacy Policy</p>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
}
