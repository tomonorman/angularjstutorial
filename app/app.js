// Dependencies are stored inside of the array of the module
var myTomoApp = angular.module('myTomoApp', ['ngRoute']);

myTomoApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'TomoController'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'TomoController'
    }).otherwise({
      redirectTo: '/home'
    });
}]);

myTomoApp.directive('randomPerson', [function(){

  return {
    restrict: 'E',
    scope: {
      people: '=',
      title: '='
    },
    templateUrl: 'views/random.html',
    controller: function($scope){
      $scope.random = Math.floor(Math.random() * 4);
    }
  };
}]);

myTomoApp.controller('TomoController', ['$scope', '$http', function($scope, $http){
  
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

  $http.get('data/people.json').then(function(response){
    $scope.people = response.data;
  });

}]); 

