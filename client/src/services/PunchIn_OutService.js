import HTTP from './baseInstance'


function AddPunchInFo(PunchInFo){
    return HTTP().post('/AddPunchIn_Out',PunchInFo)
}

function GetAllPunchInfo(){
    return HTTP().get('/GetAllPunchIn_Out')
}

export default {
    AddPunchInFo,
    GetAllPunchInfo,
}