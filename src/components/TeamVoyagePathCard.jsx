import React from 'react';
import { Typography } from 'antd';
import { paths } from '../contexts/voyageSignUp';
import VoyagePathCard from './VoyagePathCard';
const { Paragraph } = Typography;

export default function SoloVoyagePathCard() {
  return (
    <VoyagePathCard
      title="Team Path"
      subtitle="(We recommend this one!)"
      description={
        <>
          <Paragraph>
            This is for learners who want the full experience: level-up by
            building a team project, an individual project, pair-programming and
            access to a supportive community with shared goals.
          </Paragraph>
          <Paragraph>
            The TEAM path includes:
            <br />
            <ul>
              <li>Complete 1 solo project & 1 Team project</li>
              <li>Level-up your skills while building projects</li>
              <li>Experience using Git/ Github & deployment</li>
              <li>Accountability: deadlines & weekly progress check-ins</li>
              <li>Access to friendly & helpful community</li>
              <li>Pair-programming</li>
              <li>Experience working in a remote developer team</li>
            </ul>
          </Paragraph>
        </>
      }
      path={paths.TEAM}
    />
  );
}
