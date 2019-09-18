import React, { useMemo } from 'react';
import classnames from 'classnames';
import { paragraph, small, large, bold, italic } from './Paragraph.module.scss';

export default function Paragraph(props) {
  const {
    children,
    size,
    bold: isBold = false,
    italic: isItalic = false,
    className,
    ...rest
  } = props;

  const sizeClass = useMemo(() => {
    switch (size) {
      case 'small':
        return small;
      case 'large':
        return large;
      default:
        return false;
    }
  }, [size]);

  const classNames = classnames(
    paragraph,
    sizeClass,
    isBold && bold,
    isItalic && italic,
    className
  );

  return (
    <p {...rest} className={classNames}>
      {children}
    </p>
  );
}
