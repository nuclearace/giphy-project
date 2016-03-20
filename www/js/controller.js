(function() {
    'use strict'

    var controllers = angular.module('giphyControllers', [])

    controllers.controller('GiphySearchController', GiphySearchController)
    controllers.controller('GiphySlideshowController', GiphySlideshowController)

    GiphySearchController.$inject = ['$scope', 'GiphyService']
    GiphySlideshowController.$inject = ['$scope', 'GiphyService']

    function GiphySearchController($scope, GiphyService) {
        this.searchService = GiphyService
    }

    GiphySearchController.prototype.search = function(form) {
        if (form.$valid) {
            var searchValue = form.searchText.$viewValue
        }
    }

    function GiphySlideshowController($scope, GiphyService) {
        var self = this


    }
})()
