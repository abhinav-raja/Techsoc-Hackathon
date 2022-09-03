const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('./models/user.js');
const Complaint = require('./models/complaint');
const routes = require('./route.js');

const app = express();

const PORT = process.env.port || 3000;

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@techsochackathon.gos8lar.mongodb.net/?retryWrites=true&w=majority`).then(()=>console.log('Connected to db successfully'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(async (req, res, next) => {
    if(req.headers['x-access-token']){
        const accessToken = req.headers['x-access-token'];
        let {userID, exp} = await jwt.verify(accessToken, process.env.JWT_SECRET);
      const a = await jwt.verify(accessToken, process.env.JWT_SECRET);
      if(!userID) userID = a.userId;
      console.log(a);
        //Check if token has expired
        if(exp < Date.now().valueOf()/1000){
            return res.status(401).json({error: "User session has expired, please login again"});
        }
        res.locals.loggedInUser = await User.findById(userID);
      //console.log(res.locals, userID, exp);
        next();
    } else {
        next();
    }
})

app.use('/', routes);

app.listen(PORT, ()=>{
    console.log('Server is listening on port: ', PORT);
})