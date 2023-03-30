import HTTP from './baseInstance'


function AddStudent(studentInfo){
    return HTTP().post('/AddStudent',studentInfo)
}

function getStudentByEmail(email ,password){
    return HTTP().post('/Student',{emailId: email , password:password})
}

export default {
    AddStudent,
    getStudentByEmail,
}