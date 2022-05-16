const express = require('express')
const app = express()

app.use(express.json())

// const signin = require('./routes/signin')
// const signup = require('./routes/signup')
// const dashboard = require('./routes/Dashboard')
// const hardware = require('./routes/hardware')
// const licence = require('./routes/licence')
// const durable_article = require('./routes/durable_article')

// // * Routes
// app.use("/sign-in", signin)
// app.use("/sign-up",signup)
// app.use("/dashboard", dashboard)
// app.use("/hardware", hardware)
// app.use("/licence", licence)
// app.use("/durable_article", durable_article)

module.exports = app