import { defineConfig } from "cypress";
import injectCustomConfig from "./customConfig.js"; // ✅ Re-added

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: async (baseConfig) => {
        const modifiedConfig = await injectCustomConfig(baseConfig);
        return modifiedConfig;
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
