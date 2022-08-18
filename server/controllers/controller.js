const path = require("path");
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '587ca169fb4d4dc5845f01f23b6ad6bb',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

module.exports = {
    getAdHome: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.html"))
    },
    getCSS: (req, res) => {
        rollbar.log('error here')
        res.sendFile(path.join(__dirname, "../../client/index.css"))
    },
    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/main.js"))
    },
    getPage2: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/secondpage.html"))
    }
}