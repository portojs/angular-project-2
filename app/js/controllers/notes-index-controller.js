/**
 * Created by Peter on 18.10.2015.
 */
angular.module('myApp')
  .controller('NotesIndexController', function($http) {
    var controller = this;
    $http({method: 'GET', url: 'json/notes.json'}).success(function(data) {
      controller.notes = data;
    });
  });