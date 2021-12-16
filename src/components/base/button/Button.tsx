import React, { FC } from 'react';
import cn from 'classnames';

import {
  ButtonVariant,
  ButtonColor,
  ButtonCase,
  ButtonSize,
} from './buttonStyle';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariant;
  color?: keyof typeof ButtonColor;
  textCase?: keyof typeof ButtonCase;
  buttonSize?: keyof typeof ButtonSize;
  active?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'neutral',
  textCase = 'capitalize',
  buttonSize = 'md',
  active = false,
  loading = false,
  children,
  ...props
}) => {
  const className = cn(
    'btn',
    ButtonVariant[variant],
    ButtonColor[color],
    ButtonCase[textCase],
    ButtonSize[buttonSize],
    { 'btn-active': active },
    { loading }
  );

  return (
    <button {...props} type="button" className={className}>
      {children}
    </button>
  );
};

export default Button;
