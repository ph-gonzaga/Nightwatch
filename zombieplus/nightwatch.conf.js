require('babel-core/register')

const chromedriver = require('chromedriver');

module.exports = {
  //Pasta onde fica o código dos testes automatizados
  src_folders: ['tests'],

  webdriver: {
        start_process: true,
        port: 9515,
        server_path: chromedriver.path
  },

  test_settings: {
    default: {
      desiredCapabilities : {
        browserName : 'chrome'
      }
    }
  }
}
