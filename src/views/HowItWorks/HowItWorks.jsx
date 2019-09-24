import React, { useEffect } from 'react';
import classnames from 'classnames';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Button } from '../../components/Button';
import ApplyAnimal from './assets/ApplyAnimal.png';
// import ApplyFormIcon from "./assets/ApplyFormIcon.png";
import CertificateGraphic from './assets/CertificateGraphic.png';
import DeadlinesScreenshot from './assets/DeadlinesScreenshot.png';
import EnrolGraphic from './assets/EnrolGraphic.png';
import FourAnimals from './assets/FourAnimals.png';
import GithubWorkflowGraphic from './assets/GithubWorkflowGraphic.png';
import MakeFriends from './assets/MakeFriends.png';
import PreworkingScreenshot from './assets/PreworkingScreenshot.png';
import RacoonAndSoftSkills from './assets/RacoonAndSoftSkills.png';
import TeamScreenshot from './assets/TeamScreenshot.png';
import PairProgrammingScreenshot from './assets/PairProgrammingScreenshot.png';
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
            Not sure if you're ready to apply? Chingu is a 100% flexible
            learning program. We take in members and optimally organize them
            into teams based on their time zones, skill levels, tech-stack and
            time commitment.
            <br />
            <br />
            {/* <ul> */}
            <b>We form teams of coders of all levels (beginner to advanced)</b>
            <br />
            <br />
            <b>We form teams of coders from all timezones</b>
            <br />
            <br />
            <b>You choose the tech-stack you want to use</b>
            <br />
            <br />
            <b>Part-time & Full-time learners are accepted</b>
            <br />
            <br />
            {/* </ul> */}
          </Paragraph>
        </div>
        <img src={ApplyAnimal} alt="A sharp duck" />
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
            {/* <ul> */}
            <b>Join the community & coders with the same goals</b>
            <br />
            <br />
            <b>Build a solo project for your portfolio</b>
            <br />
            <br />
            <b>Determine your present skill level</b>
            <br />
            <br />
            <b>Prepare for the voyage program</b>
            <br />
            <br />
            <b>Use professional tools like Git & Github</b>
            <br />
            <br />
            {/* </ul> */}
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
            {/* <ul> */}
            <b>Meet developers from around the world</b>
            <br />
            <br />
            <b>Be surrounded by people who share your goals</b>
            <br />
            <br />
            <b>Be inspired and motivated by your peers</b>
            <br />
            <br />
            {/* </ul> */}
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
            {/* <ul> */}
            <b>Meet your new developer team-mates</b>
            <br />
            <br />
            <b>Come together to choose a project and tech-stack</b>
            <br />
            <br />
            <b>
              Set up task management board and start coding on a real project
            </b>
            <br />
            <br />
            {/* </ul> */}
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
            {/* <ul> */}
            <b>Participate in weekly team standups</b>
            <br />
            <br />
            <b>Real-time messaging & async communication</b>
            <br />
            <br />
            <b>
              Participate in text / audio / video meetings (all depends on your
              preference as a team)
            </b>
            <br />
            <br />
            <b>Overcome real challenges developers face on the job</b>
            <br />
            <br />
            {/* </ul> */}
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
            {/* <ul> */}
            <b>Build and refine your Git skills</b>
            <br />
            <br />
            <b>
              Contribute fixes and features to the project using Git and Github
            </b>
            <br />
            <br />
            <b>
              Participate in code reviews with teammates to ensure the quality
              of your project
            </b>
            <br />
            <br />
            {/* </ul> */}
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
            {/* <ul> */}
            <b>Deadlines will make you actually finish your projects</b>
            <br />
            <br />
            <b>Our deadlines will give structure to your learning journey</b>
            <br />
            <br />
            <b>Get out of tutorial purgatory</b>
            <br />
            <br />
            {/* </ul> */}
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
            Improving your soft skills is one of the best investments you can
            make in your career. Technology is always changing, but the need for
            soft skills does not change. Linkedin found that 57% of senior
            leaders today say that soft skills are more important than hard
            skills.
            <br />
            <br />
            {/* <ul> */}
            <b>Learn how to communicate your ideas in a professional setting</b>
            <br />
            <br />
            <b>
              Collaborate with people with different mindsets and from different
              countries
            </b>
            <br />
            <br />
            <b>Improve your time-management skills</b>
            <br />
            <br />
            {/* </ul> */}
          </Paragraph>
        </div>
        <img src={RacoonAndSoftSkills} alt="A racoon with soft skills" />
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
            {/* <ul> */}
            <b>Talk about your experiences overcoming challenges</b>
            <br />
            <br />
            <b>
              Talk about working within a community and a remote developer team
            </b>
            <br />
            <br />
            <b>Talk about utilizing soft skills</b>
            <br />
            <br />
            {/* </ul> */}
          </Paragraph>
        </div>
        <img src={CertificateGraphic} alt="A certificate" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.section }}>
        <div className={styles.sectionText}>
          <Title level={3}>Enroll in another Team</Title>
          <Paragraph>
            Companies want people with more experience, and Chingu gives you
            that opportunity. We organize teams into three main tiers based on
            your current skill level. When you improve, you can join another
            Voyage in a higher tiered team!
            <br />
            <br />
            {/* <ul> */}
            <b>After you finish a project, you can join another Voyage</b>
            <br />
            <br />
            <b>Build upon your skills by doing another team project</b>
            <br />
            <br />
            <b>
              Gain months of experience by doing multiple Chingu Voyage team
              projects
            </b>
            <br />
            <br />
            {/* </ul> */}
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
            {/* <ul> */}
            <b>Meet a new coder every week to solve a coding challenge</b>
            <br />
            <br />
            <b>
              Take what you know to the next level by sharing your knowledge
              with others
            </b>
            <br />
            <br />
            <b>Learn new technologies and techniques from your peers</b>
            <br />
            <br />
            {/* </ul> */}
          </Paragraph>
        </div>
        <img
          src={PairProgrammingScreenshot}
          alt="A pair of programmers working together online"
        />
      </Wrapper>
      <Wrapper className={styles.bottom}>
        <Title level={2}>Ready to level-up?</Title>
        {/* <Link to="/apply"> */}
        <Button
          type="primary"
          size="large"
          className={styles.bottomApply}
          data-token="2a1b5e9798fad9e9a4d11011cd21e55f"
          onClick={e => window.mjOpenPopin(e, e.target)}
        >
          Register Now
        </Button>
        {/* </Link> */}
      </Wrapper>
    </>
  );
}
