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
        templateUrl: 'templates/pages/notes/index.html',
        controller: 'NotesIndexController',
        controllerAs: 'indexController'
      })
      .when('/notes/edit', {
        templateUrl: 'templates/pages/notes/edit.html',
        controller: 'NotesCreateController',
        controllerAs: 'createController'
      })
      .when('/notes/:id', {
        templateUrl: 'templates/pages/notes/show.html',
        controller: 'NotesShowController',
        controllerAs: 'showController'
      })
      .when('/users', {
        templateUrl: 'templates/pages/users/index.html'
      })
      .when('/contact', {
        templateUrl: 'templates/pages/about/contact.html'
      })
      .when('/list', {
        templateUrl: 'templates/pages/about/list.html'
      })
      .when('/', {
        templateUrl: 'templates/pages/about/index.html'
      })
      .otherwise({ redirectTo: '/'});
  });