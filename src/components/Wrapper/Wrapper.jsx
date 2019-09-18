import React, { useMemo } from 'react';
import classnames from 'classnames';
import { wrapper } from './Wrapper.module.scss';

export default function Wrapper(props) {
  const {
    children,
    rowStyle,
    colClassName,
    colStyle,
    contentAttributes = {},
    ...rest
  } = props;

  const contentClass = useMemo(
    () => classnames(wrapper, contentAttributes.className),
    [contentAttributes.className]
  );

  return (
    <div {...rest} ype="flex" justify="center">
      <div {...contentAttributes} className={contentClass}>
        {children}
      </div>
    </div>
  );
}
