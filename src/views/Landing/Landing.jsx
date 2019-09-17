import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Layout, Typography, Row, Col, Button } from 'antd';
import Wrapper from '../../components/Wrapper';
import Footer from '../../components/Footer';
import RacoonWithLaptop from './RacoonWithLaptop.png';
import SquigglyLine from './SquigglyLine.png';
import RacoonYesPlease from './RacoonYesPlease.png';
import TwoAnimalsTogether from './TwoAnimalsTogether.png';
import ThreeAnimalsTogether from './ThreeAnimalsTogether.png';
import ProcessStep1 from './ProcessStep1.png';
import ProcessStep2 from './ProcessStep2.png';
import ProcessStep3 from './ProcessStep3.png';
import ProcessStep4 from './ProcessStep4.png';
import ProcessStep5 from './ProcessStep5.png';
import ProcessStep6 from './ProcessStep6.png';
import JobbaticalProject from './JobbaticalProject.png';
import BudgetBoardProject from './BudgetBoardProject.png';
import VolunteerAppProject from './VolunteerAppProject.png';
import styles from './Landing.module.scss';

const { Content } = Layout;
const { Title } = Typography;

export default function Landing() {
  return (
    <Layout style={{ backgroundColor: '#fff' }}>
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
                <Button
                  className={classnames(styles.headerButton, styles.applyBtn)}
                  type="default"
                >
                  Apply
                </Button>
              </Link>
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col md={24} lg={24}>
              <div className={styles.racoonSection}>
                <div className={styles.racoonText}>
                  <h1>
                    Build projects in teams,
                    <br />
                    gain the skills you need.
                  </h1>
                  <p>
                    Chingu is a remote 6-week program for web developers. You
                    will build a project in a remote team and level-up with the
                    technical and soft skills required in a professional
                    software job.
                  </p>
                  <div className={styles.applyArea}>
                    <Link to="/apply">
                      <Button type="primary" className={styles.apply}>
                        Apply to Chingu now
                      </Button>
                    </Link>
                    <p className={styles.applySubtext}>
                      (23,374 Github activity notifications
                      <span role="img" aria-label="Fire emoji">
                        🔥
                      </span>
                      from 560 Chingu teams in the past 5 months!)
                    </p>
                  </div>
                </div>
                <img src={RacoonWithLaptop} alt="Chingu RacoonWithLaptop" />
              </div>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper rowClassName={styles.middle}>
          <Row type="flex" justify="center">
            <Col className={styles.middleTop} span={24}>
              <Title className={styles.midTitle} level={3}>
                Level-up your career from{' '}
                <span className={styles.anywhereText}>
                  anywhere
                  <img
                    src={SquigglyLine}
                    tabIndex="-1"
                    alt="Squiggly underline"
                  />
                </span>
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
                <div className={styles.midCardImgArea}>
                  <img
                    style={{ position: 'relative', left: -12 }}
                    src={ThreeAnimalsTogether}
                    alt="A goat, a duck, and a dog coding together"
                  />
                </div>
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
                <div className={styles.midCardImgArea}>
                  <img
                    src={RacoonYesPlease}
                    alt="Racoon holding up sign that says 'Yes, please'"
                  />
                </div>
                <h4>Get out of tutorial purgatory, finish projects</h4>
                <p>
                  Sick of doing tutorial after tutorial with nothing to show for
                  them? Chingu helps you deliver real projects.
                </p>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.midCard}>
                <div className={styles.midCardImgArea}>
                  <img
                    src={TwoAnimalsTogether}
                    alt="A cat and a dog hugging each other"
                  />
                </div>
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
        <Wrapper rowClassName={styles.process}>
          <Row type="flex" justify="center">
            <Col span={24}>
              <Title className={styles.processTitle} level={2}>
                The Chingu process
              </Title>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepImgArea}>
                    <img src={ProcessStep1} alt="Apply icon" />
                  </div>
                  <div className={styles.stepText}>
                    <p className={styles.stepTitle}>1. Apply</p>
                    <p className={styles.stepDescription}>
                      Your learning adventure starts the moment you decide to
                      join Chingu.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepImgArea}>
                    <img src={ProcessStep2} alt="Apply icon" />
                  </div>
                  <div className={styles.stepText}>
                    <p className={styles.stepTitle}>
                      2. Build the pre-work project
                    </p>
                    <p className={styles.stepDescription}>
                      Finish a solo project to make sure you're prepared for the
                      program.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepImgArea}>
                    <img src={ProcessStep3} alt="Apply icon" />
                  </div>
                  <div className={styles.stepText}>
                    <p className={styles.stepTitle}>3. Be placed in a team</p>
                    <p className={styles.stepDescription}>
                      Get placed in a remote team of Chingus eager to learn.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepImgArea}>
                    <img src={ProcessStep4} alt="Apply icon" />
                  </div>
                  <div className={styles.stepText}>
                    <p className={styles.stepTitle}>4. Build, build, build</p>
                    <p className={styles.stepDescription}>
                      Decide on a project and build it together. Practice
                      critical team workflow.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepImgArea}>
                    <img src={ProcessStep5} alt="Apply icon" />
                  </div>
                  <div className={styles.stepText}>
                    <p className={styles.stepTitle}>5. Overcome obstacles</p>
                    <p className={styles.stepDescription}>
                      Overcome obstacles real developers face. Level up as a
                      human.
                    </p>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepImgArea}>
                    <img src={ProcessStep6} alt="Apply icon" />
                  </div>
                  <div className={styles.stepText}>
                    <p className={styles.stepTitle}>6. Succeed & repeat</p>
                    <p className={styles.stepDescription}>
                      Get a job, join another Voyage - or do both.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper rowClassName={styles.projects}>
          <Row type="flex" justify="center">
            <Col span={24}>
              <Title className={styles.projectsTitle} level={2}>
                Real projects in Real teams
              </Title>
              <p className={styles.projectsSubtitle}>
                When you join Chingu, you will collaborate with others to build
                & launch real projects. We match learners from all skill levels,
                all timezones, and a variety of different tech stacks.
              </p>
              <div className={styles.projectExamples}>
                <div className={styles.project}>
                  <img
                    src={JobbaticalProject}
                    alt="Jobbatical job listings project"
                  />
                  <h3>Jobbatical Landing Page</h3>
                  <p>
                    A job listings and job application app for working abroad.
                    <br />
                    <br />
                    <span>Tier 1 (beginner)</span>
                    <br />
                    HTML, CSS, Flexbox, Javascript
                  </p>
                </div>
                <div className={styles.project}>
                  <img
                    src={BudgetBoardProject}
                    alt="BudgetBoard Chrome extension project"
                  />
                  <h3>BudgetBoard Chrome Extension</h3>
                  <p>
                    A finance app to add income & expense categories with
                    individual items with graph rendering.
                    <br />
                    <br />
                    <span>Tier 2 (intermediate)</span>
                    <br />
                    Javascript, SCSS, D3.js, Chrome Storage Sync
                  </p>
                </div>
                <div className={styles.project}>
                  <img
                    src={VolunteerAppProject}
                    alt="Volunteer manager project"
                  />
                  <h3>Volunteer Manager App</h3>
                  <p>
                    Helps people to recruit and manage volunteers for a
                    non-profit project.
                    <br />
                    <br />
                    <span>Tier 3 (advanced)</span>
                    <br />
                    MongoDB, Express, React / Redux, Node.js
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper rowClassName={styles.numbers}>
          <Row type="flex" justify="center">
            <Col span={24}>
              <div className={styles.numberBlocks}>
                <div className={styles.numberBlock}>
                  <h3>
                    <span>8,570+</span>
                    <br />
                    Coders & Designers
                  </h3>
                  <p>
                    Chingu has helped thousands of people learning in-demand
                    skills accelerate their learning through collaboration and
                    project-building.
                  </p>
                </div>
                <div className={styles.numberBlock}>
                  <h3>
                    <span>3,200+</span>
                    <br />
                    Pair-programming hours
                  </h3>
                  <p>
                    We love to optimally match learners from around the world.
                    Whether in a team setting or for a one-time meeting to
                    complete a challenge.
                  </p>
                </div>
                <div className={styles.numberBlock}>
                  <h3>
                    <span>1,320+</span>
                    <br />
                    Developer Teams
                  </h3>
                  <p>
                    We launch remote developer teams from all skill levels, from
                    all timezones, and from most web dev languages & frameworks.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Wrapper>
        <Wrapper rowClassName={styles.quotes}>
          <Row type="flex" justify="center">
            <Col style={{ textAlign: 'center' }} span={20}>
              <Title className={styles.quotesTitle} level={2}>
                Chingu has guided thousands of developers on learning adventures
              </Title>
              <p className={styles.quotesSubtitle}>
                All tech learners run into the same problems. Endless tutorials,
                not enough finished projects, expensive coding bootcamps, unsure
                if you're making real progress, zero team experience. The good
                news? Chingu solves them.
              </p>
              <div className={styles.quoteBlocks}>
                <div className={styles.quoteBlock}>
                  <p>
                    "I got my first developer job at the age of 35 largely due
                    to the technical AND soft skills I gained through Chingu."
                  </p>
                  <p className={styles.quoteAttribution}>Eric Zumwalt, USA</p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "I realized pretty quickly that I was learning more from the
                    Voyage project than from everything I did in the entire rest
                    of the year put together."
                  </p>
                  <p className={styles.quoteAttribution}>
                    Sarah Schneider, USA
                  </p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "Thanks again for all that you do. I was about to look for a
                    huge loan just to go to bootcamp to get this exact style of
                    learning."
                  </p>
                  <p className={styles.quoteAttribution}>Tim Mondell, USA</p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "Participating in the Chingu Cohorts bridged the gap in my
                    experience that I needed to enter the tech industry. The
                    remote team skills I learned here are the perfect polish to
                    a brand new developer resumé!"
                  </p>
                  <p className={styles.quoteAttribution}>Vik Williamson, USA</p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "The Chingu Cohorts have it all: a place to grow as a
                    developer, receive support, meet people from different
                    countries, and work on fun projects."
                  </p>
                  <p className={styles.quoteAttribution}>Alecia Hodges, USA</p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "Chingu is an awesome and must-try platform for every
                    programmer."
                  </p>
                  <p className={styles.quoteAttribution}>
                    Debasree Samadder, India
                  </p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "Great Teams? Check. Great friendships? Check. Great
                    Projects? Check. Awesome learning experience? Check. For me,
                    Chingu is like the placement drive phase of Ivy League
                    colleges I never had. Provided you rise up to the challenge
                    of couse."
                  </p>
                  <p className={styles.quoteAttribution}>Tanmoy Panda, India</p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "I am eternally grateful for the opportunity to participate
                    and experience the Voyage and community. Chingu inspires and
                    connects motivated developers who are passionate about and
                    commited to learning and growing while building together in
                    a fully distributed team environment."
                  </p>
                  <p className={styles.quoteAttribution}>NAME_MISSING</p>
                </div>
                <div className={styles.quoteBlock}>
                  <p>
                    "Together my Chingu coding partner and I spent over 200
                    hours pair programming. Despite the long hours and lack of
                    sleep at times, each session was enjoyable and left both
                    parties having learned something."
                  </p>
                  <p className={styles.quoteAttribution}>Kathy Lambert, USA</p>
                </div>
              </div>
              <h3>Ready to level-up?</h3>
              <Link
                style={{ display: 'inline-block', marginTop: 15 }}
                to="/apply"
              >
                <Button type="default" className={styles.apply}>
                  Apply now
                </Button>
              </Link>
            </Col>
          </Row>
        </Wrapper>
      </Content>
      <Footer />
    </Layout>
  );
}
