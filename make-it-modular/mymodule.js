const fs = require('fs')
const path = require('path')
function result(pathName, extFile, callback) {
    fs.readdir(pathName, function (err, data) {
        if (err) { return callback(err) }
        for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === "." + extFile) {
                callback(null, data[i])
            }
        }
    })
}
module.exports = result