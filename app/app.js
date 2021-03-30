// Dependencies are stored inside of the array of the module
var myTomoApp = angular.module('myTomoApp', []);

myTomoApp.controller('TomoController', ['$scope',function($scope){
  
  $scope.message = "Hello!";

  $scope.people = ["Tomo", "Alex", "Jason", "Patrick", "Sam", "Snickers"];
}]);