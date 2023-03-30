module.exports=(sequelize,DataTypes)=>{
    const PunchInOut = sequelize.define('PunchInOut',{
        Date:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Time:{
            type:DataTypes.STRING,
            allowNull:false
        },
        studentName:{
            type:DataTypes.STRING,
            allowNull:false
        },
        studentClassName:{
            type:DataTypes.STRING,
            allowNull:false
        }
        // subjectName:{
        //     type:DataTypes.STRING,
        //     allowNull:false,
        // }
    })

    return PunchInOut
}