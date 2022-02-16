import React from 'react';
import cn from 'classnames';
import '@/styles/tailwind.css';
import '@/styles/styles.css';
import '@fontsource/inter';

interface IStoryArgs {
  darkMode: boolean;
  className?: string;
  noPadding?: boolean;
}

const StoryLayout: React.FC<IStoryArgs> = ({
  darkMode,
  className,
  children,
  noPadding,
}) => (
  <div className={cn({ 'dark bg-gray-900': darkMode }, '-m-4')}>
    <div className={cn(className, { 'p-4': !noPadding })}>{children}</div>
  </div>
);

StoryLayout.defaultProps = {
  className: '',
  noPadding: false,
};

export default StoryLayout;
