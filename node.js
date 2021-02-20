const express = require('express')
var app = express()

app.listen(8080)

app.get('/',(req,res) => {
    res.sendFile(__dirname+'/produtos/index.html')
})
