import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
    esbuild: {
    jsxInject: `import React from 'react'`, // ensures it's auto-injected
  },
})
