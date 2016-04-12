angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {

  $scope.trendingUrl = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=100"
  $scope.trendingGifs = [];

  $scope.trending = $http.get($scope.trendingUrl).success(function(data){
    for(var i = 0; i < data.data.length; i++){
      $scope.trendingGifs.push(data.data[i].images.original.url);
    };
  });
})

.controller('ChatsCtrl', function($scope, $http) {

  $(".container").on("submit", ".searchForm", function(e){
        e.preventDefault();
        var data = $(this).serialize();
        console.log(data);

        var api = "http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC&";
        var query = data + "&limit=100";
        var url = api + query;
        $scope.searchGifs = [];

        var results = $http.get(url).success(function(data){
          console.log(data);
          for(var i = 0; i < data.data.length; i++){
            $scope.searchGifs.push(data.data[i].images.original.url);
          }
        });
        $(".container").append(results);
      })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
