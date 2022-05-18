const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        request.userData = decoded;
        // console.log(req.userData)
        next();
    } catch (error) {
        return response.status(401).json({
            Message: "Authentication Failed. Access Denied"
        })
    }
}