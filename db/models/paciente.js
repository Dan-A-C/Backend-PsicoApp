'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {
      // Relación N:1 con Usuarios
      Paciente.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });

      // Relación 1:N con Citas
      Paciente.hasMany(models.Cita, { foreignKey: 'pacienteId' });

      // Relación 1:N con Cuestionarios
      Paciente.hasMany(models.Cuestionario, { foreignKey: 'pacienteId' });
    }
  }

  Paciente.init(
    {
      historial: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Paciente',
    }
  );

  return Paciente;
};
