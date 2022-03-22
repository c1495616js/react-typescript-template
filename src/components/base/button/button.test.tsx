/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { expect, describe, it } from 'vitest';

import { render, screen } from 'test-utils';
import Button from './Button';

describe('Button', () => {
  it('render a button', () => {
    render(<Button variant="primary" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
