(function() {
    'use strict'

    var controllers = angular.module('giphyControllers', [])

    controllers.controller('GiphySearchController', GiphySearchController)

    GiphySearchController.$inject = ['$scope', 'GiphyService']

    function GiphySearchController($scope, GiphyService) {
        $scope.results = []
        this.searchText = 'pugs'
        this.$scope = $scope
        this.searchService = GiphyService

        $scope.previous = () => {
            console.log('showing previous')
            if ($scope.current === 0) {
                return $scope.results[0]
            } else {
                $scope.current -= 1
                return $scope.results[$scope.current]
            }
        }

        $scope.next = () => {
            console.log('showing next')
            if ($scope.current === $scope.results.length - 1) {
                return $scope.results[$scope.current]
            } else {
                $scope.current += 1
                return $scope.results[$scope.current]
            }
        }

        $scope.current = 0
    }

    GiphySearchController.prototype.search = function() {
        var self = this

        if (this.searchText !== '') {
            this.searchService.search(this.searchText).then(results => {
                self.$scope.results = results
                console.log(results)
            })
        }
    }

    GiphySearchController.prototype.previous = function () {

    }
})()
