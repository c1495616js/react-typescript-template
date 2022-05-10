import React, { useEffect } from 'react';
import cn from 'classnames';

import '@/styles/tailwind.css';
import '@/styles/styles.css';
import '@fontsource/inter';
import { useDarkMode } from '@/hooks/useDarkMode';
import type { Mode } from '@/types';

interface IStoryArgs {
  mode: Mode;
}

const StoryLayout: React.FC<IStoryArgs> = ({ mode, children }) => {
  const [, setMode] = useDarkMode(true);
  useEffect(() => {
    if (mode && setMode) {
      setMode(mode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
  return (
    <div className="p-4">
      <div>{children}</div>
    </div>
  );
};

export default StoryLayout;
