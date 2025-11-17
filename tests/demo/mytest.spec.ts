import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("CURA Healthcare Service");

  // create a locator
  await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service");
});

test("Should demo locators", async ({ page }) => {
  // ✅ page.getBy() and page.locator() methods returns the "locator" object
  // ✅ The above methods not to be `awaited`
  // ✅ The type of locator is an `object`
  // ✅ Locators are LAZY until an action is fired on them

  // 1. Launch URL
  await page.goto("https://katalon-demo-cura.herokuapp.com");

  // 2. Click on the Make Appointment
  let makeApptBtn = page.getByRole("link", { name: "Make Appointment" });
  //console.log(`The type of locator: ${typeof makeApptBtn}, The value of the locator is: ${JSON.stringify(makeApptBtn)}`);
  await makeApptBtn.click();
  //await expect(page.getByText("Please login to make")).toBeVisible();
});
