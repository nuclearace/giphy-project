(function() {
    'use strict'

    angular
        .module('giphyServices', [])
        .service('GiphyService', GiphyService)

    GiphyService.$inject = ['$http']

    /* @ngInject */
    function GiphyService($http) {
        this.$http = $http
    }

    GiphyService.prototype.search = function(term) {
        console.log(term)
        this.$http.get('search/' + term).success(data => {
            console.log(data)
        })
    }
})()
