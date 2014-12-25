'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.version',
  'myApp.services',
  'myApp.uiClasses',
  'myApp.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
var uiClasses = angular.module('myApp.uiClasses', []);
var myServices = angular.module('myApp.services', []);
var myDirectives = angular.module('myApp.directives', []);