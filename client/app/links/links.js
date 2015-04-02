angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getLinks = function(){
    console.log("ran getLinks on load");
    //get all links from the server
    Links.getLinks()
    .then(function(links){
      $scope.data = links
      console.log($scope.data)
    })
    .catch(function(err){
      console.log(err);
    })
  };

  $scope.getLinks();
});
