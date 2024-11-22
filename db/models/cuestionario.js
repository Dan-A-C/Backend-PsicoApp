'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cuestionario extends Model {
    static associate(models) {
      // Relación N:1 con Pacientes
      Cuestionario.belongsTo(models.Paciente, { foreignKey: 'pacienteId' });
    }
  }

  Cuestionario.init(
    {
      pregunta: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      respuesta: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Cuestionario',
    }
  );

  return Cuestionario;
};
