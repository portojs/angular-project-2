/**
 * Created by Peter on 18.10.2015.
 */
angular.module('myApp')
  .controller('NotesIndexController', function($scope, Note) {
    Note.all()
      .success(function(data) {
        alert(data);
        $scope.notes = data;
      });
  });