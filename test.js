console.log("testran")
//const mod = require("./module.js")
const webserver = require("./webserver")
const axios = require("axios")


async function runTests() {
 
    try {
        await webserver.server.listen(3000)
       // var result = await mod.getTasks()
       // console.log (result)
      
    }catch (error) {
        console.error(error);
    }
}

runTests()
