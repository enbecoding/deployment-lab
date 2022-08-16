const path = require("path");

module.exports = {
    getAdHome: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.html"))
    },
    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/index.css"))
    },
    getJS: (req, res) => {
        res.sendFile(path.join(__dirname, "../../client/main.js"))
    }

}