const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   sequelize.define("Pokemons",{

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
       Imagen:{
           type : DataTypes.STRING,
           allowNull:false,
       },
       Vida: {
           type: DataTypes.INTEGER,
           allowNull:false,

       },
       Ataque: {
           type: DataTypes.INTEGER,
           allowNull:false,
       },
       Defensa: {
           type: DataTypes.INTEGER,
           allowNull:false,
       },
       Velocidad: {
           type : DataTypes.INTEGER,

       },
       Altura : {
          type : DataTypes.INTEGER,
           
         },
       Peso : {
          type: DataTypes.INTEGER,
          
       } 
   });  

}