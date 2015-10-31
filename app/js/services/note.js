/**
 * Created by Peter on 26.10.2015.
 */
angular.module('myApp')
  .factory('Note', function NoteFactory($resource){
    return $resource("json/notes.json", {}, {
      update: {
        method: 'PUT'
      }
    });
    //  all: function() {
    //    return $http({method: 'GET', url: 'json/notes.json'});
    //  },
    //  create: function(note) {
    //    return $http({method: 'POST', url: '/notes', data: note});
    //  }
  });