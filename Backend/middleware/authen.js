const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImthbWphbW5vbmcudEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkRvbnRyaSJ9.Vmu9MebQ2c5f7kJH5_Iy2Rm1uto7smwQlVO2IPPhDXs")
        request.userData = decoded;
        // console.log(req.userData)
        next();
    } catch (error) {
        return response.status(401).json({
            Message: "Authentication Failed. Access Denied"
        })
    }
}