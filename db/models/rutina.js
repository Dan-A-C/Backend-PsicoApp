'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rutina extends Model {
    static associate(models) {
      // Relación con Paciente
      Rutina.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });
      // Relación con Psicólogo
      Rutina.belongsTo(models.Psicologo, { foreignKey: 'psicologoId' });
    }
  }

  Rutina.init(
    {
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Rutina',
    }
  );

  return Rutina;
};
