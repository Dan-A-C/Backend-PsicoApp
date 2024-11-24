'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reporte extends Model {
    static associate(models) {
      // Relación con Paciente
      Reporte.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });
      // Relación con Sesión
      Reporte.belongsTo(models.Sesion, { foreignKey: 'sesionId' });
    }
  }

  Reporte.init(
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sugerencia: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Reporte',
    }
  );

  return Reporte;
};
