const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
var people = []


app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/people', function (req, res) {
    res.send(people)
  })
app.post('/people', function (req, res) {
console.log(req.body)
    try{ 
        people.push(req.body)
        res.send(people)
    }    catch (error) {
        console.error(error);
    }
  })
  


module.exports = {
 server: app
}