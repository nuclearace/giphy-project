(function() {
    'use strict'

    angular
        .module('giphyServices', [])
        .service('GiphyService', GiphyService)

    GiphyService.$inject = ['$http']

    /* @ngInject */
    function GiphyService($http) {

    }
})()
