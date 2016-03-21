(function() {
    'use strict'

    angular
        .module('giphyServices', [])
        .service('GiphyService', GiphyService)

    GiphyService.$inject = ['$http']

    function GiphyService($http) {
        this.$http = $http
    }

    GiphyService.prototype.search = function(term) {
        var self = this

        var promise = new Promise((resolve, reject) => {
            self.$http.get('search/' + term).then(data => {
                resolve(data.data)
            }, reject)
        })

        return promise
    }
})()
