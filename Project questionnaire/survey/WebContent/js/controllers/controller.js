angular.module('surveyWeb').
controller('mainCtrl',function($scope,$location){

	 var indexId = 1;
    $scope.surveys = [];
    $scope.surveys.push({ Id: indexId++, Name: "S1" });
    $scope.surveys.push({ Id: indexId++, Name: "S2" });
    $scope.surveys.push({ Id: indexId++, Name: "S3" });
    $scope.surveys.push({ Id: indexId++, Name: "S4" });
    $scope.surveys.push({ Id: indexId++, Name: "S5" });

    $scope.changeView = function(){
    	if($scope.categoryId==0){
    		$location.url('/');
    	}else{
    		$location.url('/survey');
    	}
    }
}).
controller('formController', function($scope) {
	    
	$scope.getClass = function () {
        if($scope.currentIndex === $scope.noOfQues){
        	return 'disabled';
        }
    }
	
	$scope.noOfQues = 10;
	$scope.pages=[];
	
	var pageLst = function(){
		for(var i=1;i<=$scope.noOfQues;i++){
			if(i===1){
				$scope.pages.push({id:i,state:'',active:true});
			}else{
				$scope.pages.push({id:i,state:''});
			}
		}
	}
	
	pageLst();
	
	
	$scope.currentIndex =1;
   // we will store all of our form data in this object
   	    $scope.formData = {};

   	    // function to process the form
   	    $scope.processForm = function() {
	        alert('awesome!');
		}

		$scope.moveNext = function(){
			$scope.currentIndex++;

			$('ul li a').each(function(index,element){
				if($(this).text() === $scope.currentIndex.toString()){
					$(this).addClass('active');
				}else{
					$(this).removeClass('active');
				}
			})
		}
$scope.statuses = [{
        id: 1,
        name: "Low"
    }, {
        id: 2,
        name: "Normal"
    }, {
        id: 3,
        name: "High"
    }];
    $scope.selected_status = 3;
}).directive('bsDropdown', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            items: '=dropdownData',
            doSelect: '&selectVal',
            selectedItem: '=preselectedItem'
        },
        link: function (scope, element, attrs) {
            var html = '';
            switch (attrs.menuType) {
                case "button":
                    html += '<div class="btn-group"><button class="btn button-label btn-info">Action</button><button class="btn btn-info dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>';
                    break;
                default:
                    html += '<div class="dropdown"><a class="dropdown-toggle" role="button" data-toggle="dropdown"  href="javascript:;">Dropdown<b class="caret"></b></a>';
                    break;
            }
            html += '<ul class="dropdown-menu"><li ng-repeat="item in items"><a tabindex="-1" data-ng-click="selectVal(item)">{{item.name}}</a></li></ul></div>';
            element.append($compile(html)(scope));
            for (var i = 0; i < scope.items.length; i++) {
                if (scope.items[i].id === scope.selectedItem) {
                    scope.bSelectedItem = scope.items[i];
                    break;
                }
            }
            scope.selectVal = function (item) {
                function selector(sel, htmlCont)
                {
                    var elems = document.querySelectorAll(sel);
                    Array.prototype.forEach.call(elems, function(el, i){
                        el.innerHTML = htmlCont;
                    });
                }
                switch (attrs.menuType) {
                    case "button":
                        selector('button.button-label', item.name);
                        break;
                    default:
                        selector('a.dropdown-toggle', '<b class="caret"></b> ' + item.name);
                        break;
                }
                scope.doSelect({
                    selectedVal: item.id
                });
            };
            scope.selectVal(scope.bSelectedItem);
        }
    };
});