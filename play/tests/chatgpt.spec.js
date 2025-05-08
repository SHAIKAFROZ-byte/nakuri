const {test,expect} = require('@playwright/test');

test('chatgpt',async({page})=>
    {
        await page.goto("https://deepai.org/");
        await page.locator("//textarea[@class='chatbox']").fill("repharse the text a Having a good experience on Automation testing ,manual testing,Api testing in a paragraph mode in 3 -4 lines");
        await page.keyboard.press("Enter");
        const response =  await page.locator("//*[@class='markdownContainer']/div/p").innerText();
        await page.waitForTimeout(1000);
        console.log(response);

        await page.goto("https://www.naukri.com/");
        await page.locator("a[title='Jobseeker Login']").click();
        await page.waitForTimeout(4000);
        const text = await  page.locator("//*[@class='head']").innerText();
        expect(text==="Login\nRegister for free").toBeTruthy();
        const email = await page.locator("//*[contains(text(),'Email ID / Username')]");
        await page.locator("//*[contains(text(),'Email ID / Username')]/following-sibling::input").fill("sa9993292@gmail.com");
        await page.locator("//*[contains(text(),'Password')]/following-sibling::input").fill("#Qwerty@123456");
        await page.locator("button[class='btn-primary loginButton']").click();
        
        await page.locator("//div[@class='view-profile-wrapper']/a").click();
        await page.locator("//*[contains(text(),'Resume headline')]/parent::div/span[@class='edit icon']").click();
        const textbox = await page.locator("//*[@class='input-field s12']/textarea");
        textbox.focus();
        await textbox.fill(response);
        await page.locator("//*[@class='action s12']/button").click();
        await page.waitForTimeout(1000);
      
    })