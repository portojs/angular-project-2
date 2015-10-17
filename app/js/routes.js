/**
 * Created by Peter on 17.10.2015.
 */
angular.module('myApp')
  .config(function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: '/templates/pages/about/index.html'
    })
  });