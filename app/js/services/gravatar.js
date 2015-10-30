/**
 * Created by Peter on 29.10.2015.
 */
angular.module('myApp')
  .provider('Gravatar', function GravatarProvider(){
    var avatarSize = 80; // Default size
    var avatarUrl = 'http://www.gravatar.com/avatar/';
    this.setSize = function(size) {
      avatarSize = size;
    };
    this.$get = function() {
      return function(email) {
        return avatarUrl + CryptoJS.MD5(email) + "?size=" + avatarSize.toString();
      }
    }
  });