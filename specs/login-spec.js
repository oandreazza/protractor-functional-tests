'use strict';
var SignInPage = require('../pages/SignInPage.js')

describe('SignInPage suite scenarios', function() {
  var page;

  beforeEach(function(){
    page = new SignInPage();
    page.get();

  })

  it('Should show authentication failed when enter invalid user and password', function() {
    page.login('mauricio.webdev@gmail.com','123123');
    expect(page.failMessage()).toEqual('Authentication failed.');
  });

  it('Should inform that password is mandatory', function(){
    page.login('mauricio.webdev@gmail.com','');
    expect(page.failMessage()).toEqual('Password is required.');
  })

  it('Should inform that email is mandatory', function() {
    page.login('','123123');
    expect(page.failMessage()).toEqual('An email address required.');
  })

  it('Should login with email and password', function(){
    expect(page.getEmailInput().isPresent()).toBe(true);
    expect(page.getPasswordInput().isPresent()).toBe(true);
  })


});
