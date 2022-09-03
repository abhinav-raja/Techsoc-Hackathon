const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    /*hostel: {
        type: String,
        required: true
    },*/
    //role controls the access level of the user
    role: {
        type: String,
        required: true,
        default: 'Student',
        //Admin can view and update status of all complaints
        enum: ['Student', 'Warden', 'Admin']
    },
    accessToken: {
        type: String,
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;