import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Button } from '../../components/Button';
import ApplyDuck from './assets/ApplyDuck.png';
// import ApplyFormIcon from "./assets/ApplyFormIcon.png";
import CertificateGraphic from './assets/CertificateGraphic.png';
import DeadlinesScreenshot from './assets/DeadlinesScreenshot.png';
import EnrolGraphic from './assets/EnrolGraphic.png';
import FourAnimals from './assets/FourAnimals.png';
import GithubWorkflowGraphic from './assets/GithubWorkflowGraphic.png';
import MakeFriends from './assets/MakeFriends.png';
import PreworkingScreenshot from './assets/PreworkingScreenshot.png';
import RacoonAndSoftSkills from './assets/RacoonAndSoftSkills.png';
import Racoon from './assets/Racoon.png';
import TeamScreenshot from './assets/TeamScreenshot.png';
import styles from './HowItWorks.module.scss';

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper contentAttributes={{ className: styles.intro }}>
        <div className={styles.introText}>
          <Title>Accelerate your learning with Chingu.</Title>
          <Paragraph>
            Chingu is more than just a structured path to being job ready - it's
            a belief in the power of global collaboration and lifelong learning
            through action. It's about people coming together to create impact
            in their own lives and those of others.
            <br />
            <br />
            If you get excited about learning, building, and collaborating, then
            this is right where you belong.
          </Paragraph>
        </div>
      </Wrapper>
      <Wrapper>
        <Title className={styles.centered} level={2}>
          How it all works
        </Title>
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>Apply to a Chingu Voyage</Title>
          <Paragraph>
            Not sure if you're ready to apply? Chingu is a 100% flexible. We
            take in members and optimally organize them into teams based on your
            time zones, skill levels, tech-stack and time commitment.
            <br />
            <br />
            <ul>
              <li>
                We form teams of coders of all levels (beginner to advanced)
              </li>
              <li>We form teams of coders from all timezones</li>
              <li>You choose the tech-stack you want to use</li>
              <li>Part-time & Full-time learners are accepted</li>
            </ul>
          </Paragraph>
        </div>
        <img src={ApplyDuck} alt="A sharp duck" />
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
        <div className={styles.sectionText}>
          <Title level={3}>Pre-work Onboarding Session</Title>
          <Paragraph>
            New members start by building a project from start to deployment in
            our 14 day onboarding session. This will introduce you to key skills
            and prepare you for your team project.
            <br />
            <br />
            <ul>
              <li>Join the community & coders with the same goals</li>
              <li>Build a solo project for your portfolio</li>
              <li>Determine your present skill level</li>
              <li>Prepare for the voyage program</li>
              <li>Use professional tools like Git & Github</li>
            </ul>
          </Paragraph>
        </div>
        <img src={PreworkingScreenshot} alt="A pre-work session screenshot" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>Make friends with developers around the world</Title>
          <Paragraph>
            The average Chingu cohort has coders from 60+ different countries.
            All of whom share your goals. Chingu is a place to meet new friends
            and grow your network locally and globally.
            <br />
            <br />
            <ul>
              <li>Meet developers from around the world</li>
              <li>Be surrounded by people who share your goals</li>
              <li>Be inspired and motivated by your peers</li>
            </ul>
          </Paragraph>
        </div>
        <img src={MakeFriends} alt="A cat and a dog hugging" />
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
        <div className={styles.sectionText}>
          <Title level={3}>You will be placed in a remote developer team</Title>
          <Paragraph>
            Once you have finished the Pre-Work project, you will be placed into
            a real-life remote developer team. You and your team will come
            together to plan your project, set up the tasks, and start coding!
            <br />
            <br />
            <ul>
              <li>Participate in weekly team standups</li>
              <li>Real-time messaging & async communication</li>
              <li>
                Participate in text / audio / video meetings (all depends on
                your preference as a team)
              </li>
            </ul>
          </Paragraph>
        </div>
        <img src={TeamScreenshot} alt="A team discussion screenshot" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>
            Learn to Collaborate and gain experience as a Modern Developer
          </Title>
          <Paragraph>
            Gain experience using collaboration tools that are used in modern
            tech companies. Real-time messaging, async communication, task
            management tools, audio / video meetings, etc.
            <br />
            <br />
            <ul>
              <li>Build & refine your Git & Github skills</li>
              <li>Learn how to manage code using Git & Github as a team</li>
              <li>Contribute fixes and features to a real project</li>
              <li>
                Participate in code reviews with teammates to ensure the quality
                of your project
              </li>
            </ul>
          </Paragraph>
        </div>
        <img src={FourAnimals} alt="Four animals" />
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
        <div className={styles.sectionText}>
          <Title level={3}>Github team workflow</Title>
          <Paragraph>
            Learn to manage your project's codebase in a team setting like a
            pro! This is one of the most valuable skills you will learn as a
            developer and will unlock a new world of collaboration
            opportunities.
            <br />
            <br />
            <ul>
              <li>Build and refine your Git skills</li>
              <li>
                Contribute fixes and features to the project using Git and
                Github
              </li>
              <li>
                Participate in code reviews with teammates to ensure the quality
                of your project
              </li>
            </ul>
          </Paragraph>
        </div>
        <img src={GithubWorkflowGraphic} alt="A github workflow" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>Thrive with Deadlines & Accountability</Title>
          <Paragraph>
            Just like in the workplace, you will have deadlines. Deadlines will
            push you out of your comfort zone and accelerate your learning.
            <br />
            <br />
            <ul>
              <li>Deadlines will make you actually finish your projects</li>
              <li>
                Our deadlines will give structure to your learning journey
              </li>
            </ul>
          </Paragraph>
        </div>
        <img
          src={DeadlinesScreenshot}
          alt="A deadline notification screenshot"
        />
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
        <div className={styles.sectionText}>
          <Title level={3}>Learn the soft skills you need</Title>
          <Paragraph>
            Gain experience using modern collaboration tools that are used in
            modern tech companies. Real-time messaging, async communication,
            audio / video meetings, and Git / Github.
            <br />
            <br />
            <ul>
              <li>Participate in weekly team standups</li>
              <li>Real-time messaging & async communication</li>
              <li>
                Participate in text / audio / video meetings (all depends on
                your preference as a team)
              </li>
              <li>Learn how to manage code using Git / Github as a team</li>
            </ul>
          </Paragraph>
        </div>
        <img src={RacoonAndSoftSkills} alt="A racoon with soft skills" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>Finish the project</Title>
          <Paragraph>
            We want to provide people opportunities to level-up that they
            couldn't easily get elsewhere. Our members have the opportunity to
            grow their careers with various leadership roles. Imagine these on
            your resumeL
            <br />
            <br />
            <ul>
              <li>
                Experience as a Project Manager for a team of remote developers
              </li>
              <li>Experience being a mentor to a team or individual</li>
              <li>
                Experience managing a program of hundreds of developers from
                across the world
              </li>
            </ul>
          </Paragraph>
        </div>
        <img src={Racoon} alt="A racoon" />
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
        <div className={styles.sectionText}>
          <Title level={3}>Earn a Certificate</Title>
          <Paragraph>
            Your Chingu experience will give you lots of material to use on your
            resume, portfolio, and in future coding interviews. You've built a
            project from start to finish in a remote developer team. You've had
            to overcome the obstacles to do this.
            <br />
            <br />
            <ul>
              <li>Talk about your experiences overcoming challenges</li>
              <li>
                Talk about working within a community and a remote developer
                team
              </li>
              <li>Talk about utilizing soft skills</li>
            </ul>
          </Paragraph>
        </div>
        <img src={CertificateGraphic} alt="A certificate" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>Enroll in another Team</Title>
          <Paragraph>
            Gain experience using modern collaboration tools that are used in
            modern tech companies. Real-time messaging, async communication,
            audio / video meetings, Git / Github.
            <br />
            <br />
            <ul>
              <li>Participate in weekly team standups</li>
              <li>Real-time messaging & async communication</li>
              <li>
                Participate in text / audio / video meetings (all depends on
                your preference as a team)
              </li>
              <li>Learn how to manage code using Git / Github as a team</li>
            </ul>
          </Paragraph>
        </div>
        <img src={EnrolGraphic} alt="An arrow pointing up" />
      </Wrapper>
      <Wrapper>
        <Title className={styles.centered} level={2}>
          OPTIONAL BONUS
        </Title>
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
        <div className={styles.sectionText}>
          <Title level={3}>Weekly Pair-programming Matching</Title>
          <Paragraph>
            Learn how to code with another developer and gain valuable
            collaboration experience. Learn how other coders approach challenges
            and how they think.
            <br />
            <br />
            <ul>
              <li>Meet a new coder every week to solve a coding challenge</li>
              <li>
                Take what you know to the next level by sharing your knowledge
                with others
              </li>
              <li>Learn new technologies and techniques from your peers</li>
            </ul>
          </Paragraph>
        </div>
        <img src={PreworkingScreenshot} alt="An arrow pointing up" />
      </Wrapper>
      <Wrapper className={styles.bottom}>
        <Title level={2}>Ready to level-up?</Title>
        {/* <Link to="/apply"> */}
        <Button
          type="primary"
          size="large"
          className={styles.bottomApply}
          data-token="89f71a471de6a750cfa385e1ba4ffd00"
          onClick={e => window.mjOpenPopin(e, e.target)}
        >
          Register Now
        </Button>
        {/* </Link> */}
      </Wrapper>
    </>
  );
}
