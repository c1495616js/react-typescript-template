import React from 'react';

import { render, screen, waitFor } from 'test-utils';
import { posts } from '@/api/mocks/handlers';
import Post from './post';

describe('async fetch call', () => {
  it('async list', async () => {
    render(<Post />);
    await waitFor(async () => {
      expect(await screen.findAllByText(/title:/i)).toHaveLength(posts.length);
    });
  });
});
