import { error } from 'util';

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/aeonpos-mean-docker'

// Connect to mongodb
mongoose.connect(dbHost);

// Create mongoose Schema for Users
const userSchema = new mongoose.Schema({
    name: String
})

// Create a mongoose model for the Users Schema
const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
    res.send('api works');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if(err) res.status(500).send(err)

        res.status(200).json(users);
    });
});

/* GET one user. */
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, user) => {
        if(err) res.status(500).send(err)

        res.status(200).json(user);
    });
});

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name
    });

    user.save(err => {
        if(err) res.status(500).send(err)

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;