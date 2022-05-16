const port = 5500;
const express = require("express");

const app = express();


app.get('/', (request, response) => {
    console.log(request.query);
    response.send("ดีเห้ย");

});

app.listen(port, () => {
    console.log(`Server Start in Port ${port}  =>  http://localhost:${port}`);
})