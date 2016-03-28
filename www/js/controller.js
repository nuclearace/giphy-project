(function() {
    'use strict'

    var controllers = angular.module('giphyControllers', [])

    controllers.controller('GiphySearchController', GiphySearchController)

    GiphySearchController.$inject = ['$scope', 'GiphyService']

    function GiphySearchController($scope, GiphyService) {
        $scope.error = false
        $scope.results = []
        this.searchText = 'pugs'
        this.$scope = $scope
        this.searchService = GiphyService

        $scope.previous = () => {
            if ($scope.currentIndex === 0) {
                return
            } else {
                $scope.currentIndex -= 1
                $scope.current = $scope.results[$scope.currentIndex]
            }
        }

        $scope.next = () => {
            if ($scope.currentIndex === $scope.results.length - 1) {
                return
            } else {
                $scope.currentIndex += 1
                $scope.current = $scope.results[$scope.currentIndex]
            }
        }

        this.search()
    }

    GiphySearchController.prototype.search = function() {
        var self = this

        if (this.searchText !== '') {
            this.searchService.search(this.searchText).then(results => {
                self.$scope.error = results.error
                self.$scope.results = results.images
                self.$scope.current = self.$scope.results[0]
                self.$scope.currentIndex = 0
                self.$scope.$apply()
            })
        }
    }
})()
