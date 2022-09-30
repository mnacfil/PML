require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectToDB = require('./db/connectToDb');

app.get('/', (req, res) => {
    res.send('hello world');
})

const port = process.env.PORT || 5000;

const startTheServer = async () => {
    try {
        await connectToDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
startTheServer();