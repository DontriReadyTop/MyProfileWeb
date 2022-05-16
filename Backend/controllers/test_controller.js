const express = require('express');
const { MongoClient } = require("mongodb");
const uri = require('../databases/connect_db');
/**
 * 
 * @typedef {function(express.Request, express.Response):void} router
 */

/**
 * 
 * @type {router}
 */

exports.test = async (request, response) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const users = await client.db('ReadyTop').collection('users').find({}).toArray();
        await client.close();
        response.status(200).send(users);
    } catch (error) {
        response.status(500).send({
            "status": "error",
            "message": error.message
        });
    }
}