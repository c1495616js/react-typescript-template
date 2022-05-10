/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

export type BackdropProps = React.HTMLAttributes<HTMLDivElement>;

const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(
  (props, ref) => {
    const { className, ...other } = props;
    const {
      theme: { backdrop },
    } = useContext(ThemeContext);

    const baseStyle = backdrop.base;

    const cls = classNames(baseStyle, className);
    return <div className={cls} ref={ref} {...other} />;
  }
);

export default Backdrop;
