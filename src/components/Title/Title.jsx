import React from 'react';
import classnames from 'classnames';
import { title, bold } from './Title.module.scss';

export default function Title(props) {
  const { children, level = 1, weight = 'normal', className, ...rest } = props;

  const classNames = classnames(title, weight === 'bold' && bold, className);

  switch (level) {
    case 3:
      return (
        <h3 {...rest} className={classNames}>
          {children}
        </h3>
      );
    case 2:
      return (
        <h2 {...rest} className={classNames}>
          {children}
        </h2>
      );
    case 1:
    default:
      return (
        <h1 {...rest} className={classNames}>
          {children}
        </h1>
      );
  }
}
