const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/notFound');
const express = require('express');
const app = express();

// Express Middlewares
app.use(express.static('./public'));
app.use(express.json());

// Task Route Middleware
const tasksRouter = require('./routes/tasks');
app.use('/api/v1/tasks',tasksRouter);

// My Middlewares
app.use(notFound);

const PORT = 5000;

const startServer = async () => {
    try {
        await connectDB(process.env.CONNECTION_STRING);
        console.log('connected to db');
        app.listen(PORT,() => {
            console.log('Running on port 5000')
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();
