import React from 'react';
import { FiCircle, FiGrid, FiList } from 'react-icons/fi';

export const options1 = [
  { value: 'Leading', content: 'Leading' },
  { value: 'Middle', content: 'Middle' },
  { value: 'Trailing', content: 'Trailing' },
];

export const options2 = [
  {
    value: 'first',
    content: (
      <>
        <FiCircle size={20} className="mr-2" /> First{' '}
      </>
    ),
  },
  {
    value: 'second',
    content: (
      <>
        <FiCircle size={20} className="mr-2" /> Second{' '}
      </>
    ),
  },
  {
    value: 'third',
    content: (
      <>
        <FiCircle size={20} className="mr-2" /> Third{' '}
      </>
    ),
  },
];

export const options3: {
  value: 'list' | 'grid';
  content: React.ReactElement;
}[] = [
  {
    value: 'list',
    content: <FiList size={20} />,
  },
  {
    value: 'grid',
    content: <FiGrid size={20} />,
  },
];
