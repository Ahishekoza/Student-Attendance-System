import HTTP from '../services/baseInstance'

function getTeacherByEmail(email,password){
    return HTTP().post('Teacher', {emailId: email , password:password})
}

export default  {
    getTeacherByEmail
}