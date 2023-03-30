
module.exports=(sequelize,DataTypes)=>{
    const Teacher = sequelize.define('Teacher',{
        emailId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        subject:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    })

    return Teacher
}