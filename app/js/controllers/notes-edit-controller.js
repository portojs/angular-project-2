/**
 * Created by Peter on 26.10.2015.
 */
angular.module('myApp')
  .controller('NotesEditController', function($scope, $http){
    $scope.updateNote = function(noteObj) {
      $http({method: 'PUT', url: '/notes', data: noteObj});
    }
  });