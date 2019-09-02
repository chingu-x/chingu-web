import React from 'react';
import { Typography } from 'antd';
import { paths } from '../contexts/voyageSignUp';
import VoyagePathCard from './VoyagePathCard';
const { Paragraph } = Typography;

export default function SoloVoyagePathCard() {
  return (
    <VoyagePathCard
      title="Solo Path"
      description={
        <>
          <Paragraph>
            This is for people who want to be pushed to complete projects and
            have access to the community, but do not want to participate in a
            collaborative developer team this Voyage.
          </Paragraph>
          <Paragraph>
            The SOLO Path includes:
            <br />
            <ul>
              <li>Complete 2 solo projects</li>
              <li>Level-up your skills while building projects</li>
              <li>Experience using Git/ Github & deployment</li>
              <li>Accountability: deadlines & weekly progress check-ins</li>
              <li>Access to friendly & helpful community</li>
            </ul>
          </Paragraph>
        </>
      }
      path={paths.SOLO}
    />
  );
}
