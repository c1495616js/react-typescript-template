/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

type Props = React.HTMLAttributes<HTMLDivElement>;

const ModalFooter = React.forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: { modalFooter },
  } = useContext(ThemeContext);

  const baseStyle = modalFooter.base;

  const cls = classNames(baseStyle, className);

  return (
    <footer className={cls} ref={ref} {...other}>
      {children}
    </footer>
  );
});

export default ModalFooter;
