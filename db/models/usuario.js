'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Relación con Paciente
      Usuario.hasOne(models.Paciente, { foreignKey: 'usuarioId' });
      // Relación con Psicólogo
      Usuario.hasOne(models.Psicologo, { foreignKey: 'usuarioId' });
    }
  }

  Usuario.init(
    {
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nombreCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM('paciente', 'psicologo', 'admin'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Usuario',
    }
  );

  return Usuario;
};
