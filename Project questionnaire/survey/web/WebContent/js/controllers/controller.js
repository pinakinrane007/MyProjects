var app = angular.module('myModule',['ngAnimate', 'ui.bootstrap'])
.controller('myController',function($scope,$http){
$scope.formObject={};
$scope.currentIndex=0;

$scope.colours = [{
	name: "Red",
	hex: "#F21B1B"
}, {
	name: "Blue",
	hex: "#1B66F2"
}, {
	name: "Green",
	hex: "#07BA16"
}];

      $scope.title = function(){
    	  $http.get("data/page_title.json").
    	  then(function(response){
    		  console.log(response.data);
    		  $scope.title1 = response.data[$scope.currentIndex].title;
    	  });
      }
      $scope.init = function(){
        $http.get("data/first_set_of_questions_1.json")
        .then(function(response) {
            console.log(response.data);
            $scope.questions = response.data;
            
        });
        $scope.title();
      }
      $scope.moveNext = function(index){
    	  	if(index == 0){
	        $http.get("data/second_set_of_questions_2.json",
	        			{params:{currentIndex:$scope.currentIndex}})
	        .then(function(response) {
	            console.log(response.data);
	            $scope.questions = response.data;
	        }
        
      
        
        );
	    }
    	  	if(index == 1){
    	  		$http.get("data/second_set_of_questions_3.json",
	        			{params:{currentIndex:$scope.currentIndex}})
	        .then(function(response) {
	            console.log(response.data);
	            $scope.questions = response.data;
	        }
        
      
        
        );
    	  	}
       
        
        $scope.currentIndex++;
        $scope.title();
          
        }
      
      $scope.status = {
    		    isopen: false
    		  };

    		  $scope.toggled = function(open) {
    		    $log.log('Dropdown is now: ', open);
    		  };

    		  $scope.toggleDropdown = function($event) {
    		    $event.preventDefault();
    		    $event.stopPropagation();
    		    $scope.status.isopen = !$scope.status.isopen;
    		  };

      $scope.init();
  }
);
app.run(function($rootScope) {
	angular.element(document).on("click", function(e) {
		$rootScope.$broadcast("documentClicked", angular.element(e.target));
	});
});
app.directive("bpDropdown", function($rootScope) {
    return {
		restrict: "E",
		template: '<div class="dropdown-container" ng-class="{ show: listVisible }">'+
	'<div class="dropdown-display" ng-click="show();" ng-class="{ clicked: listVisible }">'+
	'	<span ng-if="!isPlaceholder">{{display}}</span>'+
	'	<span class="placeholder" ng-if="isPlaceholder">{{placeholder}}</span>'+
		'<i class="fa fa-angle-down"></i>'+
	'</div>'+
	'<div class="dropdown-list">'+
	'	<div>'+
	'		<div ng-repeat="item in list" ng-click="select(item)" ng-class="{ selected: isSelected(item) }">'+
	'			<span>{{property !== undefined ? item[property] : item}}</span>'+
	'			<i class="fa fa-check"></i>'+
	'		</div>'+
	'	</div>'+
	'</div>'+
'</div>',
		scope: {
			placeholder: "@",
			list: "=",
			selected: "=",
			property: "@"
		},
		link: function(scope) {
			scope.listVisible = false;
			scope.isPlaceholder = true;

			scope.select = function(item) {
				scope.isPlaceholder = false;
				scope.selected = item;
				if (scope.onChange !== undefined)
					scope.onChange(item);
			};

			scope.isSelected = function(item) {
				if(angular.isDefined(scope.selected)){
					return item[scope.property] === scope.selected[scope.property];
				}
			};
			
			scope.show = function() {
				scope.listVisible = true;
			};

			$rootScope.$on("documentClicked", function(inner, target) {
				if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
					scope.$apply(function() {
						scope.listVisible = false;
					});
			});

			scope.$watch("selected", function(value) {
				if(angular.isDefined(scope.selected)){
					scope.isPlaceholder = scope.selected[scope.property] === undefined;
					scope.display = scope.selected[scope.property];
				}
			});
		}
	}
})
