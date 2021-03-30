// Dependencies are stored inside of the array of the module
var myTomoApp = angular.module('myTomoApp', []);

myTomoApp.controller('TomoController', ['$scope',function($scope){
  
  $scope.message = "Hello!";

  $scope.people = [
    { name: "Tomo", favFood: "Fish and Chips", salary: 50 },
    { name: "Patrick", favFood: "Bagel", salary: 40 },
    { name: "Sam", favFood: "Burrito", salary: 20 },
    { name: "Snickers", favFood: "Big Mac", salary: 10 }
  ];
}]); 