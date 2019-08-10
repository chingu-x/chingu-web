import React from 'react';
import { Row, Col } from 'antd';

export default function Wrapper({ children, rowClassName, colClassName }) {
  return (
    <Row className={rowClassName} type="flex" justify="center">
      <Col className={colClassName} md={24} lg={18} xxl={16}>
        {children}
      </Col>
    </Row>
  );
}
