const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/users.route');
require('dotenv').config();

// middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api route baseCamp
app.use('/api/users', userRouter);

// default routes
// home route

app.use('/', (_req, res) => {
    res.send('test server is running');
});
// Error middleware

// wrong path error route
app.use((req, res) => {
    res.status(404).send('404 error! url does not exist');
});

// server error route
app.use((err, req, res, next) => {
    if (res.headerSent) {
        return next(err);
    }

    return res.status(500).send('Something broke!');
});

module.exports = app;
