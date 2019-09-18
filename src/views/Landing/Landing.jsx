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

function FeatureCard({ img, imgAlt, imgStyle, title, body }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureCardImgArea}>
        <img src={img} alt={imgAlt} style={imgStyle} />
      </div>
      <Paragraph bold size="large">
        {title}
      </Paragraph>
      <Paragraph>{body}</Paragraph>
    </div>
  );
}

function ChinguProcessStep({ icon, iconAlt, title, description }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepImgArea}>
        <img src={icon} alt={iconAlt} />
      </div>
      <div className={styles.stepText}>
        <Paragraph bold size="large" className={styles.stepTitle}>
          {title}
        </Paragraph>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}

function ExampleProject({ img, imgAlt, title, description, tier, tech }) {
  return (
    <div className={styles.project}>
      <img src={img} alt={imgAlt} />
      <Paragraph className={styles.projectTitle} bold size="large">
        {title}
      </Paragraph>
      <Paragraph>
        {description}
        <br />
        <br />
        <b>{tier}</b>
        <br />
        {tech}
      </Paragraph>
    </div>
  );
}

function NumberStat({ number, subject, description }) {
  return (
    <div>
      <Paragraph size="large" bold>
        <span>{new Intl.NumberFormat().format(number)}+</span>
        <br />
        {subject}
      </Paragraph>
      <Paragraph>{description}</Paragraph>
    </div>
  );
}

