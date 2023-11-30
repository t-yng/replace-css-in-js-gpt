// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./e2e",
  // スナップショットのファイルパスを設定
  snapshotPathTemplate:
    "{testDir}/__snapshots__/{testFilePath}/{projectName}{ext}",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://127.0.0.1:3000",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  // テスト対象のブラウザを設定
  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Safari iPhoneSE",
      use: { ...devices["iPhone SE"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "yarn dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
