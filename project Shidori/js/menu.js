var app2 = angular.module('spa',['ngRoute']).
           config(function($routeProvider){
			   $routeProvider
			   .when('/starters',{
				   templateUrl : "templates/starter.html",
				   controller : "startersController"
			   })
			   .when('/main',{
				   templateUrl : "templates/mainCourse.html",
				   controller : "mainController"
			   })
			   .when('/deserts',{
				   templateUrl : "templates/desert.html",
				   controller : "desertsController"
			   })
		   })
		   .controller('startersController',function($scope){
			 $scope.starterName = 'chicken-tikka';  
		   })
		   .controller('mainController',function($scope){
			 $scope.dishName = 'chicken-tikka-masala';  
		   })
		   .controller('desertsController',function($scope){
			 $scope.desertName = 'ice-cream';  
		   });