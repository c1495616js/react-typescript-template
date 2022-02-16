import React, { FC } from 'react';
import cn from 'classnames';

type TypographyVariant =
  // Text
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  // Display
  | 'h6'
  | 'h5'
  | 'h4'
  | 'h3'
  | 'h2'
  | 'h1';

type TypographyWeightOption = 'normal' | 'medium' | 'semibold' | 'bold';
type TypographyWeightValue = `font-${TypographyWeightOption}`;

export interface TypographyProps {
  variant: TypographyVariant;
  customColor?: string;
  customWeight?: TypographyWeightOption;
  className?: string;
}

const TypographyVariantClasses: Record<
  TypographyVariant,
  `text-${TypographyVariant}`
> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  h6: 'text-h6',
  h5: 'text-h5',
  h4: 'text-h4',
  h3: 'text-h3',
  h2: 'text-h2',
  h1: 'text-h1',
};

const TypographyWeightClasses: Record<
  TypographyWeightOption,
  TypographyWeightValue
> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const Typography: FC<TypographyProps> = ({
  variant = 'md',
  customColor,
  customWeight = 'normal',
  className,
  children,
}) => {
  const TypographyVariantClassName = TypographyVariantClasses[variant];
  const TypographyWeightClassName = TypographyWeightClasses[customWeight];

  // h1-h6 should have corresponding component
  const isHeading = variant.startsWith('h');
  const Component = (isHeading ? variant : 'p') as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn(
        TypographyVariantClassName,
        TypographyWeightClassName,
        className,
        {
          'tracking-tight': ['h1', 'h2', 'h3'].includes(variant),
          'text-gray-900 dark:text-white': !customColor,
        },
        customColor
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
