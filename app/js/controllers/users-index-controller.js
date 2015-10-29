/**
 * Created by Peter on 29.10.2015.
 */
angular.module('myApp')
  .controller('UsersIndexController', function($scope, Gravatar, User) {
    $scope.gravatarUrl = function(email) {
      return Gravatar(email);
    };
    User.all()
      .success(function(data) {
        $scope.users = data;
      });
  });