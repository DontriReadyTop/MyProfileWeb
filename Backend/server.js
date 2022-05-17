// * Start Server
require('dotenv').config();

const server = require('./app')

const port = 5500

server.listen(port, () => {
    console.log(`Server is running at port ${port} => http://localhost:${port}`)
})