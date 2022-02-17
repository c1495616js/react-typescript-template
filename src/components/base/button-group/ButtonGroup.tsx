import React, { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  options: IButtonItem<T>[];
  activeOption: string;
  setActiveOption: Dispatch<SetStateAction<T>>;
}

export const ButtonGroup = <T extends unknown>({
  options,
  activeOption,
  setActiveOption,
}: ButtonGroupProps<T>): React.ReactElement => (
  <>
    {options.map((option, index) => (
      <button
        type="button"
        key={option.value as string}
        className={cn(
          'inline-flex h-10 items-center whitespace-nowrap border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none dark:border-gray-500 dark:text-white dark:hover:bg-gray-700',
          {
            'rounded-l-lg border-r-0': index === 0,
            'rounded-r-lg': index === options.length - 1,
            'bg-gray-50 dark:bg-gray-700': activeOption === option.value,
            'border-r-0': index !== 0 && index !== options.length - 1,
          }
        )}
        onClick={() => setActiveOption(option.value)}
      >
        {option.content}
      </button>
    ))}
  </>
);
