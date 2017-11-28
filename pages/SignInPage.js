'use strict';

var SignInPage = function(){
  var sigInButton = element(by.id('SubmitLogin'));
  var emailInput = element(by.id('email'));
  var passwordInput = element(by.id('passwd'));

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  }

  this.login = function (email, password) {
    emailInput.sendKeys(email)
    passwordInput.sendKeys(password);
    sigInButton.click();
    // this.emailInput.sendKeys(email);
    // this.passwordInput.sendKeys(password);
    // this.sigInButton.click();
  }



  this.failMessage = function(){
    return $('.alert-danger > ol > li').getText();
  }



}

module.exports = SignInPage;
