/**
 * Created by Peter on 17.10.2015.
 */
angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'templates/pages/about/index.html'
      })
      .when('/notes', {
        templateUrl: 'templates/pages/notes/index.html'
      })
      .when('/users', {
        templateUrl: 'templates/pages/users/index.html'
      })
      .when('/', {
        templateUrl: 'templates/pages/about/index.html'
      })
      .otherwise({ redirectTo: '/'});
  });