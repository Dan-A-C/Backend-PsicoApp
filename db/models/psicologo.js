'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Psicologo extends Model {
    static associate(models) {
      // Relación con Usuario
      Psicologo.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
      // Relación con Rutinas
      Psicologo.hasMany(models.Rutina, { foreignKey: 'psicologoId' });
      // Relación con Sesiones
      Psicologo.hasMany(models.Sesion, { foreignKey: 'psicologoId' });
    }
  }

  Psicologo.init(
    {
      especialidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Psicologo',
    }
  );

  return Psicologo;
};
