angular.module('FirstApp').config([
  "$routeProvider"
  , function(
    $routeProvider
  ) {
    $routeProvider
      .when('/bankrupts', {
        templateUrl: '/templates/bankrupts/index',
        controller: 'BankruptsIndexController',
      })
      .when('/tools/request', {
        templateUrl: '/templates/tools/request',
        controller: 'RequestToolController'
      })
      .when('/requests', {
        templateUrl: '/templates/requests/index',
        controller: 'RequestsIndexController'
      })
      .when('/tools/translate', {
        templateUrl: '/templates/tools/translates/show',
        controller: 'TranslateToolShowController'
      })
      .when('/tools/translates', {
        templateUrl: '/templates/tools/translates/index',
        controller: 'TranslateIndexToolController'
      })
      .otherwise('/bankrupts');
  }]);
