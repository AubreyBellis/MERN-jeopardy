require("dotenv").config();

const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();

//MONGOOSE
mongoose.Promise = global.Promise;
//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI);
const connection = mongoose.connection;
connection.on('connected',()=> {
    console.log('LIVE');
})
connection.on('error', (err) => {
    console.log('WHOOPS: + err');
})
///Method to use or call bodyparser in middleware
app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.send('yo!')
})
const PORT = process.env.PORT || 3000;
app.listen(PORT,() => {
    console.log("We're on bitches!");
});