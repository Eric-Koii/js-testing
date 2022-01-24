const axios = require('axios');

async function getTasks() {
    
    const response = await axios.get('https://mainnet.koii.live/tasks')
    console.log(response.data)
    var eric = {
        hair: "blue",
        eyes: "blueee",
        favouriteColour: "green",

    }

    
    eric.data = response.data
    return eric
}
module.exports = {
    getTasks: getTasks
}