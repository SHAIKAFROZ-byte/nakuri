const { test, expect } = require('@playwright/test');
const SignIn = require('../pages/signIn');
import TestData from "../TestData/Creds.json";

test('DeepAI rephrasing and Naukri profile update', async ({ page }) => {
  const login = new SignIn(page);
  await login.navigateToDeepAiPage();
  await login.deepAi();
  await page.keyboard.press("Enter");
  const deepAiResponses = await login.deepAiResponse();
  await page.waitForTimeout(1000);
  await login.navigateToNakuriPage();
  await login.nakuri(deepAiResponses,TestData.email_id,TestData.password);
  await page.waitForTimeout(500);
});
