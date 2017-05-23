var app = angular.module('menuCard',[])
          .controller('menuController',function($scope,$http){
			 $http.get("data/foodItem.json").
			 then(function(response){
				 $scope.foods = response.data;
			 })
			 $scope.display = [];
              
           
            $scope.starters = function(){
				$scope.display = [];
				console.log('hello');
				for(var i = 0; i<$scope.foods.length; i++)
				{
					if($scope.foods[i].type == 'starter')
					{
						$scope.display.push($scope.foods[i]);
					}
				}
			};	
       $scope.mainCourse = function(){
				$scope.display = [];
				console.log('hello');
				for(var i = 0; i<$scope.foods.length; i++)
				{
					if($scope.foods[i].type == 'main course')
					{
						$scope.display.push($scope.foods[i]);
					}
				}
			};
          $scope.deserts = function(){
				$scope.display = [];
				console.log('hello');
				for(var i = 0; i<$scope.foods.length; i++)
				{
					if($scope.foods[i].type == 'desert')
					{
						$scope.display.push($scope.foods[i]);
					}
				}
			};
			$scope.myItems = [];
			$scope.cost = 0;
           $scope.cart1 = function(name,cost){
				     
					 $scope.myItems.push({name: name, cost: cost});
                     $scope.cost += cost;
					
			  };
            $scope.remove1= function(item,cost1){
				  $scope.cost -= cost1;
				  $scope.myItems.splice($scope.myItems.indexOf(item),1);
			  };			  
		  });