import React, { FC } from 'react';
import {
  ButtonVariant,
  ButtonColor,
  ButtonCase,
  ButtonSize,
  ButtonState,
} from './buttonStyle';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: keyof typeof ButtonVariant;
  color?: keyof typeof ButtonColor;
  textCase?: keyof typeof ButtonCase;
  buttonSize?: keyof typeof ButtonSize;
  state?: keyof typeof ButtonState;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'neutral',
  textCase = 'capitalize',
  buttonSize = 'md',
  state = 'none',
  loading = false,
  children,
  ...props
}) => (
  <button
    {...props}
    type="button"
    className={`
        btn 
        ${ButtonVariant[variant]} 
        ${ButtonColor[color]} 
        ${ButtonCase[textCase]} 
        ${ButtonSize[buttonSize]}
        ${ButtonState[state]}
        ${loading && 'loading'}
    `}
  >
    {children}
  </button>
);

export default Button;
