'use strict';

/**
 * @ngdoc overview
 * @name groundhopper3kApp
 * @description
 * # groundhopper3kApp
 *
 * Main module of the application.
 */
angular
  .module('groundhopper3kApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/stadiums', {
        templateUrl: 'views/stadiums.html'
        //controller: 'AboutCtrl',
        //controllerAs: 'stadium'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  // mongodb setup
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/stadium');
  var stadium = require('./app/models/stadium');
