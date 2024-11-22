'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // Relación 1:N con Pacientes
      Usuario.hasOne(models.Paciente, { foreignKey: 'usuarioId' });

      // Relación 1:N con Citas (Psicólogo)
      Usuario.hasMany(models.Cita, { foreignKey: 'psicologoId' });
    }
  }

  Usuario.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      contraseña: {
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
