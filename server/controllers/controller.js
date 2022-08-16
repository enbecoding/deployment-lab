const path = require("path");
module.exports = {
    getAdHome: (req, res) => {
        req.sendFile(path.join(__dirname, "../../client/index.html"))
    }
}