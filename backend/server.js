const express = require('express');
const { append } = require('express/lib/response')
const cors = require('cors')

const path = require('path');
const { dirname } = require('path');

const app = express()
app.use(cors())
app.use(express.json())



//Middleware
app.use(express.static(path.join(__dirname, '../client')))
app.use(express.static(path.join(__dirname, '../client/index.css')))




//END POINTS
//this is connecting front end stuff to backend on Heruko
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/index.html"))
// })

// app.get('/styles', (req,res) => {
//     res.sendFile(path.join(__dirname, '../client/index.css'))

// })

//connects to the Heroku port # otherwise connects to 4005 locally
const port = process.env.PORT || 4005;



app.listen(port, () => {
    console.log(`we on port ${port}`)
})


