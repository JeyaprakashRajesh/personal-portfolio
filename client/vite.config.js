import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './src'), // Adjust './src' to your root directory
    },
  },
});
