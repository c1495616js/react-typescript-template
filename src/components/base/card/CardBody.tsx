/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

type Props = React.HTMLAttributes<HTMLDivElement>;

const CardBody = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className, children, ...other } = props;
  const {
    theme: { cardBody },
  } = useContext(ThemeContext);

  const baseStyle = cardBody.base;

  const cls = classNames(baseStyle, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default CardBody;
