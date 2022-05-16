const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    res.send('Hello World!')
});

const register = require('./routes/register');
app.use("/register", register);

const login = require('./routes/login');
app.use("/login", login);

const test = require('./routes/test');
app.use("/test", test);

module.exports = app;