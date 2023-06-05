const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      defaultValue: 'No',
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: 'No',
    },
    area: {
      type: DataTypes.STRING,
      
    },
    population : {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue : 1
    }





  },{
    freezeTableName: true,
    timestamps: false,
  });
};
