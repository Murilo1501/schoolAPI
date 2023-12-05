const routes = require('./routes')
const express = require('express')

const app = express()
const port = 3000
routes(app)

app.listen(port,()=>{
    console.log('running on server http://localhost:'+port)
})

module.exports = app