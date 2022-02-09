const fs = require('fs')
const path = require('path')
fs.readdir(process.argv[2], function callback(err, list) {
    for (let i = 0; i < list.length - 1; i++) {
        if ("." + path.extname(list[i]) === ".." + process.argv[3])
            console.log(list[i]);
    }
})