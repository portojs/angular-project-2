'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute'])
  .directive('mainHeader', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html'
    };
  })
  .directive('myappCard', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/card.html',
      scope: {
        header: "=",
        body: "=",
        image: "=",
        id: "="
      },
      link: function(scope, element, attrs){
        element.on('click', function(){
          element.find('p').toggleClass('hidden');
        });
        console.log(attrs.title);
      }
    };
  });