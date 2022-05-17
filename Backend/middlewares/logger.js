module.exports = (req, res, next) => {
    console.log('request from : ' + req.hostname + req.url);
    next();
}