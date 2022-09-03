const Complaint = require('../models/complaint.js');
const {roles} = require('../roles');
const { getSystemErrorMap } = require('util');

/*
Ops:
-Get complaint
Get complaints for hostel
Get prev complaints of user
-Get all complaints
-Update complaint
-Edit complaint
-Add complaint
*/

exports.addCompaint = async(req, res, next) => {
    try {
        const {text, complainant, hostel} = req.body;
        const newComplaint = new Complaint({
            text,
            complainant,
            hostel
        });
        await newComplaint.save();
        res.json({
            data: newComplaint
        })
    } catch(error) {
        next(error);
    }
}

exports.updateComplaint = async(req, res, next)=>{
    try {
        const update = req.body;
        const complaintId = req.params.complaintId;
        await Complaint.findByIdAndUpdate(complaintId, update);
        const complaint = await Complaint.findById(complaintId);
        res.status(200).json({
            data: complaint,
            message: 'Complaint has been updated successfully'
        })
    } catch(error) {
        next(error);
    }
}

exports.deleteComplaint = async (req, res, next) => {
    try {
        const complaintId = req.params.complaintId;
        await Complaint.findByIdAndDelete(complaintId);
        res.status(200).json({
            data: null,
            message: 'Complaint has been deleted successfully'
        })
    } catch (error) {
        next(error);
    }
}

exports.getComplaint = async(req, res, next) =>{
    try {
        const complaintId = req.params.complaintId;
        const complaint = await Complaint.findById(complaintId);
        if(!complaint){
            return next(new getSystemErrorMap('Complaint does not exist'));
        }
        res.status(200).json({
            data: complaint
        })
    } catch (error) {
        next(error);
    }
}

exports.getAllComplaints = async(req, res, next) => {
    try {
        const complaints = await Complaint.find({});
        res.status(200).json({
            data: complaints
        })
    } catch (error) { 
        next(error);
    }
}

exports.getHostelComplaints = async(req, res, next) => {
    try {
        const hostel = req.params.hostel;
        const complaints = await Complaint.find({hostel});
        res.status(200).json({
            data: complaints
        })
    } catch (error) {
        next(error);
    }
}

exports.getUserComplaints = async(req, res, next)=>{
    try {
        const userId = req.params.userId;
        const user = await Complaint.findById(userId);
        const {email} = user;
        const complaints = await Complaint.find({complainant: email});
        res.status(200).json({
            data: complaints
        })
    } catch (error) {
        next(error);
    }
}