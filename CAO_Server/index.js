const express = require('express')
const app = express()
const path = require('path')

const port = 8080;

// app.listen(port, function(){
//     console.log("listening on", port)
// })

// app.get('/', function(req,res){
//     console.log('get /')
//     res.sendFile(__dirname+'/public/main.html')
// })

app.use(express.static(path.join(__dirname, '../CAO_Client/build')))

const http = require('http').createServer(app)
http.listen(port, function () {
    console.log('listening on',port)
})

app.get('/', function (req, res) {
    console.log('get /')
    res.sendFile(path.join(__dirname, '../CAO_Client/build/index.html'))
})

app.get('*', function (req, res) {
    console.log('get /')
    res.sendFile(path.join(__dirname, '../CAO_Client/build/index.html'))
})