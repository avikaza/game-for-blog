'use strict';
////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////
// Declare app module and its dependencies on views, and components
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