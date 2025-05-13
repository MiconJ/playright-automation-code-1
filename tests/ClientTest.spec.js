const {test} = require('@playwright/test');

test.only("Client test", async({browser, page}) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');
    await page.locator("[value='Login']").click();
    
    await page.waitForLoadState('networkidle');
    const clientTitles = page.locator(".card-body b").allTextContents();
    console.log(await clientTitles);

})
