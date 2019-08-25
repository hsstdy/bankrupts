angular.module('FirstApp')
  .controller('RequestToolController', [
    '$scope'
    , '$http'
    , function(
      $scope
      , $http
    ){
      /**
       * 
       */
      $scope.clickRequest = function() {
        $scope.result = "";
        var data;
        if ($scope.json) {
          data = JSON.parse($scope.json);
        }
        $http({
          method: $scope.method,
          url: $scope.path,
          data: data
        }).then(
          function(success) {
            $scope.result = success;
          },
          function(error) {
            $scope.result = error;
          }
        )
      }
    }
  ]);
