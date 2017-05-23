var app3 = angular.module('foodMod',[])
           .controller('insertController',function($scope){
			   $scope.repeat = function(){
				 $scope.message = 'test.html';  
			   };
		   });