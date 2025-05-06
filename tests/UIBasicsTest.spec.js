const { test } = require("@playwright/test");

// Add {browser} to run the test in a new browser context. In function, config context and page to run the test in a new page
test("First playwright test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

// Add .only to run only this test
test.only("Open tab using page param", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const title = await page.title();
  console.log("Page title is:", title);
});
