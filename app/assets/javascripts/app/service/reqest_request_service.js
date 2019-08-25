angular.module('FirstApp')
  .service('RequestRequestService', [
    '$http'
    , function(
      $http
    ) {
      /**
       * 
       */
      this.index = function(params, func) {
        $http({
          method: 'GET',
          url: 'requests/index' ,
          params: params
        }).then(
          function(success) {
            this.requests = success.data;
            func.call(this);
          },
          function(error) {
            console.log(error);
          }
        )
      }
      /**
       *
       */
      this.create = function(request, func) {
        $http({
          method: 'POST',
          url: 'requests/create',
          data: request
        }).then(
          function(success) {
            func.call(this);
          },
          function(error) {
            console.log(error)
          }
        )
      }
    }
  ]);
