import React from 'react';
import { Layout } from 'antd';
import Wrapper from '../Wrapper';
import { HEADER_HEIGHT } from '../Header/Header';
import styles from './Content.module.scss';

const { Content: SemanticContent } = Layout;

export default function Content({ children }) {
  return (
    <Wrapper colStyle={{ minHeight: `calc(100vh - ${HEADER_HEIGHT}px)` }}>
      <SemanticContent className={styles.content}>{children}</SemanticContent>
    </Wrapper>
  );
}
