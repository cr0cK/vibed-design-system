import { defineConfig } from "@playwright/test";

const port = 8130;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: "retain-on-failure",
    video: "retain-on-failure"
  },
  webServer: {
    command: `python3 -m http.server ${port} --directory apps/storybook/storybook-static`,
    port,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  }
});
