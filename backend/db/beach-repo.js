const { Beaches } = require("./models")

async function list() {
    return await Beaches.findAll();
}


module.exports = {
    list
}
