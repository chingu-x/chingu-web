import React from 'react';
import { Typography, Row, Col, Radio, Card } from 'antd';
import { useVoyageSignUp } from '../../contexts/voyageSignUp';
import styles from './VoyagePathCard.module.scss';

const { Paragraph, Text } = Typography;

export default function VoyageTeamPathCard(props) {
  const [state, dispatch] = useVoyageSignUp();
  const { title, subtitle, description, path } = props;

  const handlePathChange = () =>
    dispatch({
      type: 'SET_PATH',
      payload: { path }
    });

  const TeamCardTitle = (
    <>
      <Row type="flex" align="middle">
        <Col>
          <Radio value={path} checked={state.path === path} />
        </Col>
        {title && (
          <Col>
            <Text className={styles.title}>{title}</Text>
          </Col>
        )}
      </Row>
      {subtitle && (
        <Paragraph className={styles.subtitle} type="secondary">
          {subtitle}
        </Paragraph>
      )}
    </>
  );

  return (
    <Card
      className={styles.card}
      onClick={handlePathChange}
      bordered={false}
      hoverable
    >
      <Card.Meta title={TeamCardTitle} description={description} />
    </Card>
  );
}
