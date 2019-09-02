import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Button } from 'antd';
import Wrapper from '../../components/Wrapper';
import Logo from './Logo.png';
import styles from './Landing.module.scss';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Landing() {
  return (
    <Layout>
      <Content>
        <Wrapper rowClassName={styles.top}>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <span className={styles.title}>Chingu</span>
            </Col>
            <Col>
              <Link to="/howitworks">
                <Button className={styles.headerLink} type="link">
                  How it works
                </Button>
              </Link>
              <Link to="/pricing">
                <Button className={styles.headerLink} type="link">
                  Pricing
                </Button>
              </Link>
              <Link to="/faq">
                <Button className={styles.headerLink} type="link">
                  FAQ
                </Button>
              </Link>
              <Link to="/signin">
                <Button className={styles.headerButton} type="default" ghost>
                  Sign in
                </Button>
              </Link>
              <Link to="/apply">
                <Button className={styles.headerButton} type="default" ghost>
                  Apply
                </Button>
              </Link>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col md={24} lg={12}>
              <h1>
                Build projects in teams,
                <br />
                gain the skills you need.
              </h1>
              <p>
                Chingu is a wild 6-week program for web developers. You will
                build a project in a remote team and level-up with the technical
                and soft skills required in a professional software job.
              </p>
              <Link to="/apply">
                <Button type="primary" className={styles.apply}>
                  Apply now
                </Button>
              </Link>
              <p className={styles.applySubtext}>
                (23.364 Github activity notifications{' '}
                <span role="img" aria-label="Fire emoji">
                  🔥
                </span>{' '}
                from 560 Chingu teams in the past 5 months!)
              </p>
            </Col>
            <Col md={24} lg={12}>
              <img src={Logo} alt="Chingu Logo" />
            </Col>
          </Row>
        </Wrapper>
        {/* <Wrapper rowClassName={styles.middle}>
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
                Chingu's 10-week Cohorts are designed to help you level up. When
                Chingu places you in a team, you'll have opportunities to:
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
        </Wrapper> */}
        <Wrapper rowClassName={styles.middle}>
          <Row type="flex" justify="center">
            <Col className={styles.middleTop} span={24}>
              {/* <Title level={4} type="secondary">
                Minimum Requirements
              </Title>
              <Title className={styles.sectionTitle} level={3}>
                Are you ready for Chingu?
              </Title>
              <Paragraph>
                You'll need, at minimum, intermediate HTML/CSS and basic
                JavaScript knowledge to qualify for Chingu Cohorts. Know more
                than that? Chingu's got you covered: our Cohorts have three
                different "tiers" separated by skill level so that you can work
                in the tier you feel most comfortable in
              </Paragraph> */}
              <Title className={styles.midTitle} level={3}>
                Go on a remote coding adventure, level-up your career
              </Title>
              <p className={styles.midSubtitle}>
                Here is what we do: put motivated people with similar goals
                together in a structured
                <br />
                environment that gives them the opportunity to level-up in a way
                they couldn't otherwise.
              </p>
            </Col>
            <Col span={8}>
              <div className={styles.midCard}>
                <h4>Build real projects in remote teams</h4>
                <p>
                  70% of entry-level developer jobs now ask for 3 years or more
                  of experience. Chingu provides you a way to get that
                  experience.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.midCard}>
                <h4>Get out of tutorial purgatory, finish projects</h4>
                <p>
                  Sick of doing tutorial after tutorial with nothing to show for
                  them? Chingu helps you deliver real projects.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.midCard}>
                <h4>Join a global community who share your goals</h4>
                <p>
                  So many people struggle to learn alone. Here you will be
                  surrounded by friendly people from around the world who share
                  your goals.
                </p>
              </div>
            </Col>
          </Row>
        </Wrapper>
      </Content>
      <Row className={styles.footer} type="flex" justify="center">
        <Col span={24}>
          <Wrapper>
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
          </Wrapper>
        </Col>
      </Row>
    </Layout>
  );
}
