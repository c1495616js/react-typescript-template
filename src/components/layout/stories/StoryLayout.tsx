import React, { useEffect } from 'react';
import cn from 'classnames';

import '@/styles/tailwind.css';
import '@/styles/styles.css';
import '@fontsource/inter';
import { useDarkMode } from '@/hooks/useDarkMode';

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
  // const [, setIsDark] = useDarkMode();
  // useEffect(() => {
  //   setIsDark(darkMode);
  // }, [darkMode, setIsDark]);

  <div>{children}</div>
  // <div className={cn({ 'dark bg-gray-900': darkMode }, '-m-4')}>
  //   <div className={cn(className, { 'p-4': !noPadding })}>{children}</div>
  // </div>
);
StoryLayout.defaultProps = {
  className: '',
  noPadding: false,
};

export default StoryLayout;
