var fs = require('fs')
var server = require('express')()
var giphy = require('giphy-api')('dc6zaTOxFJmzC')

server.get('/', (req, res) => {
    fs.readFile('./www/index.html', (err, data) => {
        if (err !== null) {
            console.log('Error reading index page')
            res.statusCode = 500
            res.end('Error')
        } else {
            res.statusCode = 200
            res.end(data)
        }
    })
})

server.get(/www/, (req, res) => {
    console.log('serving ' + req.path)
    fs.readFile('.' + req.path, (err, data) => {
        if (err !== null) {
            console.log('Error reading file')
            res.statusCode = 500
            res.end('Error')
        } else {
            res.statusCode = 200
            res.end(data)
        }
    })
})

server.get(/search/, (req, res) => {
    var path = req.path.split('/')
    var searchTerm = path[path.length - 1]

    console.log(searchTerm)
    res.end(searchTerm)
})

server.listen(8080)
