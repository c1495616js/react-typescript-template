/* eslint-disable react/prop-types */
import classNames from 'classnames';
import React, { ReactNode, useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { ThemeContext } from '@/context/ThemeContext';

const Loading: React.FC<React.PropsWithChildren<any>> = (props) => (
  <FaSpinner {...props} />
);

type IconType =
  | string
  | React.FunctionComponent<
      React.PropsWithChildren<{ className: string; 'aria-hidden': boolean }>
    >
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;

export interface Props {
  children?: React.ReactNode;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   */
  size?: 'larger' | 'large' | 'regular' | 'small' | 'pagination';
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType;
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType;
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType;
  /**
   * The style of the button
   */
  variant?: 'outline' | 'link' | 'primary' | '__dropdownItem';
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;

  loading?: boolean;
}

export interface ButtonAsButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: 'button';
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a';
}

export interface ButtonAsOtherProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps;

type Ref = ReactNode | HTMLElement | string;

const Button = React.forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    tag = 'button',
    // Fix https://github.com/estevanmaito/windmill-react-ui/issues/7
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    size = 'regular',
    variant = 'primary',
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    loading = false,
    ...other
  } = props;
  const {
    theme: { button },
  } = useContext(ThemeContext);

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight;
  }

  function isDisabled() {
    return loading || disabled;
  }

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  const baseStyle = button.base;
  const blockStyle = button.block;
  const sizeStyles = {
    larger: button.size.larger,
    large: button.size.large,
    regular: button.size.regular,
    small: button.size.small,
    /**
     * Only used in Pagination.
     * Not meant for general use.
     */
    pagination: button.size.pagination,
  };
  const iconSizeStyles = {
    larger: button.size.icon.larger,
    large: button.size.icon.large,
    regular: button.size.icon.regular,
    small: button.size.icon.small,
    pagination: button.size.icon.regular,
  };
  const iconStyle = button.icon[size];
  const layoutStyles = {
    primary: button.primary.base,
    outline: button.outline.base,
    link: button.link.base,
  };
  const activeStyles = {
    primary: button.primary.active,
    outline: button.outline.active,
    link: button.link.active,
  };
  const disabledStyles = {
    primary: button.primary.disabled,
    outline: button.outline.disabled,
    link: button.link.disabled,
  };

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle = button.dropdownItem.base;

  const buttonStyles =
    variant === '__dropdownItem'
      ? classNames(dropdownItemStyle, className)
      : classNames(
          baseStyle,
          // has icon but no children
          hasIcon() && !children && iconSizeStyles[size],
          // has icon and children
          hasIcon() && children && sizeStyles[size],
          // does not have icon
          !hasIcon() && sizeStyles[size],
          layoutStyles[variant],
          isDisabled() ? disabledStyles[variant] : activeStyles[variant],
          block ? blockStyle : null,
          className
        );

  const iconLeftStyles = classNames(
    iconStyle,
    children ? button.icon.left : ''
  );
  const iconRightStyles = classNames(
    iconStyle,
    children ? button.icon.right : ''
  );

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled: isDisabled(),
      type,
      ...other,
    },
    loading
      ? React.createElement(Loading, {
          className: `animate-spin ${iconLeftStyles}`,
          'aria-hidden': true,
        })
      : null,
    IconLeft
      ? React.createElement(IconLeft, {
          className: iconLeftStyles,
          'aria-hidden': true,
        })
      : null,
    children,
    IconRight
      ? React.createElement(IconRight, {
          className: iconRightStyles,
          'aria-hidden': true,
        })
      : null
  );
});

export default Button;
