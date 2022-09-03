const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    //To do: Make image actually work with images
    image: {
        type: String,
        required: false
    },
    //Stores email of the complainant
    complainant: {
        type: String,
        required: true
    },
    hostel: {
        type: String, 
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'Open',
        enum: ['Open', 'In Progress', 'Resolved']
    }
})

const Complaint = mongoose.model('complaint', complaintSchema);
module.exports = Complaint;