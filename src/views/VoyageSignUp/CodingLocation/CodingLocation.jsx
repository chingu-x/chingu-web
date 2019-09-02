import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, Input } from 'antd';
import CountrySelect from '../../../components/CountrySelect';
import TimeZoneSelect from '../../../components/TimeZoneSelect';
import { useVoyageSignUp } from '../../../contexts/voyageSignUp';
import styles from './CodingLocation.module.scss';

export default function CodingLocation() {
  const [state, dispatch] = useVoyageSignUp();
  return (
    <Card bordered={false}>
      <Row type="flex" justify="center">
        <Col>
          <h1 className={styles.title}>Where are you coding from?</h1>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        <Col span={10}>
          <CountrySelect
            style={{ width: '100%' }}
            value={state.countryCode}
            onChange={countryCode =>
              dispatch({ type: 'SET_COUNTRY_CODE', payload: { countryCode } })
            }
          />
          <br />
          <br />
          <Input
            placeholder="Which city?"
            value={state.city}
            onChange={e =>
              dispatch({ type: 'SET_CITY', payload: { city: e.target.value } })
            }
          />
          <br />
          <br />
          <TimeZoneSelect
            countryCode={state.countryCode}
            style={{ width: '100%' }}
            value={state.timezone}
            onChange={timezone =>
              dispatch({ type: 'SET_TIMEZONE', payload: { timezone } })
            }
          />
        </Col>
      </Row>
      <Row type="flex" justify="space-between" gutter={16}>
        <Col>
          <Link to="/voyageSignUp/path">
            <Button className={styles.next}>Back</Button>
          </Link>
        </Col>
        <Col>
          <Button className={styles.next} type="primary">
            Next
          </Button>
        </Col>
      </Row>
    </Card>
  );
}
