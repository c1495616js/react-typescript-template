/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

type Props = React.HTMLAttributes<HTMLDivElement>;

const ModalHeader = React.forwardRef<HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, ...other } = props;
    const {
      theme: { modalHeader },
    } = useContext(ThemeContext);

    const baseStyle = modalHeader.base;

    const cls = classNames(baseStyle, className);

    return (
      <p className={cls} ref={ref} {...other}>
        {children}
      </p>
    );
  }
);

export default ModalHeader;
