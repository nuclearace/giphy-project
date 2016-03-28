var fs = require('fs')
var server = require('express')()
var giphy = require('giphy-api')('dc6zaTOxFJmzC')
var error = JSON.stringify({error: true, images: ['http://i.imgur.com/JZ6KWWl.gif']})

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

    giphy.search(searchTerm, (err, giphyRes) => {
        if (err !== null || giphyRes.data.length === 0) {
            console.log('error searching giphy')
            res.end(error)
        } else {
            var images = giphyRes.data.map(image => { return image.images }).map(image => { return image.original.url })
            res.end(JSON.stringify({error: false, images: images}))
        }
    })
})

server.listen(8080)
