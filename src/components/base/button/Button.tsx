/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-pascal-case */
import React, { FC, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import { FaSpinner } from 'react-icons/fa';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'secondaryGray'
  | 'tertiary'
  | 'tertiaryGray';

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type ButtonState = 'default' | 'hover' | 'focus' | 'disabled';

const ButtonVariantClasses: Record<
  ButtonVariant,
  Record<ButtonState, string>
> = {
  primary: {
    default: 'btn-primary',
    hover: 'btn-primary-hover',
    focus: 'btn-primary-focus shadow-grayDark',
    disabled: 'btn-primary-disabled',
  },

  secondary: {
    default: 'btn-secondary',
    hover: 'btn-secondary-hover',
    focus: 'btn-secondary-focus shadow-grayDark',
    disabled: 'btn-secondary-disabled',
  },
  secondaryGray: {
    default: 'btn-secondaryGray',
    hover: 'btn-secondaryGray-hover',
    focus: 'btn-secondaryGray-focus shadow-grayDark',
    disabled: 'btn-secondaryGray-disabled',
  },
  tertiary: {
    default: 'btn-tertiary',
    hover: 'btn-tertiary-hover',
    focus: '',
    disabled: 'btn-tertiary-disabled',
  },
  tertiaryGray: {
    default: 'btn-tertiaryGray',
    hover: 'btn-tertiaryGray-hover',
    focus: '',
    disabled: 'btn-tertiaryGray-disabled',
  },
};

const ButtonSizeClasses: Record<ButtonSize, `btn-${ButtonSize}`> = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
  '2xl': 'btn-2xl',
};

const ButtonIconSizeClasses: Record<ButtonSize, `btn-icon-${ButtonSize}`> = {
  sm: 'btn-icon-sm',
  md: 'btn-icon-md',
  lg: 'btn-icon-lg',
  xl: 'btn-icon-xl',
  '2xl': 'btn-icon-2xl',
};
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: ButtonVariant;
  size?: ButtonSize;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  IconOnly?: React.ReactElement;
  disabled?: boolean;
  loading?: boolean;
}

const Loading: FC<any> = (props) => <FaSpinner {...props} />;

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  LeadingIcon,
  TrailingIcon,
  IconOnly,
  disabled: disabledProp,
  loading,
  ...buttonProps
}) => {
  const ButtonVariantClassName = ButtonVariantClasses[variant];
  const ButtonIconSizeClassName = ButtonIconSizeClasses[size];

  let disabled = disabledProp;
  if (loading) {
    disabled = true;
    const Empty = <></>;

    if (IconOnly) {
      IconOnly = Empty;
    }

    if (LeadingIcon) {
      LeadingIcon = Empty;
    }

    if (TrailingIcon) {
      TrailingIcon = Empty;
    }
  }

  const classname = cn('btn-base', className, {
    [ButtonSizeClasses[size]]: !IconOnly,
    [cn(ButtonIconSizeClassName, 'justify-center')]: IconOnly,
    [cn(
      ButtonVariantClassName.default,
      ButtonVariantClassName.hover,
      ButtonVariantClassName.focus
    )]: !disabled,
    [cn(ButtonVariantClassName.disabled, 'cursor-not-allowed')]: disabled,
  });

  return (
    <button {...buttonProps} type="button" className={classname}>
      {loading ? (
        <Loading
          className={cn('animate-spin', {
            'mr-2': size !== '2xl' && !IconOnly,
            'mr-3': size === '2xl' && !IconOnly,
          })}
        />
      ) : null}
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={cn({
            'mr-2': size !== '2xl',
            'mr-3': size === '2xl',
          })}
        />
      ) : null}
      {children}
      {IconOnly ? (
        <IconOnly.type
          {...IconOnly.props}
          className={size === '2xl' ? 24 : 20}
        />
      ) : null}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={cn({ 'ml-2': size !== '2xl', 'ml-3': size === '2xl' })}
        />
      ) : null}
    </button>
  );
};

export default Button;
