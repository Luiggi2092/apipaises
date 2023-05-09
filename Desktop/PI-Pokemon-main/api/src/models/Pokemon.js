const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
   },
   name:{
      type: DataTypes.STRING,
      allowNull: false,
   },
   image:{
       type : DataTypes.STRING,
       allowNull:false,
   },
   life: {
       type: DataTypes.INTEGER,
       allowNull:false,

   },
   attack: {
       type: DataTypes.INTEGER,
       allowNull:false,
       defaultValue: 7,
   },
   defense: {
       type: DataTypes.INTEGER,
       allowNull:false,
       defaultValue: 8,
   },
   speed: {
       type : DataTypes.INTEGER,


   },
   height : {
      type : DataTypes.INTEGER,
       
     },
     weight : {
      type: DataTypes.INTEGER,
      
   },
   createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull:true,
      defaultValue: true 
   }
  });
};
