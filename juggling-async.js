const http = require('http')
const bl = require('bl');
const concat = require('concat-stream')
const { resolve } = require('path/posix');
const { LOADIPHLPAPI } = require('dns');
const result = []
/*let count = 0*/
/*
function printResult() {
    for (let i = 0; i < 3; i++) {
        console.log(result[i]);
    }
}
function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.log(error);
            }
            result[index] = data.toString()
            count++
            if (count === 3) {
                printResult()
            }
        }))
    })
}
for (let i = 0; i < 3; i++) {
    httpGet(i)
}*/

async function get(url) {
    return new Promise(resolve => {
        http.get(url, res => resolve(res))
    })
}

async function doit() {
    for (let i = 2; i < process.argv.length; i++) {
        const res = await get(process.argv[i])
        res.setEncording('utf-8')
        res.pipe(
            concat(data =>{
                result.push(data)
            })
        )
    }
    result.forEach(item =>{
        console.log(item);
    })
}
doit()



