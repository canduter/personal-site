'use strict';

angular.module('webpersonalApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isCurrentPath = function (path) {
      return $location.path() === path;
    };
  }]);
