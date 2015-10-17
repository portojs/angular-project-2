'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
  .directive('mainHeader', function(){
    return {
      restrict: 'E',
      templateUrl: '../templates/directives/main-header.html'
    };
  });

