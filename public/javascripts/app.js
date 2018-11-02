var app = window.angular.module('app', [])

app.factory('pushFetcher', pushFetcher)
app.factory('userFetcher', userFetcher)
app.controller('mainCtrl', mainCtrl)

function pushFetcher($http) {
  var API_ROOT = 'queue'
  return {
    get: function() {
      return $http
        .get(API_ROOT)
        .then(function(resp) {
          return resp.data
        })
    }
  }

}

function userFetcher($http) {
    var API_ROOT = 'user'
    return {
      get: function() {
        return $http
          .get(API_ROOT)
          .then(function(resp) {
            return resp.data
          })
        }
    }
}

function mainCtrl($scope, pushFetcher, userFetcher, $http) {

    $scope.user = null
    $scope.pushs = []

    pushFetcher.get()
        .then(function(data) {
            $scope.pushs = data
        })

    userFetcher.get()
        .then((data)=>{
            $scope.user = data
        })

    $scope.addPush = function() {
        var formData = { name: $scope.Name, avatarUrl: $scope.Url };
        console.log(formData);
        var pushUrl = 'queue';
        $http({
        url: pushUrl,
        method: "POST",
        data: formData
        }).success(function(data, status, headers, config) {
        console.log("Post worked");
        }).error(function(data, status, headers, config) {
        console.log("Post failed");
        });
    }
}
