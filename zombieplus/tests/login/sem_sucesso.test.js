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
    'Dado que eu acesso a pagina de login':(browser) => {
        browser
        .resizeWindow(1920,1080)
        .url("http://zombie-web:5000/login")
        .waitForElementVisible(".card-login", 3000)
        
    },
    'Quando eu faço login com dados invalidos': function (browser){
        browser
        .setValue("input[name=email]", "pedro@teste.com")
        .setValue("input[name=password]", "123")
        .click(".login-button")
    },
    'Então o alert devera ser apresentado': function (browser){
        let alert = ".alert"
        browser
        .waitForElementVisible(alert, 3000)
        .end();
    }
}