import { defineConfig } from "cypress";

export default defineConfig({
  fileServerFolder: "src",
  screenshotOnRunFailure: false,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
