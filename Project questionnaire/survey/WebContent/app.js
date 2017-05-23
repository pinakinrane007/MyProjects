var surveyWeb = angular.module('surveyWeb', ['ngRoute', 'ngAnimate','ui.bootstrap']);
surveyWeb.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'mainCtrl'
      }).when('/survey', {
          templateUrl: 'partials/survey.html',
          controller: 'formController'
        });
}])