angular.module('FirstApp')
  .controller('TranslateIndexToolController' ,
    [
      '$scope'
      , '$timeout'
      , '$filter'
      , 'TranslateRequestService'
      , 'LocaleRequestService'
      , function(
        $scope
        , $timeout
        , $filter
        , TranslateRequestService
        , LocaleRequestService
      ){
        /**
         *
         */
        $scope.load = function() {
          $scope.data = {};
          //
          TranslateRequestService.getSupportLanguages(function() {
            $scope.langs = langs;
          });
          //
          LocaleRequestService.index(null, function() {
            $scope.data.locales = data.locales;
            $scope.data.keys = data.keys;
            $scope.langKey = 'ja';
          });
        }
        /**
         * 
         */
        $scope.translate = function() {
          var langKey = $scope.langKey;
          var texts = getTexts(langKey);
          requestTranslate(texts, $scope.toLangKey);
        }
        /**
         *
         */
        $scope.translateAll = function() {
          var langKey = $scope.langKey;
          var texts = getTexts(langKey);
          // Each Langualges
          $scope.langs.forEach(function(lang) {
            if (lang.key != langKey) {
              requestTranslate(texts, lang.key);
            }
          });
        }
        /**
         *
         */
        $scope.save = function() {
          LocaleRequestService.save($scope.data, function() {
            alert("success");
          });
        }

        /**
         *
         */
        var getTexts = function(langKey) {
          return texts = $scope.data.locales.filter(function(item) {
            return item.lang == langKey;
          });
        }
        /**
         *
         */
        var requestTranslate = function(texts, langKey) {
          // Each Texts
          texts.forEach(function(from) {
            var locale = $scope.data.locales.find(function(locale) {
              return locale.lang == langKey && locale.key == from.key;
            });
            if (!locale) {
              locale = {
                lang: langKey,
                key: from.key,
                text: ''
              }
              $scope.data.locales.push(locale);
            }
            TranslateRequestService.translateText(from.text, langKey, function() {
              locale.text = text;
            });
          });
        }
      }
    ]);
