
const {PunchInOut} = require('../models')

module.exports = {

    async PunchInOutInfo(req,res){
        await PunchInOut.create(req.body).then((response)=>{
            res.status(200).json({
                success:'True',
                PunchInfo:response
            })
        })
        .catch((error)=>{
            res.status(400).json({
                error: "Unable to Add PunchIn"
            })
        })
    },

    async GetAllPunchOut(req,res){
        await PunchInOut.findAll({
            attributes:['Date','Time','studentName','studentClassName']
        }).then((response)=>{
            res.status(200).json({
                message:'Success',
                DataOfPunchIn_Out:response
            })
        })
        .catch((error)=>{
           res.status(400).json({
            message: "Unable to Fetch All Data"
           })
        })
    }

}