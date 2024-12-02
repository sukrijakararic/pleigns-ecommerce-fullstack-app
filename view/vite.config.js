import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: 'assets',
    assets: [
      'src/assets/**/*',
      '**/*.{png,jpg,svg,woff,woff2,eot,ttf,otf,webp}',
    ],
  },
})
