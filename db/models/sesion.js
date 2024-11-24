'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sesion extends Model {
    static associate(models) {
      // Relación con Paciente
      Sesion.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });
      // Relación con Psicólogo
      Sesion.belongsTo(models.Psicologo, { foreignKey: 'psicologoId' });
      // Relación con Horario
      Sesion.belongsTo(models.Horario, { foreignKey: 'horarioId' });
      // Relación con Reportes
      Sesion.hasMany(models.Reporte, { foreignKey: 'sesionId' });
    }
  }

  Sesion.init(
    {
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      reporteProgreso: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      reporteEmociones: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Sesion',
    }
  );

  return Sesion;
};
