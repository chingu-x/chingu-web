import React, { useMemo } from 'react';
import classnames from 'classnames';
import {
  button,
  primary,
  link,
  linkPrimary,
  large
} from './Button.module.scss';

export default function Button(props) {
  const { children, type, size, className, ...rest } = props;

  const typeClass = useMemo(() => {
    switch (type) {
      case 'primary':
        return primary;
      case 'link':
        return link;
      case 'link-primary':
        return linkPrimary;
      default:
        return false;
    }
  }, [type]);

  const sizeClass = useMemo(() => {
    switch (size) {
      case 'large':
        return large;
      default:
        return false;
    }
  }, [size]);

  const buttonClass = classnames(button, className, typeClass, sizeClass);

  return (
    <button {...rest} className={buttonClass}>
      {children}
    </button>
  );
}
