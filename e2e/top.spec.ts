// e2e/top.spec.ts
import { test, expect } from "@playwright/test";

test("visual regression", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    animations: "disabled",
  });
});
