'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {
      // Relación con Usuario
      Paciente.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
      // Relación con Rutinas
      Paciente.hasMany(models.Rutina, { foreignKey: 'pacienteId' });
      // Relación con Sesiones
      Paciente.hasMany(models.Sesion, { foreignKey: 'pacienteId' });
      // Relación con Reportes
      Paciente.hasMany(models.Reporte, { foreignKey: 'pacienteId' });
    }
  }

  Paciente.init(
    {
      historial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      diagnostico: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Paciente',
    }
  );

  return Paciente;
};
