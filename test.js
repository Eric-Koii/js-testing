console.log("testran")
const mod = require("./module.js")

async function runTests() {
    try {
      
       var result = await mod.getTasks()
       console.log (result)
    }catch (error) {
        console.error(error);
    }
}

runTests()
