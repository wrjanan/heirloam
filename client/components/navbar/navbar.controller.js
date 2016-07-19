'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },{
    'title': 'Camera',
    'state': 'camera'
  },{
    'title': 'Garden',
    'state': 'garden'
  },{
    'title': 'About Us',
    'state': 'about'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('heirloamApp.navbar')
  .controller('NavbarController', NavbarController);
