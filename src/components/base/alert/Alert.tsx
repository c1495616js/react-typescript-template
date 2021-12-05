/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import cn from 'classnames';

import { AllertIcon, AllertVariant } from './alertStyle';

export interface AllertProps {
  label?: string;
  variant?: keyof typeof AllertVariant;
}

const Alert: FC<AllertProps> = ({ label = '', variant = 'none', children }) => {
  const className = cn('alert', AllertVariant[variant]);

  const Icon = AllertIcon[variant];

  return (
    <div className={className}>
      <div className="flex-1">
        <Icon />
        <label>{label}</label>
      </div>
      <div className="flex-none">{children}</div>
    </div>
  );
};

Alert.defaultProps = {
  label: '',
  variant: 'none',
};

export default Alert;
