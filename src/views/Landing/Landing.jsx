import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import { Button } from '../../components/Button';
import Wrapper from '../../components/Wrapper';
import RacoonWithLaptop from './assets/RacoonWithLaptop.png';
import SquigglyLine from './assets/SquigglyLine.png';
import RacoonYesPlease from './assets/RacoonYesPlease.png';
import TwoAnimalsTogether from './assets/TwoAnimalsTogether.png';
import ThreeAnimalsTogether from './assets/ThreeAnimalsTogether.png';
import ProcessStep1 from './assets/ProcessStep1.png';
import ProcessStep2 from './assets/ProcessStep2.png';
import ProcessStep3 from './assets/ProcessStep3.png';
import ProcessStep4 from './assets/ProcessStep4.png';
import ProcessStep5 from './assets/ProcessStep5.png';
import ProcessStep6 from './assets/ProcessStep6.png';
import JobbaticalProject from './assets/JobbaticalProject.png';
import BudgetBoardProject from './assets/BudgetBoardProject.png';
import VolunteerAppProject from './assets/VolunteerAppProject.png';
import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <>
      <Wrapper contentAttributes={{ className: styles.racoonSection }}>
        <div className={styles.racoonText}>
          <Title>
            Build projects in teams,
            <br />
            gain the skills you need.
          </Title>
          <Paragraph>
            Chingu is a remote 6-week program for web developers. You will build
            a project in a remote team and level-up with the technical and soft
            skills required in a professional software job.
          </Paragraph>
          <div className={styles.applyArea}>
            <Link to="/apply">
              <Button type="primary" size="large" className={styles.apply}>
                Apply to Chingu now
              </Button>
            </Link>
            <Paragraph size="small" className={styles.applySubtext}>
              (23,374 Github activity notifications
              <span role="img" aria-label="Fire emoji">
                🔥
              </span>
              from 560 Chingu teams in the past 5 months!)
            </Paragraph>
          </div>
        </div>
        <img src={RacoonWithLaptop} alt="Chingu RacoonWithLaptop" />
      </Wrapper>
      <Wrapper className={styles.features}>
        <Title level={3}>
          Level-up your career from{' '}
          <span className={styles.anywhereText}>
            anywhere
            <img src={SquigglyLine} tabIndex="-1" alt="Squiggly underline" />
          </span>
        </Title>
        <Paragraph className={styles.featuresSubtitle}>
          Here is what we do: put motivated people with similar goals together
          in a structured
          <br />
          environment that gives them the opportunity to level-up in a way they
          couldn't otherwise.
        </Paragraph>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <div className={styles.featureCardImgArea}>
              <img
                // This is just to account for the cows ear
                style={{ position: 'relative', left: -12 }}
                src={ThreeAnimalsTogether}
                alt="A goat, a duck, and a dog coding together"
              />
            </div>
            <Paragraph bold size="large">
              Build real projects in remote teams
            </Paragraph>
            <Paragraph>
              70% of entry-level developer jobs now ask for 3 years or more of
              experience. Chingu provides you a way to get that experience.
            </Paragraph>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureCardImgArea}>
              <img
                src={RacoonYesPlease}
                alt="Racoon holding up sign that says 'Yes, please'"
              />
            </div>
            <Paragraph bold size="large">
              Get out of tutorial purgatory, finish projects
            </Paragraph>
            <Paragraph>
              Sick of doing tutorial after tutorial with nothing to show for
              them? Chingu helps you deliver real projects.
            </Paragraph>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureCardImgArea}>
              <img
                src={TwoAnimalsTogether}
                alt="A cat and a dog hugging each other"
              />
            </div>
            <Paragraph bold size="large">
              Join a global community who share your goals
            </Paragraph>
            <Paragraph>
              So many people struggle to learn alone. Here you will be
              surrounded by friendly people from around the world who share your
              goals.
            </Paragraph>
          </div>
        </div>
      </Wrapper>
      <Wrapper className={styles.process}>
        <Title level={2}>The Chingu process</Title>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepImgArea}>
              <img src={ProcessStep1} alt="Apply icon" />
            </div>
            <div className={styles.stepText}>
              <Paragraph bold size="large" className={styles.stepTitle}>
                1. Apply
              </Paragraph>
              <Paragraph>
                Your learning adventure starts the moment you decide to join
                Chingu.
              </Paragraph>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImgArea}>
              <img src={ProcessStep2} alt="Apply icon" />
            </div>
            <div className={styles.stepText}>
              <Paragraph bold size="large" className={styles.stepTitle}>
                2. Build the pre-work project
              </Paragraph>
              <Paragraph>
                Finish a solo project to make sure you're prepared for the
                program.
              </Paragraph>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImgArea}>
              <img src={ProcessStep3} alt="Apply icon" />
            </div>
            <div className={styles.stepText}>
              <Paragraph bold size="large" className={styles.stepTitle}>
                3. Be placed in a team
              </Paragraph>
              <Paragraph>
                Get placed in a remote team of Chingus eager to learn.
              </Paragraph>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImgArea}>
              <img src={ProcessStep4} alt="Apply icon" />
            </div>
            <div className={styles.stepText}>
              <Paragraph bold size="large" className={styles.stepTitle}>
                4. Build, build, build
              </Paragraph>
              <Paragraph>
                Decide on a project and build it together. Practice critical
                team workflow.
              </Paragraph>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImgArea}>
              <img src={ProcessStep5} alt="Apply icon" />
            </div>
            <div className={styles.stepText}>
              <Paragraph bold size="large" className={styles.stepTitle}>
                5. Overcome obstacles
              </Paragraph>
              <Paragraph>
                Overcome obstacles real developers face. Level up as a human.
              </Paragraph>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepImgArea}>
              <img src={ProcessStep6} alt="Apply icon" />
            </div>
            <div className={styles.stepText}>
              <Paragraph bold size="large" className={styles.stepTitle}>
                6. Succeed & repeat
              </Paragraph>
              <Paragraph>
                Get a job, join another Voyage - or do both.
              </Paragraph>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className={styles.projects}>
        <Title level={2}>Real projects in Real teams</Title>
        <Paragraph size="large" className={styles.projectsSubtitle}>
          When you join Chingu, you will collaborate with others to build &
          launch real projects. We match learners from all skill levels, all
          timezones, and a variety of different tech stacks.
        </Paragraph>
        <div className={styles.projectExamples}>
          <div className={styles.project}>
            <img
              src={JobbaticalProject}
              alt="Jobbatical job listings project"
            />
            <Paragraph className={styles.projectTitle} bold size="large">
              Jobbatical Landing Page
            </Paragraph>
            <Paragraph>
              A job listings and job application app for working abroad.
              <br />
              <br />
              <b>Tier 1 (beginner)</b>
              <br />
              HTML, CSS, Flexbox, Javascript
            </Paragraph>
          </div>
          <div className={styles.project}>
            <img
              src={BudgetBoardProject}
              alt="BudgetBoard Chrome extension project"
            />
            <Paragraph className={styles.projectTitle} bold size="large">
              BudgetBoard Chrome Extension
            </Paragraph>
            <Paragraph>
              A finance app to add income & expense categories with individual
              items with graph rendering.
              <br />
              <br />
              <b>Tier 2 (intermediate)</b>
              <br />
              Javascript, SCSS, D3.js, Chrome Storage Sync
            </Paragraph>
          </div>
          <div className={styles.project}>
            <img src={VolunteerAppProject} alt="Volunteer manager project" />
            <Paragraph className={styles.projectTitle} bold size="large">
              Volunteer Manager App
            </Paragraph>
            <Paragraph>
              Helps people to recruit and manage volunteers for a non-profit
              project.
              <br />
              <br />
              <b>Tier 3 (advanced)</b>
              <br />
              MongoDB, Express, React / Redux, Node.js
            </Paragraph>
          </div>
        </div>
      </Wrapper>
      <Wrapper
        className={styles.numbers}
        contentAttributes={{ className: styles.numberBlocks }}
      >
        <div>
          <Paragraph size="large" bold>
            <span>8,570+</span>
            <br />
            Coders & Designers
          </Paragraph>
          <Paragraph>
            Chingu has helped thousands of people learning in-demand skills
            accelerate their learning through collaboration and
            project-building.
          </Paragraph>
        </div>
        <div>
          <Paragraph size="large" bold>
            <span>3,200+</span>
            <br />
            Pair-programming hours
          </Paragraph>
          <Paragraph>
            We love to optimally match learners from around the world. Whether
            in a team setting or for a one-time meeting to complete a challenge.
          </Paragraph>
        </div>
        <div>
          <Paragraph size="large" bold>
            <span>1,320+</span>
            <br />
            Developer Teams
          </Paragraph>
          <Paragraph>
            We launch remote developer teams from all skill levels, from all
            timezones, and from most web dev languages & frameworks.
          </Paragraph>
        </div>
      </Wrapper>
      <Wrapper className={styles.quotes}>
        <Title level={2}>
          Chingu has guided thousands of developers on learning adventures
        </Title>
        <Paragraph size="large">
          All tech learners run into the same problems. Endless tutorials, not
          enough finished projects, expensive coding bootcamps, unsure if you're
          making real progress, zero team experience. The good news? Chingu
          solves them.
        </Paragraph>
        <div className={styles.quoteBlocks}>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                I got my first developer job at the age of 35 largely due to the
                technical AND soft skills I gained through Chingu.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Eric Zumwalt, USA
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                I realized pretty quickly that I was learning more from the
                Voyage project than from everything I did in the entire rest of
                the year put together.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Sarah Schneider, USA
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                Thanks again for all that you do. I was about to look for a huge
                loan just to go to bootcamp to get this exact style of learning.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Tim Mondell, USA
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                Participating in the Chingu Cohorts bridged the gap in my
                experience that I needed to enter the tech industry. The remote
                team skills I learned here are the perfect polish to a brand new
                developer resumé!
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Vik Williamson, USA
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                The Chingu Cohorts have it all: a place to grow as a developer,
                receive support, meet people from different countries, and work
                on fun projects.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Alecia Hodges, USA
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                Chingu is an awesome and must-try platform for every programmer.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Debasree Samadder, India
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                Great Teams? Check. Great friendships? Check. Great Projects?
                Check. Awesome learning experience? Check. For me, Chingu is
                like the placement drive phase of Ivy League colleges I never
                had. Provided you rise up to the challenge of couse.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Tanmoy Panda, India
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                I am eternally grateful for the opportunity to participate and
                experience the Voyage and community. Chingu inspires and
                connects motivated developers who are passionate about and
                commited to learning and growing while building together in a
                fully distributed team environment.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              NAME_MISSING
            </Paragraph>
          </div>
          <div className={styles.quoteBlock}>
            <Paragraph size="large" bold>
              <q>
                Together my Chingu coding partner and I spent over 200 hours
                pair programming. Despite the long hours and lack of sleep at
                times, each session was enjoyable and left both parties having
                learned something.
              </q>
            </Paragraph>
            <Paragraph size="small" italic>
              Kathy Lambert, USA
            </Paragraph>
          </div>
        </div>
        <Title level={2}>Ready to level-up?</Title>
        <Link to="/apply">
          <Button type="primary" size="large" className={styles.bottomApply}>
            Apply now
          </Button>
        </Link>
      </Wrapper>
    </>
  );
}
