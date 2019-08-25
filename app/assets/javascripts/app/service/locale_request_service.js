/**
 * 
 */
angular.module('FirstApp')
  .service('LocaleRequestService', [
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
          url: '/locales/index',
          params: params
        }).then(
          function(success) {
            this.data = success.data;
            func.call(this);
          },
          function(error) {
            console.log(error);
          }
        );
      }
      /**
       *
       */
      this.save = function(data, func) {
        $http({
          method: 'POST',
          url: '/locales/save',
          data: data
        }).then(
          function(success) {
            func.call(this);
          },
          function(error) {
            console.log(error);
          }
        );
      }
    }
  ]);
