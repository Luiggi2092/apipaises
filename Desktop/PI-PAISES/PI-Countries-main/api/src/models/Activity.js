const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   
    sequelize.define('activity',{
       
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull:false,
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
            validate : {
                isAlpha:{
                  args: true,
                  msg: "the name cannot contain numbers"  
                } 
            }

        },
        difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duration : {
             type: DataTypes.INTEGER,
             allowNull: false,
        },
        season : {
            type: DataTypes.STRING,
            allowNull: false,
        }


    },{
        freezeTableName: true,
        timestamps: false,
      });
}