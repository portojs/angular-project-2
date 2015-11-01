'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngRoute', 'ngResource'])
  .config(function(GravatarProvider){
    GravatarProvider.setSize(150);
  })
  .directive('mainHeader', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/main-header.html'
    };
  })
  .directive('myappCard', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/card.html',
      scope: {
        header: "=",
        body: "=",
        image: "=",
        id: "=",
        category: "="
      },
      link: function(scope, element, attrs) {
        element.on('click', function(){
          element.find('p').toggleClass('hidden');
        });
        console.log(attrs.title);
      }
    };
  })
  .directive('myappCategorySelect', function(Category) {
    return {
      replace: true,
      restrict: 'E',
      templateUrl: 'templates/directives/myapp-category-select.html',
      scope: {
        activeCategory: "="
      },
      link: function(scope, element, attrs) {
        scope.categories = Category.query();
      },
      controller: function($scope) {
        this.getActiveCategory = function() {
          return $scope.activeCategory;
        };
        this.setActiveCategory = function(category) {
          $scope.activeCategory = category.name;
        };
      }
    }
  })
  .directive('myappCategoryItem', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/myapp-category-item.html',
      scope: {
        category: '='
      },
      require: "^myappCategorySelect",
      link: function(scope, element, attrs, myappCategorySelect) {
        scope.makeActive = function() {
          myappCategorySelect.setActiveCategory(scope.category);
        };
        scope.categoryActive = function() {
          return myappCategorySelect.getActiveCategory() === scope.category.name;
        };
      }
    }
  });