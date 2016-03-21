(function() {
    'use strict'

    angular
        .module('giphy-slideshow', [
            'ngRoute',
            'giphyControllers',
            'giphyServices'
        ]).config(['$routeProvider', ($routeProvider) => {
            $routeProvider.
                when('/slideshow/:search', {
                    templateUrl: 'www/partials/slideshow.html',
                    controller: 'GiphySlideshowController'
                }).
                when('/', {
                    templateUrl: 'www/partials/search.html',
                    controller: 'GiphySearchController as search'
                })
        }])
})()
