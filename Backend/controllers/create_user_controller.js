const express = require('express');
const bcrypt = require('bcrypt');
const { MongoClient } = require("mongodb");

/**
 * 
 * @typedef {function(express.Request, express.Response):void} router
 */

/**
 * 
 * @type {router}
 */

exports.createUser = async (request, response) => {
    try {
        const user = request.body;
        if (user.username != (undefined || null) && user.password != (undefined || null) && user.email != (undefined || null) && user.phone != (undefined || null)) {
            const client = new MongoClient(process.env.SERVER_MONGO_DB);
            await client.connect();
            await client.db('ReadyTop').collection('users').insertOne({
                username: user.username,
                password: bcrypt.hashSync(request.body.password, 10),
                email: user.email,
                phone: user.phone
            });
            await client.close();
            response.status(200).send({
                "status": "ok",
                "message": "Create user success.",
                "user": user
            });
        } else {
            response.status(500).send({
                "status": "error",
                "message": "Invalid field or value."
            });
        }
    } catch (error) {
        response.status(500).send({
            "status": "error",
            "message": error.message
        });
    }
}


// exports.createUser = async (request, response) => {
//     try {
//         // await mongoose.connect('mongodb+srv://Dontri:1234@readytop01.cch4e.mongodb.net/ReadyTop?retryWrites=true&w=majority', { useNewUrlParser: true });
//         const UserSchema = new mongoose.Schema({
//             username: {
//                 type: String,
//                 required: [true, 'กรุณาใส่ Username'],
//                 unique: true
//             },
//             email: {
//                 type: String,
//                 required: [true, 'กรุณาใส่ Email'],
//             },
//             password: {
//                 type: String,
//                 required: [true, 'กรุณาใส่ Password'],
//             },
//             phone: {
//                 type: String
//             },
//         });
//         UserSchema.plugin(uniqueValidator);
//         const query = mongoose.model('user', schema);
//         if (user.username != (undefined || null) && user.password != (undefined || null) && user.email != (undefined || null) && user.phone != (undefined || null)) {
//             const hashPwd = bcrypt.hashSync(request.body.password, 10);
//             query.create({ username: request.body.username, password: hashPwd, email: request.body.email, phone: request.body.phone }, (err, doc) => {
//                 console.log("yooo");
//             });
//             // console.log(hashPwd);

//             // query.save(function (err) {
//             //     if (err) console.log(err);
//             // });
//             response.json({ status: 'ok' });
//         } else {
//             response.status(500).send({
//                 "status": "error",
//                 "message": "Invalid field or value."
//             });
//         }
//     } catch (e) {
//         response.status(500).send({
//             "status": "error",
//             "message": e.message
//         });
//     }
// }

// module.exports = (req, res) => {
//     User.create(req.body, (error, user) => {
//         if (error) {
//             const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
//             req.flash('validationErrors', validationErrors);
//             req.flash('data', req.body);
//         }
//         res.redirect('/');
//     })
// }