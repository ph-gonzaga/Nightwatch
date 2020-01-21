module.exports = {
    //'login com sucessso': function(browser){
    //    var userInfo = ".user .info span"
    //    browser
    //    .resizeWindow(1920,1080)
    //    .url("http://zombie-web:5000/login")
    //    .waitForElementVisible(".card-login", 3000)
    //    .setValue("input[name=email]", "pedro@teste.com")
    //    .setValue("input[name=password]", "pwd123")
    //   .click(".login-button")
    //    .waitForElementVisible(userInfo, 3000)
    //   .assert.containsText(userInfo, "Pedro")
    //    .end();
    //},
    before: (browser) => {
        browser.resizeWindow(1920,1080)
    },

    after: (browser) => {
        browser.end();
    },

    '@disabled': true,
    
    'Senha incorreta':(browser) => {
        let alert = ".alert-danger"
        browser
        .resizeWindow(1920,1080)
        .url("http://zombie-web:5000/login")
        .waitForElementVisible(".card-login", 3000)
        .setValue("input[name=email]", "pedro@teste.com")
        .setValue("input[name=password]", "123")
        .click(".login-button")
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Usuário e/ou senha inválidos')
    },
    'Não cadastrado': (browser) => {
        let alert = ".alert-danger"
        browser
        .resizeWindow(1920,1080)
        .url("http://zombie-web:5000/login")
        .waitForElementVisible(".card-login", 3000)
        .setValue("input[name=email]", "pedro404@teste.com")
        .setValue("input[name=password]", "pwd123")
        .click(".login-button")
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Usuário e/ou senha inválidos')
    },
    'Email não informado': (browser) => {
        let alert = ".alert-info"
        browser
        .resizeWindow(1920,1080)
        .url("http://zombie-web:5000/login")
        .waitForElementVisible(".card-login", 3000)
        .setValue("input[name=email]", "")
        .setValue("input[name=password]", "pwd123")
        .click(".login-button")
        .waitForElementVisible(alert, 3000)
        .assert.containsText(alert, 'Opps. Cadê o email?')
        .end();
    }
}