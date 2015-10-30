/**
 * Created by Peter on 29.10.2015.
 */
angular.module('myApp')
  .factory('User', [ '$http', function UserFactory($http){
    return {
      all: function() {
        return $http({method: 'GET', url: 'json/users.json'});
      }
    }
  }]);