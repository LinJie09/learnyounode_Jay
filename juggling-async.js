const http = require('http')
const bl = require('bl')
function callback(response) {
    response.pipe(bl(function (err, data) {
       
    }))
}


