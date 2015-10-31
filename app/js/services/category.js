/**
 * Created by Peter on 31.10.2015.
 */
angular.module('myApp')
  .factory('Category', function CategoryFactory($resource) {
    return $resource('json/categories.json', {}, {});
  });