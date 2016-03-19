(function() {
    'use strict'

    angular
        .module('giphyControllers', [])
        .controller('GiphyController', GiphyController)

    GiphyController.$inject = ['$scope', 'GiphyService']

    /* @ngInject */
    function GiphyController($scope, GiphyService) {
        var self = this

        $scope.test = 'hello'
    }
})()
