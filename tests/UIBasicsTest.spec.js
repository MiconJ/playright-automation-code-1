const { test, expect } = require("@playwright/test");

// Add {browser} to run the test in a new browser context. In function, config context and page to run the test in a new page
test("First playwright test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

// Add .only to run only this test
test("Open tab using page param", async ({ page }) => {
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

  // Locator login form
  const username = page.locator('#username');
  const password = page.locator("[type=password]");
  const signInBtn = page.locator("#signInBtn");
  const errorMsg = page.locator("[style*='block']");
  const cardTitles = page.locator('.card-body a');

  //Using Locator on page to do action
  await username.fill('rahulshettyacademy');
  await password.fill('learning');
  await signInBtn.click();


  // check if element contain block, then get the text of element
  // await expect(errorMsg).toHaveText('Incorrect username/password.');

  // nth: no-th -> Get the n element of array -> nth(index)
  // nth(0) = first()
  // console.log(await cardTitles.nth(0).textContent());
  
  // Get all element 
  console.log(await cardTitles.allTextContents());
  
});

test.only('Select Dropdown value', async({page}) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // Locator login form
  const username = page.locator('#username');
  const password = page.locator("[type=password]");
  const signInBtn = page.locator("#signInBtn");
  const dropdownOption = page.locator('select.form-control');
  const radioBox = page.locator('.radiotextsty');
  const dialogSubmitButton = page.locator('#okayBtn');

  //Using Locator on page to do action
  await username.fill('rahulshettyacademy');
  await password.fill('learning');
  await radioBox.last().click();

  //Using page.pause() to pause the test then dev can debug
  await page.pause();

  await dialogSubmitButton.click();
  await page.pause();

  await dropdownOption.selectOption('consult');
  await page.pause();

  await signInBtn.click();

});
