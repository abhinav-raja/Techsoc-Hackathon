const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('models/user');
const Complaint = require('models/complaint');

const app = express();

const PORT = process.env.port || 3000;

mongoose.connect().then(()=>console.log('Connected to db successfully'));

app.use(bodyParser.urlencoded({extended: true}));

app.use(async (req, res, next) => {
    if(req.headers['x-access-token']){
        const accessToken = req.headers['x-access-token'];
        const {userId, exp} = await jwt.verify(accessToken, provess.env.JWT_SECRET);
        //Check if token has expired
        if(exp < Date.now().valueOf()/1000){
            return res.status(401).json({error: "User session has expired, please login again"});
        }
        res.locals.loggedInUser = await User.findById(userId);
        next();
    } else {
        next();
    }
})

app.use('/', routes);

app.listen(PORT, ()=>{
    console.log('Server is listening on port: ', PORT);
})