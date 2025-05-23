import { defineConfig } from 'cypress';
import injectCustomConfig from './customConfig.js';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: async (baseConfig) => {
        const modifiedConfig = await injectCustomConfig(baseConfig);

        // Optional: auto-inject React for JSX support
        modifiedConfig.esbuild = {
          jsxInject: `import React from 'react'`
        };

        return modifiedConfig;
      },
    },
    indexHtmlFile: 'cypress/support/component-index.html',
  },
});