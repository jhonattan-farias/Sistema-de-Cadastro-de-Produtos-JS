const express = require('express')
const path = require('path')
const app = express()


app.listen(8080,() => console.log('Servidor Ativado'))

app.get('/',(req,res) => {

    app.use(express.static(path.resolve('../')))
    res.sendFile(path.resolve('../index.html'))

})
