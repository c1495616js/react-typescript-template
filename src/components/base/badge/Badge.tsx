/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '@/context/ThemeContext';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => {
  const { className, children, variant = 'primary', ...other } = props;

  const {
    theme: { badge },
  } = useContext(ThemeContext);

  const baseStyle = badge.base;
  const typeStyle = {
    success: badge.success,
    danger: badge.danger,
    warning: badge.warning,
    neutral: badge.neutral,
    primary: badge.primary,
  };
  const cls = classNames(baseStyle, typeStyle[variant], className);

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  );
});

export default Badge;
