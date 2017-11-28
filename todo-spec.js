'use strict';
var SignInPage = require('./pages/SignInPage.js')
 var fs = require('fs');

describe('angularjs homepage todo list', function() {
  it('Should show authentication failed when enter invalid user and password', function() {

    var page = new SignInPage();
    page.get();
    page.login('mauricio.webdev@gmail.com','123123');
    browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'exception.png');
    });;
    expect(page.failMessage()).toEqual('Authentication failed.');
    // browser.get('https://angularjs.org');
    //
    // element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    // element(by.css('[value="add"]')).click();
    //
    // var todoList = element.all(by.repeater('todo in todoList.todos'));
    // expect(todoList.count()).toEqual(3);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');
    //
    // // You wrote your first test, cross it off the list
    // todoList.get(2).element(by.css('input')).click();
    // var completedAmount = element.all(by.css('.done-true'));
    // expect(completedAmount.count()).toEqual(2);
  });
});


function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
}
