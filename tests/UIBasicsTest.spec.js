const { test, expect } = require("@playwright/test");

// Add {browser} to run the test in a new browser context. In function, config context and page to run the test in a new page
test("First playwright test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

// Add .only to run only this test
test.only("Open tab using page param", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  //Print the page title
  const title = await page.title();
  console.log("Page title is:", title);

  //Check the title of page is equal with param string
  try {
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
    console.log("✅ Page title is correct");
  } catch (error) {
    console.log("❌ Page title is incorrect");
    console.error(error);
  }

  //Using Locator on page to do action
  await page.locator("#username").fill('rahulshettyacademy');
  await page.locator("[type=password]").fill('learning');
  await page.locator("#signInBtn").click();

  // check if element contain block, then get the text of element
  await expect(await page.locator("[style*='block']").textContent()).toContain('Incorrect username/password.')
});
