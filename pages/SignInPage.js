'use strict';

var SignInPage = function(){
  var sigInButton = $('#SubmitLogin');
  var emailInput = $('#email');
  var passwordInput = $('#passwd');

  this.get = function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  }

  this.getEmailInput = function(){
    return emailInput;
  }

  this.getPasswordInput = function(){
    return passwordInput;
  }

  this.login = function (email, password) {
    emailInput.sendKeys(email)
    passwordInput.sendKeys(password);
    sigInButton.click();
  }

  this.failMessage = function(){
    return $('.alert-danger > ol > li').getText();
  }



}

module.exports = SignInPage;
