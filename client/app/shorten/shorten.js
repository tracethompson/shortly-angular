angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(isValid){
    console.log("called function");
    //post new links to the server
    if(isValid){
      Links.addLink($scope.link)
      .then(function(resp){
        $location.path('/links');
      })
    }
  };
});