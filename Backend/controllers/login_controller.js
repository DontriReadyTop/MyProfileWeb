const express = require('express');
const bcrypt = require('bcrypt');
const { MongoClient } = require("mongodb");
const jwt = require('jsonwebtoken')

/**
 * 
 * @typedef {function(express.Request, express.Response):void} router
 */

/**
 * 
 * @type {router}
 */

exports.login = async (request, response) => {
    try {
        const client = new MongoClient(process.env.SERVER_MONGO_DB);
        await client.connect();
        // const users = await client.db('ReadyTop').collection('users').find({}).toArray();
        const user = await client.db('ReadyTop').collection('users').findOne({ "username": request.body.username });

        if (user == null) {
            response.json({
                "status": "error",
                "message": "This user could not be found."
            })
            return
        }

        const bcryptPassword = bcrypt.compareSync(request.body.password, user.password);
        if (bcryptPassword) {
            const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.JWT_KEY)
            response.json({
                "status": "ok",
                "message": "Login success.",
                "token": token
            })
            await client.close();
        } else {
            response.json({
                "status": "error",
                "message": "Login failed."
            })
        }

    } catch (error) {
        response.status(500).send({
            "status": "error",
            "message": error.message
        });
    }
}

exports.authen = (request, response) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        response.json({
            "status": "ok",
            "token": decoded
        });
    } catch (error) {
        response.status(500).send({
            "status": "error",
            "message": error.message
        });
    }
}