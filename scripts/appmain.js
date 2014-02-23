//Define an angular module for our app
var app = angular.module('app', ['ngRoute']);

app.config(
  function($routeProvider) {
    $routeProvider
    .when('/courseview', {
        templateUrl: 'templates/main.html',
        controller: 'CourseCtrl'
      })
    .when('/planview/:courseid', {
        templateUrl: 'templates/course.html',
        controller: 'TempCtrl'
    })
      .otherwise({
          redirectTo: '/'
      });
});
