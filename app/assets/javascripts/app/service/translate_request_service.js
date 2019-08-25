/**
 * 
 */
angular.module('FirstApp')
  .factory("rfc4122", function () {
    return {
      newuuid: function () {
        // http://www.ietf.org/rfc/rfc4122.txt
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";
        return s.join("");
      }
    }
  });
/**
 *
 */
angular.module('FirstApp')
  .service('TranslateRequestService', [
   '$http'
  ,'rfc4122'
  , function(
    $http
  , rfc4122
  ){
    var subscriptionKey = 'feae488a5f5641f0a479cd7e4149cc5d';
    var clientId = rfc4122.newuuid();
    /**
     *
     */
    this.getSupportLanguages = function(func) {
      $http(
        {
          method: 'GET',
          url: 'https://api.cognitive.microsofttranslator.com/languages?api-version=3.0',
          headers: {
            'Content-type': 'application/json',
            'X-ClientTraceId': clientId
          }
        }
      ).then(
        function(success) {
          this.langs = Object.keys(success.data.translation).map(function(key, index) {
            return {
              key: key,
              text: success.data.translation[key].name,
              index: index
            }
          });
          func.call(this, this.langs);
        },
        function(error){
          console.log(error);
        }
      );
    }
    /**
     * 
     */
    this.translateText = function(text, to, func){
      $http(
        {
          method: 'POST',
          url: 'https://api.cognitive.microsofttranslator.com//translate?api-version=3.0&to=' + to,
          headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Content-type': 'application/json',
            'X-ClientTraceId': clientId
          },
          data: [{
            'text': text
          }]
        }
      ).then(
        function(success) {
          var translation = success.data[0].translations.find(function(translation) {
            return translation.to == to;
          });
          if (translation) {
            this.text = translation.text;
          }
          func.call(this);
        },
        function(error){
          console.log(error);
        }
      );
    };
  }
]);

