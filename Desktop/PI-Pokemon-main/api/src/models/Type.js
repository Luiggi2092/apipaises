const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
      sequelize.define("Type", {
        ID:{
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false,
         },
         Nombre:{
            type: DataTypes.STRING,
            allowNull: false,
         },
      })
}