// Dependencies are stored inside of the array of the module
var myTomoApp = angular.module('myTomoApp', []);

myTomoApp.controller('TomoController', ['$scope',function($scope){
  
$scope.removePerson = function(person){
  var removedPerson = $scope.people.indexOf(person);
  $scope.people.splice(removedPerson, 1);
};

$scope.addPerson = function(){
  $scope.people.push({
    name: $scope.newperson.name,
    favFood: $scope.newperson.favFood,
    salary: parseInt($scope.newperson.salary),
    available: true
  });

  $scope.newperson.name = "";
  $scope.newperson.favFood = "";
  $scope.newperson.salary = "";
};

  $scope.people = [
    { name: "Tomo", favFood: "Fish and Chips", salary: 50, available: true },
    { name: "Patrick", favFood: "Bagel", salary: 40, available: false },
    { name: "Sam", favFood: "Burrito", salary: 20, available: true },
    { name: "Snickers", favFood: "Big Mac", salary: 10, available: true }
  ];
}]); 