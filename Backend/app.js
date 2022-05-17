const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const logger = require('./middlewares/logger')
app.use(logger)

app.get('/', (request, response) => {
    res.send('Hello World!')
});

const register = require('./routes/register');
app.use("/register", register);

const login = require('./routes/login');
app.use("/login", login);

const test = require('./routes/test');
app.use("/test", test);

const profile = require('./routes/profile');
app.use("/profile", profile);

module.exports = app;