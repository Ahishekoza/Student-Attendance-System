module.exports=(sequelize,DataTypes)=>{
    const student = sequelize.define('Student',{
        Name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        emailId:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        className:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })

    return student
}