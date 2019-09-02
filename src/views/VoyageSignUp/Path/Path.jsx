import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import TeamVoyagePathCard from '../../../components/TeamVoyagePathCard';
import SoloVoyagePathCard from '../../../components/SoloVoyagePathCard';
import styles from './Path.module.scss';

export default function Path() {
  return (
    <>
      <Row type="flex" justify="center">
        <Col>
          <h1 className={styles.title}>Choose Your Path</h1>
        </Col>
      </Row>
      <Row type="flex" justify="space-between" align="top" gutter={16}>
        <Col span={12}>
          <TeamVoyagePathCard />
        </Col>
        <Col span={12}>
          <SoloVoyagePathCard />
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col>
          <Link to="/voyageSignUp/">
            <Button className={styles.next}>Back</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/voyageSignUp/codingLocation">
            <Button className={styles.next} type="primary">
              Next
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
