import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Button } from '../../components/Button';
import { LandingViewChinguProcessStep } from '../../components/LandingViewChinguProcessStep';
import { OfferCard } from '../../components/OfferCard';
import ApplyAnimal from './assets/ApplyAnimal.png';
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
import ProcessStep1 from '../Landing/assets/ProcessStep1.png';
import ProcessStep2 from '../Landing/assets/ProcessStep2.png';
import ProcessStep3 from '../Landing/assets/ProcessStep3.png';
import ProcessStep4 from '../Landing/assets/ProcessStep4.png';
import ProcessStep5 from '../Landing/assets/ProcessStep5.png';
import ProcessStep6 from '../Landing/assets/ProcessStep6.png';

const currencyFormatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'USD'
});

const FORMATTED_BOOTCAMP_COST = currencyFormatter.format(13000);
const VOYAGE_COHORT_COST = currencyFormatter.format(29);
const JOB_READY_PATH_COST = currencyFormatter.format(129);

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Wrapper contentAttributes={{ className: styles.intro }}>
        <div className={styles.introText}>
          <Title level={1}>Voyage Program</Title>
          <Paragraph>
            The Chingu Voyage is a remote 6-week program for web developers. You
            will build a project in a remote team and level-up with the
            technical and soft skills required in a professional software job.
          </Paragraph>
          <div className={styles.enrollArea}>
            <Link to="/apply">
              <Button type="primary" size="large">
                Enroll in Chingu
              </Button>
            </Link>
          </div>
        </div>
        <img src={ApplyAnimal} alt="A deadline notification screenshot" />
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.experience }}>
        <Title level={2}>The Chingu Team Experience</Title>
        <Paragraph>
          You will leave Chingu with portfolio projects, confidence from
          experience, and the soft skills that the 21st century world needs.
        </Paragraph>
        <div className={styles.experienceList}>
          <div style={{ flex: 1 }}>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A laptop emoji">
                💻
              </span>
              <Paragraph>
                <b>Build with other software developers in a team</b> & gain
                vital developer experience.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A party popper emoji">
                🎉
              </span>
              <Paragraph>
                <b>Be pushed outside your comfort zone</b> and make progress
                beyond what you would on your own.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A brain emoji">
                🧠
              </span>
              <Paragraph>
                <b>Gain in-demand soft skills</b> that all companies in the 21st
                century need and look for.
              </Paragraph>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A laptop emoji">
                💯
              </span>
              <Paragraph>
                <b>Finally get out of Tutorial Purgatory</b> and solidify your
                skills with real projects.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A party popper emoji">
                🌍
              </span>
              <Paragraph>
                <b>Collaborate with like-minded coders</b> who share your goals
                from around the world.
              </Paragraph>
            </div>
            <div className={styles.experienceItem}>
              <span role="img" aria-label="A brain emoji">
                💎
              </span>
              <Paragraph>
                <b>Boost your portfolio with finished projects</b> and earn
                Completion Certificates.
              </Paragraph>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className={styles.process}>
        <Title level={2}>The Chingu process</Title>
        <div className={styles.steps}>
          <LandingViewChinguProcessStep
            icon={ProcessStep1}
            iconAlt="Form icon"
            title="1. Apply"
            description="Your learning adventure starts the moment you decide to join Chingu."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep2}
            iconAlt="Toolset icon"
            title="2. DO A PREWORK PLACEMENT SESSION"
            description="Finish or submit a project to make sure you’re prepared for the program."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep3}
            iconAlt="Connections icon"
            title="3. Be placed in a team"
            description="Get placed in a remote team of Chingus eager to learn."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep4}
            iconAlt="Collaboration icon"
            title="4. Build, build, build"
            description="Decide on a project and build it together. Practice critical team workflow."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep5}
            iconAlt="Thinking icon"
            title="5. Overcome obstacles"
            description="Overcome obstacles real developers face. Level up as a human."
          />
          <LandingViewChinguProcessStep
            icon={ProcessStep6}
            iconAlt="Application icon"
            title="6. Succeed & repeat"
            description="Get a job, join another Voyage - or do both."
          />
        </div>
      </Wrapper>
      <Wrapper
        contentAttributes={{
          className: classnames(styles.section, styles.flipped)
        }}
      >
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
        <img src={TeamScreenshot} alt="A team discussion screenshot" />
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
          <Title level={3}>Use real-world coding tools</Title>
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
          <Title level={3}>
            Do Weekly Pair-programming Matching (optional)
          </Title>
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
      <Wrapper className={styles.dates}>
        <Title level={2}>Upcoming Voyage Sessions</Title>
        <Paragraph>We launch teams at the start of every month.</Paragraph>
        <Paragraph size="large">
          Voyage 15 starts <b>January 6th</b>
          <br />
          Voyage 16 starts <b>February 2nd</b>
        </Paragraph>
      </Wrapper>
      <Wrapper contentAttributes={{ className: styles.pricing }}>
        <Title level={2}>Pricing</Title>
        <Paragraph className={styles.pricingSubtitle} size="large">
          Chingu offers you several core features of a traditional coding
          bootcamp, but for a fraction of the cost.
        </Paragraph>
        <Title level={3}>
          Goodbye ${FORMATTED_BOOTCAMP_COST} coding bootcamps.
          <br />
          Save thousands with Chingu.
        </Title>
        <div className={styles.offers}>
          <OfferCard
            title="Voyage Cohort"
            subtitle="For those who want to level-up."
            price={VOYAGE_COHORT_COST}
            features={[
              'Matched with a remote developer team',
              '6 weeks of team developer experience',
              '1 team developer project for your portfolio',
              '6 pair-programming matches',
              'Completion Certificate',
              'Connect with a community of learners who share your goal',
              'Get out of tutorial purgatory'
            ]}
          />
          <OfferCard
            title="Job-Ready Path"
            subtitle="For those who wants to get a job within a year."
            price={JOB_READY_PATH_COST}
            features={[
              'Join all Voyage sessions in a year (up to 6)',
              '1 year of developer experience for your resume',
              '6 team projects in your portfolio',
              '50 pair-programming matches',
              'Completion Certificates'
            ]}
          />
        </div>
        <Title level={1}>Frequently asked questions</Title>
        <div className={styles.question}>
          <Paragraph size="large" bold>
            How can I know I’m ready? What are the minimum requirements to join?
          </Paragraph>
          <Paragraph>
            You’ll need, at minimum, basic HTML / CSS and Javascript skills to
            qualify for a Chingu Voyage. Know more than that? Chingu has got you
            covered: our Voyages have three different “tiers” separated by skill
            level (beginners, intermediate, advanced) so you can work in the
            Tier you are most comfortable in. We also run a Pre-work session
            once a month where members can discover what Tier they best fit in.
            <br />
            <br />
            TL;DR - We encourage people at any level (including beginners) to
            join, as our Pre-work program was designed to inspire / help people
            gain the skills they need to be eligible to join.{' '}
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            Can I do many Chingu Voyage programs and level up my skills in each
            one?
          </Paragraph>
          <Paragraph>
            Yes, Chingu was designed for this. Companies want to hire
            experienced developers. If you successfully completed 4 Voyages,
            you’d have a robust portfolio, technical / soft skills, and 6 months
            of developer experience to apply to jobs with.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            Can I get a job from doing Chingu Voyages?
          </Paragraph>
          <Paragraph>
            Yes, every week we see members getting a job. Members who have
            successfully completed 3 Voyages at the tier-3 level generally are
            job ready. They have gained the skills necessary to build multiple
            full-stack applications, have at least 4.5 months of experience
            working on real projects in real teams, and understand the
            importance of soft skills.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            I just finished a coding bootcamp and want to get more experience?
            Is Chingu for me?
          </Paragraph>
          <Paragraph>
            Yes. Coding bootcamp instructors / career mentors from many of the
            major bootcamps have referred their graduates to Chingu to help them
            get a job.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            How can I know if I’m ready for the Voyage program?
          </Paragraph>
          <Paragraph>
            First, are you committed to your learning goals? A Chingu Voyage is
            an experience that will get you out of your comfort zone and
            accelerate your learning. If you aren’t committed, you’ll waste your
            time and your team-mates.
            <br />
            <br />
            As for skill level, every new member has to complete a Pre-work
            project to be accepted to ensure they are ready. We run a 2 week
            pre-work session every month so you you find out if you are ready
            now. If not, you will be pushed to level-up your skills in the
            Pre-work to be ready for the next one. :)
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            What happens if I don’t finish the Pre-work project or pass the
            qualifications?
          </Paragraph>
          <Paragraph>
            No worries, we run Voyages every month so if you don’t pass the
            Pre-work you can keep learning and be ready for the next one.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            How much time do I have to commit?
          </Paragraph>
          <Paragraph>
            We organize teams based on the people who join, and you’ll be
            matched with people who have similar commitment levels to you. That
            being said, we consider part-time to be around 15 hours a week and
            full-time to be 25 or more hours a week.
            <br />
            <br />
            For you to get the full benefits, Chingu must be a priority during
            the duration of the Voyage program.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            Is the Voyage okay for Beginners?
          </Paragraph>
          <Paragraph>
            Yes. Even if you are not ready now, you will be after you gain the
            skills necessary to build the Pre-work project.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            What is the Pre-work session and Pre-work project?
          </Paragraph>
          <Paragraph>
            The Pre-work session is where new members first join the Chingu
            community, find out which Tier they best fit in, and build a project
            from start to finish to ensure they are ready for the team Voyage
            project. The Pre-work projects are organized by Tier and typically
            to clone an existing website or app. When you join the Pre-work
            you’ll be able to decide which project (and tier) best suits your
            current skill level.
          </Paragraph>
        </div>

        <div className={styles.question}>
          <Paragraph size="large" bold>
            What if I have more questions?
          </Paragraph>
          <Paragraph>
            We’d be happy to{' '}
            <a
              className={styles.mailLink}
              href="mailto:support@chingu.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button type="link-primary">answer them.</Button>
            </a>
          </Paragraph>
        </div>
      </Wrapper>
      <Wrapper className={styles.bottom}>
        <Title level={2}>Ready to level-up?</Title>
        <Link to="/apply">
          <Button type="primary" size="large" className={styles.bottomApply}>
            Apply Now
          </Button>
        </Link>
      </Wrapper>
    </>
  );
}
