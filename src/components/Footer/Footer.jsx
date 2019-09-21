import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Wrapper } from '../Wrapper';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <Row className={styles.footer} type="flex" justify="center">
      <Col span={24}>
        <Wrapper>
          <Row gutter={16}>
            <Col span={12} style={{ textAlign: 'right' }}>
              <p className={styles.footerTitle}>Contact Us</p>
              <a
                href="mailto:support@chingu.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                support@chingu.io
              </a>
            </Col>
            <Col span={6}>
              <p className={styles.footerTitle}>Company</p>
              <Link to="/privacy#policy">
                <p>Privacy Policy</p>
              </Link>
            </Col>
            <Col span={6}></Col>
          </Row>
        </Wrapper>
      </Col>
    </Row>
  );
}
