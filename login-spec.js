'use strict';

describe('SignInPage suite scenarios', function() {

  it('Should show authentication failed when enter invalid user and password', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');

    $('#email').sendKeys('mauricio.webdev@gmail.com');
    $('#passwd').sendKeys('123123');
    $('#SubmitLogin').click();

    expect($('.alert-danger > ol > li').getText()).toEqual('Authentication failed.');
  });

  it('Should inform that password is mandatory', function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');

    $('#email').sendKeys('mauricio.webdev@gmail.com');
    $('#passwd').sendKeys('');
    $('#SubmitLogin').click();

    expect($('.alert-danger > ol > li').getText()).toEqual('Password is required.');

  })

  it('Should inform that email is mandatory', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');

    $('#email').sendKeys('');
    $('#passwd').sendKeys('123');
    $('#SubmitLogin').click();

    expect($('.alert-danger > ol > li').getText()).toEqual('An email address required.');
  })

  it('Should login with email and password', function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://automationpractice.com/index.php?controller=authentication&back=my-account');

    expect($('#email').isPresent()).toBe(true);
    expect($('#passwd').isPresent()).toBe(true);
  })
});
