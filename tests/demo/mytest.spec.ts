import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // create a locator
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});
