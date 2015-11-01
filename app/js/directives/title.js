/**
 * Created by Peter on 01.11.2015.
 */
angular.module('myApp')
  .directive('title', function($timeout) {
    return function(scope, element) {
      $timeout(function() {
        element.tooltip({ container: "body"});
      });
    };
  });