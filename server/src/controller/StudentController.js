const {Student} = require('../models')
const bcrypt = require('bcrypt')

module.exports ={
    
    AddStudent(req,res){
        if(req.body)
        bcrypt.hash(req.body.password,10,async(error,hashPassword)=>{
            if(error){
                res.status(400).json({
                    message:"Unable to Hash Password"
                })
            }
            else{
                req.body.password = hashPassword
                await Student.create(req.body).then((student)=>{
                    res.status(200).json({
                        message:"Success",
                        Student: student
                    })
                }).catch((error)=>{
                    res.status(400).json({
                        message:"Unable to Add Student"
                    })
                });
            }
        })
    },


    async FindStudent(req, res){
        await Student.findOne({
            attributes:['id','Name','emailId','password','className'],
            where:{
                emailId: req.body.emailId,
            }
        }).then((student)=>{
            bcrypt.compare(req.body.password, student.password, (err,result)=>{
                if(!result){
                    res.status(400).send({
                        message: 'Passwords do not match'
                    })
                }
                else{
                    res.status(200).json({
                        message:"Success",
                        student: student
                    })
                }
            })
    }).catch((error)=>{
        res.status(400).json({
            message:"Unable to Find Student"
        })
    })
    }

}