import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Layout, Typography, Row, Col, Button, Input, Radio } from 'antd';
import { useAuth0 } from '../../contexts/auth';
import Wrapper from '../../components/Wrapper';
import Footer from '../../components/Footer';
import CountrySelect from '../../components/CountrySelect';
import TimeZoneSelect from '../../components/TimeZoneSelect';
import styles from './Apply.module.scss';

const { Content } = Layout;
const { Title } = Typography;

const QUESTION_GAP = 45;

const CREATE_APPLICATION = gql`
  mutation createApplication($application: CohortApplicationInput!) {
    createCohortApplication(application: $application)
  }
`;

export default function Apply() {
  const { loginWithRedirect, loading, isAuthenticated } = useAuth0();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [desiredRole, setDesiredRole] = useState('DEVELOPER');
  const [countryCode, setCountryCode] = useState();
  const [city, setCity] = useState();
  const [timeZone, setTimeZone] = useState();
  const [isPreviousMember, setIsPreviousMember] = useState(false);
  const [excitedTo, setExcitedTo] = useState();
  const [gender, setGender] = useState();
  const [otherGender, setOtherGender] = useState();
  const [source, setSource] = useState();
  const [tier, setTier] = useState();

  const [
    createApplication,
    { loading: creatingApplication, error, data }
  ] = useMutation(CREATE_APPLICATION);

  const blockRadioStyle = {
    display: 'block',
    height: '32px',
    lineHeight: '32px'
  };

  async function submitApplication() {
    if (!loading && !isAuthenticated) {
      await loginWithRedirect({
        redirect_uri: `${window.location.origin}/`
      });
    } else {
      createApplication({
        variables: {
          application: {
            firstName,
            lastName,
            gender,
            otherGender,
            isPreviousMember,
            excitedTo,
            desiredRole,
            countryCode,
            city
          }
        }
      });
    }
  }

  return (
    <Layout>
      <Content>
        <Wrapper rowClassName={styles.top}>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Link to="/">
                <span className={styles.title}>Chingu</span>
              </Link>
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
                <Button className={styles.headerButton} type="primary" ghost>
                  Sign in
                </Button>
              </Link>
              <Link to="/apply">
                <Button className={styles.headerButton} type="primary" ghost>
                  Apply
                </Button>
              </Link>
            </Col>
          </Row>
          <Row
            style={{ marginTop: 75, marginBottom: 30 }}
            type="flex"
            justify="center"
            align="middle"
          >
            <Col xs={24}>
              <h1>
                Apply to join the{' '}
                <span style={{ color: '#15cf89' }}>October</span> cohort!
              </h1>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={12}>
              <Title className={styles.midTitle} level={3}>
                What's your name?
              </Title>
              <Row type="flex" gutter={16}>
                <Col span={12}>
                  <Input
                    className={styles.textInput}
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    autoFocus
                  />
                </Col>
                <Col span={12}>
                  <Input
                    className={styles.textInput}
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={12}>
              <Title className={styles.midTitle} level={3}>
                What's your gender?
              </Title>
              <Radio.Group
                name="gender"
                value={gender}
                onChange={e => setGender(e.target.value)}
              >
                <Radio style={blockRadioStyle} value="FEMALE">
                  Female
                </Radio>
                <Radio style={blockRadioStyle} value="MALE">
                  Male
                </Radio>
                <Radio style={blockRadioStyle} value="OTHER">
                  Other{' '}
                  {gender === 'OTHER' && (
                    <Input
                      placeholder="Please specify"
                      style={{ width: 159, marginLeft: 10 }}
                      value={otherGender}
                      onChange={e => setOtherGender(e.target.value)}
                    />
                  )}
                </Radio>
                <Radio style={blockRadioStyle} value="PREFER_NOT_TO_SAY">
                  Prefer not to say
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={14}>
              <Title className={styles.midTitle} level={3}>
                Have you been in a Chingu cohort before?
              </Title>
              <Radio.Group
                name="isMember"
                defaultValue={false}
                value={isPreviousMember}
                onChange={e => setIsPreviousMember(e.target.value)}
              >
                <Radio style={blockRadioStyle} value={true}>
                  Yes
                </Radio>
                <Radio style={blockRadioStyle} value={false}>
                  No
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={14}>
              <Title className={styles.midTitle} level={3}>
                What opportunity in Chingu most excites you?
              </Title>
              <Radio.Group
                name="opportunity"
                value={excitedTo}
                onChange={e => setExcitedTo(e.target.value)}
              >
                <Radio
                  style={blockRadioStyle}
                  value="NETWORK_WITH_SHARED_GOALS"
                >
                  To join a friendly group of learners who share my goals and
                  meet new friends
                </Radio>
                <Radio
                  style={blockRadioStyle}
                  value="GET_OUT_OF_TUTORIAL_PURGATORY"
                >
                  To get out of "tutorial purgatory" and actually build projects
                </Radio>
                <Radio style={blockRadioStyle} value="GAIN_EXPERIENCE">
                  To gain experience building projects in remote teams
                </Radio>
                <Radio style={blockRadioStyle} value="ACCELERATE_LEARNING">
                  To get out of my comfort zone and accelerate my learning
                </Radio>
                <Radio style={blockRadioStyle} value="OTHER">
                  Other{' '}
                  {excitedTo === 'OTHER' && (
                    <Input
                      placeholder="Please specify"
                      style={{ width: 400, marginLeft: 10 }}
                    />
                  )}
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={12}>
              <Title className={styles.midTitle} level={3}>
                What's would you like to join as?
              </Title>
              <Radio.Group
                name="role"
                defaultValue="DEVELOPER"
                value={desiredRole}
                onChange={e => setDesiredRole(e.target.value)}
              >
                <Radio style={blockRadioStyle} value="DEVELOPER">
                  Developer
                </Radio>
                <Radio style={blockRadioStyle} value="DESIGNER">
                  Designer
                </Radio>
                <Radio style={blockRadioStyle} value="DATA_SCIENTIST">
                  Data Scientist
                </Radio>
              </Radio.Group>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={12}>
              <Title className={styles.midTitle} level={3}>
                Where are you joining from?
              </Title>
              <Row type="flex" style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <CountrySelect
                    value={countryCode}
                    onChange={setCountryCode}
                  />
                </Col>
              </Row>
              <Row type="flex" style={{ marginBottom: 16 }}>
                <Col span={12}>
                  <Input
                    className={styles.textInput}
                    placeholder="City"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                  />
                </Col>
              </Row>
              <Row type="flex">
                <Col span={12}>
                  <TimeZoneSelect
                    countryCode={countryCode}
                    value={timeZone}
                    onChange={setTimeZone}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
            <Col className={styles.middleTop} span={12}>
              <Title className={styles.midTitle} level={3}>
                What's your email?
              </Title>
              <Row type="flex">
                <Col span={12}>
                  <Input className={styles.textInput} placeholder="Email" />
                </Col>
              </Row>
            </Col>
          </Row>
          {desiredRole === 'DEVELOPER' && (
            <>
              <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
                <Col className={styles.middleTop} span={12}>
                  <Title className={styles.midTitle} level={3}>
                    What's your Github username?
                  </Title>
                  <Row type="flex">
                    <Col span={12}>
                      <Input
                        className={styles.textInput}
                        placeholder="Github username"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
                <Col className={styles.middleTop} span={14}>
                  <Title className={styles.midTitle} level={3}>
                    Which tier and project type best suits you?
                  </Title>
                  <Radio.Group
                    name="tier"
                    value={tier}
                    onChange={e => setTier(e.target.value)}
                  >
                    <Radio style={blockRadioStyle} value="TIER_3">
                      Tier 3 - Advanced Projects - Data Visualization - Back-end
                      (FULL STACK)
                    </Radio>
                    <Radio style={blockRadioStyle} value="TIER_2">
                      Tier 2 - Intermediate Algorithms - Front-end Projects
                      (FRONT-END)
                    </Radio>
                    <Radio style={blockRadioStyle} value="TIER_1">
                      Tier 1 - HTML - Basic Javascript - Basic Algorithms
                      (LANDING PAGES)
                    </Radio>
                  </Radio.Group>
                </Col>
              </Row>
            </>
          )}
          {!isPreviousMember && (
            <Row type="flex" style={{ marginBottom: QUESTION_GAP }}>
              <Col className={styles.middleTop} span={12}>
                <Title className={styles.midTitle} level={3}>
                  Where did you hear about Chingu?
                </Title>
                <Radio.Group
                  name="source"
                  value={source}
                  onChange={e => setSource(e.target.value)}
                >
                  <Radio style={blockRadioStyle} value="MEDIUM">
                    On Medium
                  </Radio>
                  <Radio style={blockRadioStyle} value="PERSONAL_NETWORK">
                    From a friend/someone I know
                  </Radio>
                  <Radio style={blockRadioStyle} value="FREE_CODE_CAMP_FORUM">
                    The FreeCodeCamp Forum
                  </Radio>
                  <Radio style={blockRadioStyle} value="GOOGLE_SEARCH">
                    Google Search
                  </Radio>
                  <Radio style={blockRadioStyle} value="OTHER">
                    Other{' '}
                    {source === 'OTHER' && (
                      <Input
                        placeholder="Please specify"
                        style={{ width: 160, marginLeft: 10 }}
                      />
                    )}
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
          )}
          <Row type="flex">
            <Col className={styles.middleTop} span={12}>
              <Button
                type="primary"
                onClick={submitApplication}
                disabled={creatingApplication}
                ghost
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Wrapper>
      </Content>
      <Footer />
    </Layout>
  );
}
