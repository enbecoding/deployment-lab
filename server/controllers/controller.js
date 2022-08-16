const path = require("path");

module.exports = {
    getAdHome: (req, res) => {
        req.sendFile(path.join(__dirname, "../../client/index.html"))
    },
    getCSS: (req, res) => {
        req.sendFile(path.join(__dirname, "../../client/index.css"))
    },
    getJS: (req, res) => {
        req.sendFile(path.join(__dirname, "../../client/main.js"))
    }

}