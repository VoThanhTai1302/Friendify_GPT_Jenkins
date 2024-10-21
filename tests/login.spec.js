const {test,expect, chromium} = require ('@playwright/test');

test('Login with email', async({page})=>{
    const browsers = chromium.launch({headless:false});
    const pages = (await browsers).newPage();

    await page.goto("https://friendify.ai/")
    await page.locator('//*[@id="__next"]/div/header/div/div[2]/div[1]/p').click();
    await page.close();

    
})