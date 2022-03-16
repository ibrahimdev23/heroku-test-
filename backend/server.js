const express = require('express');
const { append } = require('express/lib/response')
const cors = require('cors')

const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

//this is connecting front end stuff to backend on Heruko
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))

})

//connects to the Heroku port # otherwise connects to 4005 locally
const port = process.env.PORT || 4005;



app.listen(port, () => {
    console.log(`we on port ${port}`)
})


