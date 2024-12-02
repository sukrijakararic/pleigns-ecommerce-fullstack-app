import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy';

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    copy({
      targets: [
        { src: 'assets', dest: 'dist/assets' },
      ],
    }),
  ],
})
