require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// mongodb Connection
const connectToDB = require('./db/connectToDb');

// middleware
const orderRouter = require('./routes/orderRoute');
const errorHandlerMiddleware = require('./middleware/error-handler');

const cors = require('cors');
const xss = require('xss-clean')

app.use(express.json());
app.use(cors());
app.use(xss());
// testing route
app.get('/', (req, res) => {
    res.send('hello world');
})

app.use('/api/v1/orders', orderRouter);

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5002;

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