function QuoteBlock({ quote, author, location }) {
  return (
    <div className={styles.quoteBlock}>
      <Paragraph size="large" bold>
        <q>{quote}</q>
      </Paragraph>
      <Paragraph size="small" italic>
        {author}, {location}
      </Paragraph>
    </div>
  );
}

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
          <FeatureCard
            img={ThreeAnimalsTogether}
            imgAlt="A goat, a duck, and a dog coding together"
            imgStyle={{ position: 'relative', left: -12 }}
            title="Build real projects in remote teams"
            body="70% of entry-level developer jobs now ask for 3 years or more of experience. Chingu provides you a way to get that experience."
          />
          <FeatureCard
            img={RacoonYesPlease}
            imgAlt="Racoon holding up sign that says 'Yes, please'"
            title="Get out of tutorial purgatory, finish projects"
            body="Sick of doing tutorial after tutorial with nothing to show for
            them? Chingu helps you deliver real projects."
          />
          <FeatureCard
            img={TwoAnimalsTogether}
            imgAlt="A cat and a dog hugging each other"
            title="Join a global community who share your goals"
            body="So many people struggle to learn alone. Here you will be
            surrounded by friendly people from around the world who share your
            goals."
          />
        </div>
      </Wrapper>
      <Wrapper className={styles.process}>
        <Title level={2}>The Chingu process</Title>
        <div className={styles.steps}>
          <ChinguProcessStep
            icon={ProcessStep1}
            iconAlt="Form icon"
            title="1. Apply"
            description="Your learning adventure starts the moment you decide to join Chingu."
          />
          <ChinguProcessStep
            icon={ProcessStep2}
            iconAlt="Toolset icon"
            title="2. Build the pre-work project"
            description="Finish a solo project to make sure you're prepared for the program."
          />
          <ChinguProcessStep
            icon={ProcessStep3}
            iconAlt="Connections icon"
            title="3. Be placed in a team"
            description="Get placed in a remote team of Chingus eager to learn."
          />
          <ChinguProcessStep
            icon={ProcessStep4}
            iconAlt="Collaboration icon"
            title="4. Build, build, build"
            description="Decide on a project and build it together. Practice critical team workflow."
          />
          <ChinguProcessStep
            icon={ProcessStep5}
            iconAlt="Thinking icon"
            title="5. Overcome obstacles"
            description="Overcome obstacles real developers face. Level up as a human."
          />
          <ChinguProcessStep
            icon={ProcessStep6}
            iconAlt="Application icon"
            title="6. Succeed & repeat"
            description="Get a job, join another Voyage - or do both."
          />
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
          <ExampleProject
            img={JobbaticalProject}
            imgAlt="Jobbatical job listings project"
            title="Jobbatical Landing Page"
            description="A job listings and job application app for working abroad."
            tier="Tier 1 (beginner)"
            tech="HTML, CSS, Flexbox, Javascript"
          />
          <ExampleProject
            img={BudgetBoardProject}
            imgAlt="BudgetBoard Chrome extension project"
            title="BudgetBoard Chrome Extension"
            description="A finance app to add income & expense categories with individual items with graph rendering."
            tier="Tier 2 (intermediate)"
            tech="Javascript, SCSS, D3.js, Chrome Storage Sync"
          />
          <ExampleProject
            img={VolunteerAppProject}
            imgAlt="Volunteer manager project"
            title="Volunteer Manager App"
            description="Helps people to recruit and manage volunteers for a non-profit project."
            tier="Tier 3 (advanced)"
            tech="MongoDB, React / Redux, Node.js"
          />
        </div>
      </Wrapper>
      <Wrapper
        className={styles.numbers}
        contentAttributes={{ className: styles.numberBlocks }}
      >
        <NumberStat
          number={8570}
          subject="Coders & Designers"
          description="Chingu has helped thousands of people learning in-demand skills accelerate their learning through collaboration and project-building."
        />
        <NumberStat
          number={3200}
          subject="Pair-programming hours"
          description="We love to optimally match learners from around the world. Whether in a team setting or for a one-time meeting to complete a challenge."
        />
        <NumberStat
          number={1320}
          subject="Developer Teams"
          description="We launch remote developer teams from all skill levels, from all timezones, and from most web dev languages & frameworks."
        />
      </Wrapper>
      <Wrapper className={styles.quotes}>
        <Title level={2}>
          Chingu has guided thousands of developers on learning adventures
        </Title>
        <Paragraph>
          All tech learners run into the same problems. Endless tutorials, not
          enough finished projects, expensive coding bootcamps, unsure if you're
          making real progress, zero team experience.
          <br />
          The good news? Chingu solves them.
        </Paragraph>
        <div className={styles.quoteBlocks}>
          <QuoteBlock
            quote="I got my first developer job at the age of 35 largely due to the technical AND soft skills I gained through Chingu."
            author="Eric Zumwalt"
            location="USA"
          />
          <QuoteBlock
            quote="I realized pretty quickly that I was learning more from the
            Voyage project than from everything I did in the entire rest of
            the year put together."
            author="Sarah Schneider"
            location="USA"
          />
          <QuoteBlock
            quote="Thanks again for all that you do. I was about to look for a huge loan just to go to bootcamp to get this exact style of learning."
            author="Tim Mondell"
            location="USA"
          />
          <QuoteBlock
            quote="Participating in the Chingu Cohorts bridged the gap in my experience that I needed to enter the tech industry. The remote team skills I learned here are the perfect polish to a brand new developer resumé!"
            author="Vik Williamson"
            location="USA"
          />
          <QuoteBlock
            quote="The Chingu Cohorts have it all: a place to grow as a developer, receive support, meet people from different countries, and work on fun projects."
            author="Alecia Hodges"
            location="USA"
          />
          <QuoteBlock
            quote="Chingu is an awesome and must-try platform for every programmer."
            author="Debasree Samadder"
            location="India"
          />
          <QuoteBlock
            quote="Great Teams? Check. Great friendships? Check. Great Projects? Check. Awesome learning experience? Check. For me, Chingu is like the placement drive phase of Ivy League colleges I never had. Provided you rise up to the challenge of couse."
            author="Tanmoy Panda"
            location="India"
          />
          <QuoteBlock
            quote="I am eternally grateful for the opportunity to participate and experience the Voyage and community. Chingu inspires and connects motivated developers who are passionate about and commited to learning and growing while building together in a fully distributed team environment."
            author="NAME_MISSING"
            location="LOCATION_MISSING"
          />
          <QuoteBlock
            quote="Together my Chingu coding partner and I spent over 200 hours pair programming. Despite the long hours and lack of sleep at times, each session was enjoyable and left both parties having learned something."
            author="Kathy Lambert"
            location="USA"
          />
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
