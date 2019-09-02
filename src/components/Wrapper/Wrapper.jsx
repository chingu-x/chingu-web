import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'antd';
import styles from './Wrapper.module.scss';

export default function Wrapper(props) {
  const { children, rowClassName, rowStyle, colClassName, colStyle } = props;

  return (
    <Row className={rowClassName} style={rowStyle} type="flex" justify="center">
      <Col
        className={classnames(styles.wrapper, colClassName)}
        style={colStyle}
        md={24}
        lg={18}
        xxl={16}
      >
        {children}
      </Col>
    </Row>
  );
}
