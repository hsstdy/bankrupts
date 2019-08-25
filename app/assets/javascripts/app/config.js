angular.module('FirstApp').config([
  "$httpProvider"
  , "$translateProvider"
  , function(
    $httpProvider
  , $translateProvider
  ) {
    // CSRF
    var csrfToken = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.headers.post['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.put['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.patch['X-CSRF-Token'] = csrfToken;
    $httpProvider.defaults.headers.delete = {'X-CSRF-Token': csrfToken};
    // Translate
    $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
    });
    $translateProvider.determinePreferredLanguage();
    $translateProvider.fallbackLanguage('en');
    //$translateProvider.useMissingTranslationHandlerLog();
    //$translateProvider.useLocalStorage();
  }]);
