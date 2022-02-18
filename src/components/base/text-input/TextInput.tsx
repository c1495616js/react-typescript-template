/* eslint-disable react/jsx-pascal-case */
import React, { FC } from 'react';
import cn from 'classnames';

import Typography from '../typography/Typography';

export interface TextInputProps {
  type: 'text' | 'email';
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  leadingText?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
  disabled?: boolean;
}
const TextInput: FC<TextInputProps> = ({
  type,
  value,
  handleChange,
  label,
  leadingText,
  placeholder,
  error,
  helperText,
  LeadingIcon,
  TrailingIcon,
  disabled,
}) => (
  <fieldset>
    {label ? (
      <Typography
        variant="sm"
        customWeight="medium"
        customColor="text-gray-700 dark:text-white"
        className="mb-1.5"
      >
        {label}
      </Typography>
    ) : null}

    <div className={cn('relative', { 'flex items-center': leadingText })}>
      <div className="pointer-events-none absolute flex h-11 w-full items-center justify-between rounded-lg px-3.5 shadow-sm">
        {LeadingIcon ? (
          <LeadingIcon.type
            className={cn('text-gray-500', LeadingIcon.props?.className)}
          />
        ) : (
          <div />
        )}
        {TrailingIcon ? (
          <TrailingIcon.type
            className={cn({ 'text-gray-400': !error, 'text-error-400': error })}
          />
        ) : null}
      </div>

      {leadingText ? (
        <div
          className={cn(
            'broder-gray-300 flex h-11 items-center rounded-l-lg border border-r-0 pl-3.5 pr-3 text-lg text-gray-500 dark:border-gray-500',
            {
              'bg-gray-50 dark:bg-gray-700': disabled,
              'dark:bg-gray-800': !disabled,
            }
          )}
        >
          {leadingText}
        </div>
      ) : null}

      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(
          'h-11 w-full select-none border text-md text-gray-900 dark:text-white',
          {
            'pl-9': LeadingIcon,
            'pr-9': TrailingIcon,
            'rounded-l-0 rounded-r-lg pl-2': leadingText,
            'rounded-lg': !leadingText,
            'border-gray-300 focus:border-primary-300 focus:ring-4 focus:ring-primary-100 dark:border-gray-500 dark:focus:border-gray-100 dark:focus:ring-gray-100 dark:focus:ring-opacity-20':
              !error,
            'border-error-300 focus:border-error-300 focus:ring-4 focus:ring-error-100':
              error,
            'bg-white dark:bg-gray-800': !disabled,
            'bg-gray-50 dark:bg-gray-700': disabled,
          }
        )}
        disabled={disabled}
      />
    </div>

    {error ? (
      <div className="mt-1.5 text-sm text-error-500">{error}</div>
    ) : null}

    {helperText ? (
      <div className="mt-1.5 text-sm text-gray-500">{helperText}</div>
    ) : null}
  </fieldset>
);

export default TextInput;
