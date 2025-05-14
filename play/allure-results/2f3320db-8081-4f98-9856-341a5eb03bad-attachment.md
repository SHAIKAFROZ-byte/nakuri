# Test info

- Name: DeepAI rephrasing and Naukri profile update
- Location: C:\Users\Shaik_Afroz\playWrightProjects\nplay\nakuri\play\tests\DeepSeek.spec.js:5:1

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://deepai.org/", waiting until "load"

    at SignIn.navigateToDeepAiPage (C:\Users\Shaik_Afroz\playWrightProjects\nplay\nakuri\play\pages\signIn.js:20:25)
    at C:\Users\Shaik_Afroz\playWrightProjects\nplay\nakuri\play\tests\DeepSeek.spec.js:7:15
```

# Page snapshot

```yaml
- banner:
  - link "DeepAI":
    - /url: /
    - img
    - paragraph: DeepAI
  - link "AI Chat":
    - /url: /chat
  - link "AI Image Generator":
    - /url: /machine-learning-model/text2img
  - link "AI Video":
    - /url: /video
  - link "AI Music":
    - /url: /music
  - link "Voice Chat":
    - /url: /voice
  - link "Ghibli AI":
    - /url: /machine-learning-model/studio-ghibli
  - text: Login
  - navigation:
    - list:
      - listitem:
        - button:
          - img
- link "Upgrade to DeepAI Pro More access to the best models":
  - /url: javascript:void(0);
- button "Dismiss announcement": ×
- heading "sparkle DeepAI" [level=1]:
  - img "sparkle"
  - text: DeepAI
- button "Chat"
- button "Image"
- button "Video"
- button "Music"
- textbox "Hey! I'm a smart AI chatbot. Ask me anything!"
- button "Inspire Me"
- button "Start Chatting" [disabled]
- text: Explore Our AI Generators Create
- link "AI Video Generator":
  - /url: /video
- link "AI Music Generator":
  - /url: /music
- link "AI Headshot Generator":
  - /url: /machine-learning-model/ai-headshots
- link "AI Selfie Generator":
  - /url: /machine-learning-model/ai-selfie-generator
- link "AI 3D Model Generator":
  - /url: /3d-model-generator
- text: Edit
- link "AI Photo Editor":
  - /url: /machine-learning-model/image-editor
- link "Background Remover":
  - /url: /machine-learning-model/background-remover
- link "Colorizer":
  - /url: /machine-learning-model/colorizer
- link "Super Resolution":
  - /url: /machine-learning-model/torch-srgan
- link "Expand Image":
  - /url: /machine-learning-model/zoom-out
- link "Image Replace":
  - /url: /image-replace
- text: Explore
- link "AI Radio":
  - /url: /radio
- text: Chat
- link "Voice Chat":
  - /url: /voice
- link "Text to Speech":
  - /url: /text-to-speech
- link "AI Characters":
  - /url: /characters
- text: Write
- link "AI Humanizer":
  - /url: https://undetectable.ai/ai-humanizer?utm_source=deepai&utm_medium=footer&utm_campaign=deep1&sl=deepaifooter&htrafficsource=deepai
- link "Essay Writer":
  - /url: /essay-writer
- link "SEO Writer":
  - /url: https://undetectable.ai/ai-seo-writer?utm_source=deepai&utm_medium=footer&utm_campaign=deep1&sl=deepaifooter&htrafficsource=deepai
- img "dolphin"
- text: Disable Dolphin
- contentinfo:
  - link "flops Deep AI, Inc. ©":
    - /url: /
    - img "flops"
    - paragraph: Deep AI, Inc. ©
  - link "Submit Feedback":
    - /url: /feedback
  - link "Contact":
    - /url: mailto:team@deepai.org
  - link "Press":
    - /url: /press
  - link "Legal":
    - /url: /terms-of-service/terms-of-service
  - link "xlogo":
    - /url: https://twitter.com/DeepAI
    - img "xlogo"
  - link "linkedinlogo":
    - /url: https://www.linkedin.com/company/deepai
    - img "linkedinlogo"
  - link "instagramlogo":
    - /url: https://www.instagram.com/deepai_org/
    - img "instagramlogo"
  - link "tiktoklogo":
    - /url: https://www.tiktok.com/@_ai_creations
    - img "tiktoklogo"
  - link "redditlogo":
    - /url: https://www.reddit.com/r/DeepAI/
    - img "redditlogo"
- iframe
- iframe
- img
- img
- img
- img
```

# Test source

```ts
   1 | class SignIn {
   2 |     constructor(page) {
   3 |         this.page = page;
   4 |         this.deepSeekTextBox = page.locator("//textarea[@class='chatbox']");
   5 |         this.response = page.locator("//*[@class='markdownContainer']/div/p");
   6 |         this.nakuriLogin = page.locator("#login_Layer");
   7 |         this.pageTitle = page.locator("//*[@class='head']");
   8 |         this.nakuriEmail = page.locator("//*[contains(text(),'Email ID / Username')]/following-sibling::input");
   9 |         this.nakuriPswd = page.locator("//*[contains(text(),'Password')]/following-sibling::input");
  10 |         this.nakuriCredSubmit = page.locator("button[class='btn-primary loginButton']");
  11 |         this.profileUpdate = page.locator("//div[@class='view-profile-wrapper']/a");
  12 |         this.editProfileIcon = page.locator("//*[contains(text(),'Resume headline')]/parent::div/span[@class='edit icon']");
  13 |         this.AboutTextArea = page.locator("//*[@class='input-field s12']/textarea");
  14 |         this.updateProfile = page.locator("//*[@class='action s12']/button");
  15 |         this.nakuriDropDown = page.locator("//*[@class='nI-gNb-drawer__icon']");
  16 |         this.nakuriLogout = page.locator("//*[@data-type='logoutLink']");
  17 |     }
  18 |
  19 |     async navigateToDeepAiPage() {
> 20 |         await this.page.goto("https://deepai.org/", { timeout: 60000 });
     |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
  21 |     }
  22 |
  23 |     async navigateToNakuriPage() {
  24 |         await this.page.goto("https://www.naukri.com/", { timeout: 60000 });
  25 |     }
  26 |
  27 |     async deepAi() {
  28 |         const prompt = "Rephrase the text: Having a good experience in Automation testing, manual testing, and API testing. Summarize it into a 3-4 line paragraph.";
  29 |         await this.deepSeekTextBox.fill(prompt);
  30 |
  31 |     }
  32 |
  33 |     async deepAiResponse() {
  34 |         
  35 |         return await this.response.innerText();
  36 |     }
  37 |
  38 |     async nakuri(deepAiResp,email,pswd) {
  39 |         await this.nakuriLogin.click();
  40 |         await this.nakuriEmail.fill(email);
  41 |         await this.nakuriPswd.fill(pswd);
  42 |         await this.nakuriCredSubmit.click();
  43 |         await this.profileUpdate.waitFor();
  44 |         await this.profileUpdate.click();
  45 |         await this.editProfileIcon.click();
  46 |         await this.AboutTextArea.fill(deepAiResp);
  47 |         await this.updateProfile.click();
  48 |     }
  49 |
  50 |     async nakuriPageLogout(){
  51 |         await this.nakuriDropDown.click();
  52 |         await this.nakuriLogout.click();
  53 |     }
  54 | }
  55 |
  56 | module.exports=SignIn;
```