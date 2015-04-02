angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function(){
    //get all links from the server
    Link.getLinks($scope.data)
  };
});
