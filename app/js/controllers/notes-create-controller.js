/**
 * Created by Peter on 19.10.2015.
 */
angular.module('myApp')
  .controller('NotesCreateController', function($http) {
    var controller = this;
    controller.note = null;
    this.saveNote = function(note) {
      controller.errors = null;
      $http({method: 'PUT', url: '', data: note})
        .catch(function(note) {
          controller.errors = note.data.error;
        });
        controller.note = note;
    };
  });