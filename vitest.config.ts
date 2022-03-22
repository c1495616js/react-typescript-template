import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: 'utils/setupTests.ts',
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      // path alias
      '@': path.resolve(__dirname, 'src'),
      'test-utils': path.resolve(__dirname, 'utils/test-utils'),
    },
  },
});
