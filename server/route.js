const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const complaintController = require('./controllers/complaintController');

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.post('/newComplaint', userController.allowIfLoggedIn, userController.grantAccess({type: 'newComplaint'}), complaintController.addComplaint);

router.get('/hostelComplaints', userController.allowIfLoggedIn, userController.grantAccess({type: 'hostelComplaints'}), complaintController.getHostelComplaints);

router.get('/allComplaints', userController.allowIfLoggedIn, userController.grantAccess({type:'allComplaints'}), complaintController.getAllComplaints);

module.exports = router;