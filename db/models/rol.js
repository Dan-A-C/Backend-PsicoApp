'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      Rol.hasMany(models.Usuario, { foreignKey: 'rolId' });
    }
  }

  Rol.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });

  return Rol;
};
