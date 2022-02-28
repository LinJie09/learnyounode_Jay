const http = require('http')

function callback(response){
    response.setEncoding('utf-8')
    response.on('data',function(data){
        console.log(data);
    })
}
http.get(process.argv[2],callback)
