'use strict'

var AuthenticatedPage = function(){
  var userInfoBox = $('.header_user_info')


  this.isAuthenticated = function(){
    return userInfoBox.isPresent();
  }
}

module.exports = AuthenticatedPage;
