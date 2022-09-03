const User = require('../models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const roles = require('../roles.js');

async function hashPassword(pwd){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pwd, salt);
}

async function validatePassword(pwd, hash){
    return await bcrypt.compare(pwd, hash);
}

//Sign up function
exports.signup = async(req, res, next)=>{
    try{
        const {email, password, role} = req.body;
        console.log(req.params, req.body);
        const hashedPassword = await hashPassword(password);
        const newUser = new User({
            email,
            password: hashedPassword,
            role: role || 'Student'
        });
        const accessToken = jwt.sign(
            {userId: newUser._id},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        )
        newUser.accessToken = accessToken;
        await newUser.save();
        res.json({
            data: newUser,
            accessToken
        });
    } catch(error) {
        next(error);
    }
}

//Login function
exports.login = async(req, res, next)=>{
    try {
        const {email, password} = req.body;
        console.log(req.body);
        const user = await User.findOne({email});
        if(!user){
            return next(new Error('Email not found in records'));
        }
        const validPassword = await validatePassword(password, user.password);
        if(!validPassword){
            return next(new Error('Password is not correct'));
        }
        const accessToken = jwt.sign(
            {userID: user._id},
            process.env.JWT_SECRET,
            {expiresIn: '1d'}
        );
        await User.findByIdAndUpdate(user._id, {accessToken});
        res.status(200).json({
            data: {
                email: user.email,
                role: user.role
            },
            accessToken
        })
    } catch(error) {
        next(error);
    }
}

exports.getUsers = async(req, res, next) => {
    const users = await User.find({});
    res.status(200).json({
        data: users
    })
}

exports.getUser = async(req, res, next) => {
    try{
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if(!user){
            return next(new Error('User does not exist'));
        }
        res.status(200).json({
            data: user
        })
    } catch(error){
        next(error);
    }
}

exports.updateUser = async(req, res, next) => {
    try {
        const update = req.body;
        const userId = req.params.userId;
        await User.findByIdAndUpdate(userId, update);
        const user = await User.findById(userId);
        res.status(200).json({
            data: user,
            message: 'User has been updated successfully'
        });
    } catch(error) {
        next(error);
    }
}

exports.deleteUser = async(req, res, next) => {
    try{
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.status(200).json({
            data: null,
            message: 'User has been deleted successfully'
        })
    } catch(error) {
        next(error);
    }
}

exports.grantAccess = function(resource){
    return async (req, res, next) => {
        try {
            const permission = roles.can(res.locals.loggedInUser)(resource);
            if(!permission){
                return res.status(401).json({
                    error: 'You don\'t have permission to perform this action'
                });
            }
            next()
        } catch(error) {
            next(error);
        }
    }
}

exports.allowIfLoggedIn = async(req, res, next) => {
    try{
        const user = res.locals.loggedInUser;
      console.log(res.locals);
        if(!user){
            return res.status(401).json({
                error: "You need to be logged in to view this page"
            });
        }
        req.user = user;
        next();
    } catch(error){
        next(error);
    }
}