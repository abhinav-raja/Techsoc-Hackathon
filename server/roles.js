/*
const AccessControl = require('accesscontrol');
const ac = new AccessControl();

exports.roles = ((()=>{
    ac.grant('Student')
        .readOwn('complaint')
        .updateOwn('complaint')
        .createOwn('complaint');
    ac.grant('Warden')
        .readOwn('hostelComplaints')
        .updateOwn('hostelComplaints')
        .deleteOwn('hostelComplaints');
    ac.grant('Admin')
        .readAny('hostelComplaints')
        .updateAny('hostelComplaints')
        .deleteAny('hostelComplaints')
        .readAny('complaint')
        .updateAny('complaint');
})());

acc = {
    Student: {
        
    }
}

function canRead(complaint){
    
}
*/

exports.can = function(user){
    //const validActions = ['read', 'delete', 'update', 'create']
    const validResources = ['hostelComplaints', 'allComplaints', 'newComplaint', 'editComplaint'];
    switch(user.role){
        case 'Admin':
            return function(resource){
                if(!validResources.includes(resource.type)) return false;
                return true;
            }
        case 'Warden':
            return function(resource){
                if(!validResources.includes(resource.type)) return false;
                /*if(resource.hostel === user.hostel){
                    return true;
                } else {
                    return false;
                }*/
                if(resource.type == 'hostelComplaints') return true;
                else return false;
            }
        case 'Student':
            return function(resource){
                if(!validResources.includes(resource.type)) return false;
                if(resource.complainant === user.email || resource.type === 'newComplaint'){
                    return true;
                } else {
                    return false;
                }
            }
    }
}