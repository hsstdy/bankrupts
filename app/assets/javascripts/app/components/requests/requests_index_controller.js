angular.module('FirstApp')
  .controller('RequestsIndexController', [
    '$scope'
    , '$filter'
    , 'RequestRequestService'
    , function(
      $scope
      , $filter
      , RequestRequestService
    ) {
      var loadView = function() {
        drawChart([]);
      }
      /**
       * 
       */
      var getRequests = function(from, to) {
        var params = {from: $scope.from, to: $scope.to};
        RequestRequestService.index(params, function() {
          var label = requests.map(function(item) {
            return item.request_date;
          });
          var data = requests.map(function(item) {
            return item.count;
          });
          drawChart(label, data);
        });
      }
      /**
       *
       */
      var drawChart = function(label, data) { 
        $('#chart').remove();
        $('#chart-container').append("<canvas id='chart'></canvas>");
        var ctx = document.getElementById('chart').getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: label,
            datasets: [
              {
                label: '回',
                data: data,
                borderColor: 'rgba(40, 71, 153, 0.8)',
                backgroundColor: 'rgba(40, 71, 153, 0.1)',
                fill: false,
                borderWidth: 1,
                pointRadius: 0
              },
            ]
          },
          options: {
            responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  min: 0
                }
              }]
            }
          }
        });
      }
      /**
       *
       */
      $scope.clickRedraw = function() {
        getRequests()
      }
      //
      if (!$scope.firstLoad) {
        $scope.firstLoad = true;
        loadView()
      }
    }
  ]);
