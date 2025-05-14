# Test info

- Name: DeepAI rephrasing and Naukri profile update
- Location: C:\Users\Shaik_Afroz\playWrightProjects\nplay\nakuri\play\tests\DeepSeek.spec.js:5:1

# Error details

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//*[@class=\'markdownContainer\']/div/p')

    at SignIn.deepAiResponse (C:\Users\Shaik_Afroz\playWrightProjects\nplay\nakuri\play\pages\signIn.js:35:36)
    at C:\Users\Shaik_Afroz\playWrightProjects\nplay\nakuri\play\tests\DeepSeek.spec.js:10:39
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
- button:
  - img
- link "New Chat":
  - /url: ""
  - img
  - text: New Chat
- complementary:
  - text: Chat History Today New Chat ⋮
  - link "Upgrade to DeepAI Pro More access to the best models":
    - /url: javascript:void(0);
  - button "Delete Chat History"
- main:
  - heading "AI Chat" [level=1]
  - heading "AI Chat is an AI chatbot that writes text. You can use it to write stories, messages, or programming code." [level=3]
  - textbox "Message AI Chat..."
  - button "Standard":
    - text: Standard
    - img
  - button "Mic Icon":
    - img "Mic Icon"
  - button:
    - img
  - button:
    - img
  - link "Chat with AI Characters!":
    - /url: /characters
  - link "AI Text Generator":
    - /url: /chat/text-generator
  - link "Math AI":
    - /url: /chat/mathematics
  - link "AI Poem Generator":
    - /url: /chat/poet
  - link "AI Storyteller":
    - /url: /chat/storyteller
  - link "ChatGPT Alternative":
    - /url: /chat/chatgpt-alternative
  - link "GPT Chat":
    - /url: /chat/gpt-chat
  - link "AI Relationship Coach":
    - /url: /chat/relationships
  - link "More":
    - /url: javascript:void(0)
  - textbox "Edit Message...": "Rephrase the text: Having a good experience in Automation testing, manual testing, and API testing. Summarize it into a 3-4 line paragraph."
  - button "Regenerate"
  - button "Delete"
  - text: Considering ..
- text: Deleting a Character Are you sure you want to delete this character? This action cannot be undone.
- button "Delete"
- button "Cancel"
- contentinfo
- button "Close Ad"
- img "Freestar"
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
  20 |         await this.page.goto("https://deepai.org/", { timeout: 60000 });
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
> 35 |         return await this.response.innerText();
     |                                    ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
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