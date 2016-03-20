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
                    templateURL: 'www/partials/slideshow.html',
                    controller: 'GiphySlideshowController'
                }).
                otherwise('/', {
                    templateURL: 'www/partials/search.html',
                    controller: 'GiphySearchController'
                })
        }])
})()
