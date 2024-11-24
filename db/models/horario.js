'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    static associate(models) {
      // Relación con Sesiones
      Horario.hasMany(models.Sesion, { foreignKey: 'horarioId' });
    }
  }

  Horario.init(
    {
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Horario',
    }
  );

  return Horario;
};
