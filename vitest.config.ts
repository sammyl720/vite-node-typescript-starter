import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node', // Use Node.js environment
    exclude: ['dist/**', 'node_modules/**'], // Exclude built files from tests
  },
});
