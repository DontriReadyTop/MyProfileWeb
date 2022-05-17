const express = require('express');
const jwt = require('jsonwebtoken')
const { MongoClient } = require("mongodb");

/**
 * 
 * @typedef {function(express.Request, express.Response):void} router
 */

/**
 * 
 * @type {router}
 */

exports.insertProfile = async (request, response) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        const profile = request.body;
        const client = new MongoClient(process.env.SERVER_MONGO_DB);
        await client.connect();
        await client.db('ReadyTop').collection('profile').insertOne({
            f_name: profile.f_name,
            l_name: profile.l_name,
            nickname: profile.nickname,
            about_me: profile.about_me,
            e_mail: profile.e_mail,
            phone: profile.phone,
            gender: profile.gender,
            address: profile.address,
            hobby: profile.hobby,
            website: profile.website,
            website_link: profile.website_link,
            github: profile.github,
            github_link: profile.github_link,
            facebook: profile.facebook,
            facebook_link: profile.facebook_link,
            instagram: profile.instagram,
            instagram_link: profile.instagram_link,
            experience: profile.experience,
            education: profile.education,
            skill: profile.skill,
            create_by_id: decoded._id,
        });
        await client.close();
        response.status(200).send({
            "status": "ok",
            profile
        });
    } catch (error) {
        response.status(500).send({
            "status": "error",
            "message": error.message
        });
    }
}

exports.getProfile = async (request, response) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        const client = new MongoClient(process.env.SERVER_MONGO_DB);
        await client.connect();
        const user = await client.db('ReadyTop').collection('profile').findOne({ "create_by_id": decoded._id });
        await client.close();
        response.status(200).send({
            "status": "ok",
            decoded,
            user
        });
    } catch (error) {
        response.status(500).send({
            "status": "error",
            "message": error.message
        });
    }
}