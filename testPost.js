console.log("testran")
//const mod = require("./module.js")

const axios = require("axios")


async function runTests() {
 
    try {
       
       // var result = await mod.getTasks()
       // console.log (result)
       var eric = {
           hair: 'brown'
        
       }
       var result = await axios.post('http://localhost:3000/people', eric , {headers: {'content-type': 'application/json'}}) 
       console.log(result.data)
    }catch (error) {
        console.error(error);
    }
}

runTests()
