module.exports = {
    'Login com sucesso': (browser) => {
        let userInfo = ".user .info span"

        let login = browser.page.login()
        let login = browser.page.login()

        browser.resizeWindow(1920, 1080)

        login.navigate()
            .waitForElementVisible("@form", 3000)
            .setValue("@emailInput", "pedro@teste.com")
            .setValue("@passInput", "pwd123")
            .click("@loginButton")

        browser
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, "Pedro")
            .end();
    }
}