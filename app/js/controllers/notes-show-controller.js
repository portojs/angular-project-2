/**
 * Created by Peter on 18.10.2015.
 */
angular.module('myApp')
  .controller('NotesShowController', function($http, $routeParams){
    var controller = this;
    $http({method: 'GET', url: 'json/note-' + $routeParams.id +'.json'})
      .success(function(data) {
        controller.note = data;
      });
  });