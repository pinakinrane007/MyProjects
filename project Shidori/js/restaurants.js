var app = angular.module('myModule',[])
          .controller('myController',function($scope,$http){
			 
		     $http.get("data/restaurants.json").
		     then(function(response){
		    	 $scope.restaurants = response.data;
		     })
			
		  });