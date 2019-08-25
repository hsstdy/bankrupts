angular.module('FirstApp')
  .controller('TranslateToolShowController' ,
    [ 
      '$scope'
      , 'TranslateRequestService'
      , function(
        $scope
        , TranslateRequestService
      ) {
        /**
         *
         */
        $scope.load = function() {
          TranslateRequestService.getSupportLanguages(function() {
            $scope.langs = langs;
          });
        }
        /**
         *
         */
        $scope.translate = function() {
          TranslateRequestService.translateText($scope.text, $scope.to, function() {
            $scope.result = text;
          });
        }
      }
    ]
  );

