const {Teacher} = require('../models')
const bcrypt = require('bcrypt')

module.exports ={


    async AddTeachers(req,res){
        if(req.body){
            bcrypt.hash(req.body.password,10,async(err,bcryptPassword)=>{
                if(err){
                    res.status(400).json({
                        message:'was not able to encrypt password'
                    })
                }
                else{
                    req.body.password=bcryptPassword
                    await Teacher.create(req.body).then((response)=>{
                        res.status(200).json({
                            success:true,
                            Teacher: response
                        });
        
                    }).catch((error)=>{
                        res.status(400).json({
                            success:false,
                            error: "Unable to create Teacher"
                        })
                    });
                    }
                })   
        }
    },

    async FindTeacher(req, res){
        await Teacher.findOne({
            attributes:['id','emailId', 'password','subject'],
            where:{
                emailId:req.body.emailId,
            }
        }).then((response)=>{
            bcrypt.compare(req.body.password,response.password,(error,result)=>{
                if(!result) {
                    console.log(error);
                    res.status(500).json({
                    message: "Password is incorrect"
                })
               }
                else{
                    res.status(200).json({
                    success : true,
                    Teacher: response
                    })
                }
            })
          
        }).catch((error)=>{
            res.status(400).json({
                success:false,
                message:"Teacher not found"
            });
        })
    }

}