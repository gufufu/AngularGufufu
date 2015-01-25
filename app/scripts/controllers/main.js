'use strict';

/**
 * @ngdoc function
 * @name angularGufufuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGufufuApp
 */
angular.module('angularGufufuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
