const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//connecting with mongodb
mongoose
    .connect('mongodb://localhost:27017/meancrud')
    .then((x) => {
        console.log(`Connected to Mongo!Database name: "${x.connections[0].name}`)
    })
    .catch((err) =>{
        console.log('Error connecting to mongo ',err.reason)
    })

//setting up port with express js
const productRoute = require('../backend/routes/product.route')
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    }),
)
app.use(cors())
app.use('/api',productRoute);
//create the port
const port = process.env.PORT || 4000
const server = app.listen(port,() =>{
    console.log('Server is listening to port number : ' + port)
})