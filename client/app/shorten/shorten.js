angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(){
    console.log("called function");
    //post new links to the server
    Links.addLink($scope.link)
    .then(function(resp){
      //do something with the response
      $location.path('/links');
    })
  };
});