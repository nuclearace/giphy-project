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
        var promise = new Promise((resolve, reject) => {
            console.log(term)
            this.$http.get('search/' + term).then(data => {
                resolve(data.data)
            }, () => { reject() })
        })

        return promise
    }
})()
