(function() {
    'use strict'

    var controllers = angular.module('giphyControllers', [])

    controllers.controller('GiphySearchController', GiphySearchController)
    controllers.controller('GiphySlideshowController', GiphySlideshowController)

    GiphySearchController.$inject = ['$scope', '$location', 'GiphyService']
    GiphySlideshowController.$inject = ['$scope', '$location', 'GiphyService']

    function GiphySearchController($scope, $location, GiphyService) {
        this.searchService = GiphyService
        this.$location = $location
    }

    GiphySearchController.prototype.search = function(form) {
        if (form.$valid) {
            var searchTerm = form.searchText.$viewValue

            this.searchService.search(searchTerm).then(results => {
                console.log(results)
            })
        }
    }

    function GiphySlideshowController($scope, $location, GiphyService) {
        var self = this


    }
})()
