'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cita extends Model {
    static associate(models) {
      // Relación N:1 con Pacientes
      Cita.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });

      // Relación N:1 con Psicólogos (Usuarios con rol psicólogo)
      Cita.belongsTo(models.Usuario, { foreignKey: 'psicologoId' });
    }
  }

  Cita.init(
    {
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hora: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      motivo: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
        defaultValue: 'pendiente',
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Cita',
    }
  );

  return Cita;
};
