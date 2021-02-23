const express = require('express')
var app = express()

app.listen(8080)

app.get('/',(req,res) => {
    app.use(express.static('./produtos'))
    res.sendFile(__dirname+'/produtos/index.html')

})
