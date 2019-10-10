import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../contexts/user';
import LoadingView from '../../components/LoadingView';
import { useAuth0 } from '../../contexts/auth';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import {
  banner,
  bannerContent,
  userInfo,
  dates,
  top,
  topText,
  heroImg,
  steps,
  stepsTitle
} from './Profile.module.scss';
import GoatGlassesWebp from './GoatGlasses.webp';
import GoatGlassesPNG from './GoatGlasses.png';

export default function Profile() {
  const { data: userData = {}, loading: loadingUser } = useUser();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useAuth0();

  if (loadingUser) {
    return <LoadingView />;
  }

  if (!loadingUser && userData.application) {
    const { status } = userData.application || {};

    if (status === 'PENDING_PAYMENT') {
      return <Redirect to="/payment" />;
    } else if (status !== 'PENDING_REVIEW') {
      return <Redirect to="/apply" />;
    }
  }

  return (
    <>
      <Wrapper
        className={banner}
        contentAttributes={{ className: bannerContent }}
      >
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
        <div className={userInfo}>
          {user && user.email && (
            <>
              <Paragraph size="large" bold>
                {user.email}
              </Paragraph>
              <Paragraph size="small">Voyage Member</Paragraph>
            </>
          )}
        </div>
        <span style={{ flex: 1 }}></span>
        <div className={dates}>
          <Paragraph>
            <span role="img" aria-label="calendar emoji">
              🗓️
            </span>{' '}
            <b>Pre-work start date</b>: October 16
          </Paragraph>
          <Paragraph>
            <span role="img" aria-label="calendar emoji">
              🗓️
            </span>{' '}
            <b>Voyage-13 start date</b>: November 4
          </Paragraph>
        </div>
      </Wrapper>
      <Wrapper>
        <div className={top}>
          <div className={topText}>
            <Title level={1}>
              Hello, hungry learner!
              <span role="img" aria-label="fire emoji">
                🔥
              </span>
              <br />
              Welcome to Chingu.
            </Title>
            <Paragraph>
              Are you ready to code, collaborate and level-up your skills?!
              <br />
              <br />
              See below for the next steps and all you need to know before we
              get started.
            </Paragraph>
          </div>
          <div className={heroImg}>
            <picture>
              <source srcSet={GoatGlassesWebp} type="image/webp" />
              <source srcSet={GoatGlassesPNG} type="image/png" />
              <img src={GoatGlassesPNG} alt="Goat in glasses" />
            </picture>
          </div>
        </div>
        <div className={steps}>
          <Title className={stepsTitle}>Next Steps</Title>
          <br />
          <ol>
            <li>
              <Title level={3}>
                Read the{' '}
                <a
                  href="https://medium.com/chingu/chingu-voyage-teaser-extra-info-1c9abc0472c7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chingu Voyage Preview & extra info
                </a>{' '}
                article
                <Paragraph size="small">(5 minutes)</Paragraph>
              </Title>

              <Paragraph>
                So you don’t freak out before we start. It includes gifs,
                overviews, past member articles/ project & experience
                walkthroughs.
              </Paragraph>
            </li>
            <li>
              <Title level={3}>
                Please check your email & whitelist chance@chingu.io
              </Title>
              <Paragraph>
                A big part of the Voyage experience is being accoutable to your
                goals, your project, and your team-mates. During the Voyage we
                have a mandatory Weekly-Checkin (~3 minutes), which we send
                every week via email. We use this both to help teams stay
                accountable and as a tool to support teams that need assistance.
                <br />
                <br />
                <a
                  href="https://www.lifewire.com/how-to-whitelist-email-addresses-4588603"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here is an article
                </a>{' '}
                that shows you how to do this.
              </Paragraph>
            </li>
            <li>
              <Title level={3}>Prepare for the Chingu Pre-work Session</Title>
              <Paragraph>
                Before each Voyage we run a short Pre-work session that lasts
                approximately two weeks. This is so that you can get comfortable
                with the communication tool we use (Discord), meet the
                community, and submit your Pre-work project.
                <br />
                <br />
                To maintain quality in teams, we require each member to submit a
                deployed project before they are added to a team in the Voyage
                session.
                <br />
                <br />
                We encourage everyone to build one of the Chingu Prework
                projects, but if you have a previous project you’d like to
                submit instead, you can do that as well. You can read more about
                it in the Chingu Handbook below.
              </Paragraph>
            </li>
            <li>
              <Title level={3}>
                Go through{' '}
                <a
                  href="https://docs.chingu.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the Chingu Handbook
                </a>
              </Title>
              <Paragraph>
                There’s a lot of useful material here. Below you can find the
                key sections to read before your session starts so you can be
                ready.
                <br />
                <br />
                A){' '}
                <a
                  href="https://techres.docs.chingu.io/git/workflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn and/or review how to use Git/Github{' '}
                </a>{' '}
                (trust me, this is a big one)
                <br />
                <br />
                B){' '}
                <a
                  href="https://voyage.docs.chingu.io/prep/getprepared/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here are the basic To-dos to get started & prepare
                </a>
                <br />
                <br />
                C){' '}
                <a
                  href="https://voyage.docs.chingu.io/prework/submitprework/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Submit your Prework project
                </a>
                <br />
                <br />D{' '}
                <a
                  href="https://chingu.docs.chingu.io/intro/schedule#cohort-13-schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Here is the schedule for your Voyage
                </a>
              </Paragraph>
            </li>
            <li>
              <Title level={3}>
                Mark the Prework & Voyage launch dates in your calendar
              </Title>
              <Paragraph>
                The dates are listed at the top of this screen. We’ll send you
                an email with your Pre-work invite link at 7pm Rome time at the
                above listed date.
                <br />
                <br />
                (1pm in New York, 10am in San Fransisco, 10:30pm in Mumbai, 2am
                in Tokyo, 5pm in Marrakech, 2pm in Rio de Janeiro)
                <br />
                <br />
                We’ll launch your Voyage team in the same chat application
                (Discord) as the Pre-work.
              </Paragraph>
            </li>
          </ol>
          <br />
          <Paragraph style={{ textAlign: 'center' }} size="large" bold>
            If you have any questions or feedback, feel free to reach out to us
            at{' '}
            <a
              href="mailto:support@chingu.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              support@chingu.io
            </a>
          </Paragraph>
          <br />
        </div>
      </Wrapper>
    </>
  );
}
