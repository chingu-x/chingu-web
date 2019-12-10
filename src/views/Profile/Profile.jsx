import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import LoadingView from '../../components/LoadingView';
import { useAuth0 } from '../../contexts/auth';
import { Wrapper } from '../../components/Wrapper';
import { Title } from '../../components/Title';
import { Paragraph } from '../../components/Paragraph';
import {
  banner,
  bannerContent,
  userInfo,
  top,
  topText,
  heroImg,
  gettingStarted,
  resources,
  articles,
  articleCard,
  articleNumber,
  articleSubtitle,
  articleTitle,
  articleBody
} from './Profile.module.scss';
import GoatGlassesWebp from './GoatGlasses.webp';
import GoatGlassesPNG from './GoatGlasses.png';

const GET_EXISTING_APPLICATION = gql`
  query getExistingApplication {
    application {
      id
      status
      paymentStatus
    }
  }
`;

function ArticleCard({ subtitle, title, body, number, color, link }) {
  const cardContents = (
    <>
      {number && <span className={articleNumber}>{number}</span>}
      <Paragraph size="small" className={articleSubtitle}>
        {subtitle}
      </Paragraph>
      <Title level={3} className={articleTitle}>
        {title}
      </Title>
      <Paragraph className={articleBody}>{body}</Paragraph>
    </>
  );
  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={articleCard}
      style={{ borderTopColor: color || '#13e58c' }}
    >
      {cardContents}
    </a>
  ) : (
    <div className={articleCard} style={{ borderTopColor: color || '#13e58c' }}>
      {cardContents}
    </div>
  );
}

export default function Profile() {
  const { data: applicationData = {}, loading: loadingApplication } = useQuery(
    GET_EXISTING_APPLICATION,
    { fetchPolicy: 'network-only' }
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { user } = useAuth0();

  const { application } = applicationData;

  const isSolo = useMemo(() => {
    if (application && application.paymentStatus === 'NOT_REQUIRED') {
      return true;
    }

    return false;
  }, [application]);

  if (loadingApplication) {
    return <LoadingView />;
  }

  if (applicationData.application) {
    const { status, paymentStatus } = applicationData.application;

    if (
      !['NOT_REQUIRED', 'PAID'].includes(paymentStatus) &&
      status === 'PENDING_PAYMENT'
    ) {
      return <Redirect to="/payment" />;
    }
  } else {
    return <Redirect to="/apply" />;
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
              <Paragraph size="small">
                {isSolo ? 'Solo Project Path' : 'Voyage Project Path'}
              </Paragraph>
              {isSolo && (
                <Paragraph size="small">
                  Want to join a team? <Link to="/payment">Enroll here!</Link>
                </Paragraph>
              )}
            </>
          )}
        </div>
        <span style={{ flex: 1 }}></span>
        {/* <div className={dates}>
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
        </div> */}
      </Wrapper>
      <Wrapper>
        <div className={top}>
          <div className={topText}>
            <Title level={1}>
              {isSolo ? 'Hello there.' : "It's time to build"}
            </Title>
            {!isSolo && (
              <div className={heroImg}>
                <picture>
                  <source srcSet={GoatGlassesWebp} type="image/webp" />
                  <source srcSet={GoatGlassesPNG} type="image/png" />
                  <img src={GoatGlassesPNG} alt="Goat in glasses" />
                </picture>
              </div>
            )}
            <Title level={3}>What's next?</Title>
            {isSolo ? (
              <ol>
                <li>Review the 'Getting Started' resources below.</li>
                <li>
                  Within 48 hours we'll add you to your project Github repo
                  (more info in #2 below).
                </li>
                <li>
                  Join the Chingu Discord and add your intro to the
                  #add-intro-here channel
                </li>
              </ol>
            ) : (
              <ol>
                <li>Review the 'Getting Started' resources below.</li>
              </ol>
            )}
          </div>
        </div>
        <div className={gettingStarted}>
          <Title level={2}>Getting Started</Title>
          <div className={articles}>
            {isSolo ? (
              <>
                <ArticleCard
                  number={1}
                  subtitle="Read (3 minutes)"
                  title="How can Chingu help me and how does it work?"
                  body="This will tell you everything you need to know about the Solo project path."
                  color="#000"
                  link="https://solofree.docs.chingu.io/"
                />
                <ArticleCard
                  number={2}
                  subtitle="Read (4 minutes)"
                  title="What will I build first and when do I start?"
                  body="Build this and then we’ll give you something else to build."
                  color="#000"
                  link=" https://solofree.docs.chingu.io/solo/chinguproj"
                />
                <ArticleCard
                  number={3}
                  subtitle="Connect with like-mind coders"
                  title="Join the Chingu Community Discord"
                  body="Post your intro, read about other coders from around the world, and ask questions."
                  color="#000"
                  link="https://discord.gg/XfhUYqe"
                />
              </>
            ) : (
              <>
                <ArticleCard
                  number={1}
                  subtitle="Read (3 minutes)"
                  title="Chingu Voyage Teaser & Extra info"
                  body="This will give you an overview of the Chingu Voyage program to get you started."
                  color="#000"
                  link="https://medium.com/chingu/chingu-voyage-teaser-extra-info-1c9abc0472c7"
                />
                <ArticleCard
                  number={2}
                  subtitle="Requirements before the team project"
                  title="Pre-work Requirements: Submit a Solo Project"
                  body="To maintain quality, we require members to submit a completed project before being placed in a team."
                  color="#000"
                  link="https://voyage.docs.chingu.io/prework/howwork"
                />
                <ArticleCard
                  number={3}
                  subtitle="Connect with like-mind coders"
                  title="Join the Chingu Community Discord"
                  body="Post your intro, read about other coders from around the world, and ask questions."
                  color="#000"
                  link="https://discord.gg/XfhUYqe"
                />
              </>
            )}
          </div>
        </div>
        <div className={resources}>
          <Title level={2}>Resources</Title>
          <div className={articles}>
            <ArticleCard
              subtitle="Read"
              title="The Chingu Handbook"
              body="This is handbook breaks down everything in the Chingu program - from solo projects to team projects."
              link="https://docs.chingu.io"
            />
            <ArticleCard
              subtitle="Connect with like-mind coders"
              title="Need help with a coding question? Ask here."
              body="Note: you need to join the community Discord for this link to work (join @ #3 above)."
              link="https://discordapp.com/channels/330284646283608064/553100045466206208"
            />
            <ArticleCard
              subtitle="Read"
              title="Learn about Git workflow & Github"
              body="Everything you need to know about using Git & Github in Chingu."
              link="https://techres.docs.chingu.io/git/workflow"
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
}
