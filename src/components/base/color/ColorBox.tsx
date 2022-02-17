import React from 'react';
import { IColor } from '@/types';

const ColorBox = ({ color }: { color: IColor }): React.ReactElement => (
  <div
    key={color.bgClass}
    className="flex h-40 flex-col rounded-lg shadow-lg dark:bg-white"
  >
    <div className={`h-20 ${color.bgClass} rounded-t-lg`} />
    <div className="m-3">
      <p className="text-lg font-medium text-gray-900">{color.code}</p>
      <p className="text-md font-normal text-gray-500">{color.hex}</p>
    </div>
  </div>
);

export default ColorBox;
