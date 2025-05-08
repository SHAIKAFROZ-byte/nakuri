class SignIn {
    constructor(page) {
        this.page = page;
        this.deepSeekTextBox = page.locator("//textarea[@class='chatbox']");
        this.response = page.locator("//*[@class='markdownContainer']/div/p");
        this.nakuriLogin = page.locator("#login_Layer");
        this.pageTitle = page.locator("//*[@class='head']");
        this.nakuriEmail = page.locator("//*[contains(text(),'Email ID / Username')]/following-sibling::input");
        this.nakuriPswd = page.locator("//*[contains(text(),'Password')]/following-sibling::input");
        this.nakuriCredSubmit = page.locator("button[class='btn-primary loginButton']");
        this.profileUpdate = page.locator("//div[@class='view-profile-wrapper']/a");
        this.editProfileIcon = page.locator("//*[contains(text(),'Resume headline')]/parent::div/span[@class='edit icon']");
        this.AboutTextArea = page.locator("//*[@class='input-field s12']/textarea");
        this.updateProfile = page.locator("//*[@class='action s12']/button");
        this.nakuriDropDown = page.locator("//*[@class='nI-gNb-drawer__icon']");
        this.nakuriLogout = page.locator("//*[@data-type='logoutLink']");
    }

    async navigateToDeepAiPage() {
        await this.page.goto("https://deepai.org/", { timeout: 60000 });
    }

    async navigateToNakuriPage() {
        await this.page.goto("https://www.naukri.com/", { timeout: 60000 });
    }

    async deepAi() {
        const prompt = "Rephrase the text: Having a good experience in Automation testing, manual testing, and API testing. Summarize it into a 3-4 line paragraph.";
        await this.deepSeekTextBox.fill(prompt);

    }

    async deepAiResponse() {
        
        return await this.response.innerText();
    }

    async nakuri(deepAiResp,email,pswd) {
        await this.nakuriLogin.click();
        await this.nakuriEmail.fill(email);
        await this.nakuriPswd.fill(pswd);
        await this.nakuriCredSubmit.click();
        await this.profileUpdate.waitFor();
        await this.profileUpdate.click();
        await this.editProfileIcon.click();
        await this.AboutTextArea.fill(deepAiResp);
        await this.updateProfile.click();
    }

    async nakuriPageLogout(){
        await this.nakuriDropDown.click();
        await this.nakuriLogout.click();
    }
}

module.exports=SignIn;