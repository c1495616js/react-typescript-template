/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '@/context/ThemeContext';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatar
   */
  size?: 'large' | 'regular' | 'small';
  /**
   * Alternative text for the avatar image
   */
  alt?: string;
  /**
   * The source for the avatar image
   */
  src: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size = 'regular', src, alt, className, ...other } = props;
  const {
    theme: { avatar },
  } = useContext(ThemeContext);

  const baseStyle = avatar.base;
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  };

  const cls = classNames(baseStyle, sizeStyles[size], className);

  return (
    <div className={cls} ref={ref} {...other}>
      <img
        className="h-full w-full rounded-full object-cover"
        src={src}
        alt={alt}
        loading="lazy"
      />
      <div
        className="absolute inset-0 rounded-full shadow-inner"
        aria-hidden="true"
      />
    </div>
  );
});

export default Avatar;
