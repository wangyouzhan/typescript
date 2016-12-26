/**
 * Created by wangyouzhan on 2016/12/24.
 */


var helloModule = angular.module('bookapp',['CommonController','Controller2','Controller1']);

helloModule.controller('helloNgCtrl',[
   '$scope',function ($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);



// var myModule = angular.module("MyModule",[]);
//
// myModule.directive("hello", function () {
//     return {
//         restrict: 'E',
//         template: '<div>Hi everyone !</div>',
//         replace: true
//     }
// });


function CommonController($scope){
	$scope.commonFn = function(){
		alert("这里是通用功能");
	};
}

function Controller1($scope){
	$scope.greeting = {
		text: 'Hello1'
	};
	$scope.text1 = function(){
		alert("test1");
	};

}

function Controller2($scrope){
	$scrope.greeting = {
		text: 'Hello2'
	};
	$scrope.test2 = function(){
		alert("test2");
	}
}
