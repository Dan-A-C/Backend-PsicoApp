'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('cuestionarios');

    // Verifica si la columna 'pacienteId' ya existe
    if (!tableDescription.pacienteId) {
      await queryInterface.addColumn(
        'cuestionarios', // Nombre de la tabla
        'pacienteId', // Nombre de la nueva columna
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'pacientes', // Tabla a la que hace referencia
            key: 'id', // Campo de la tabla referenciada
          },
          onUpdate: 'CASCADE', // Si se actualiza la clave primaria en 'pacientes'
          onDelete: 'CASCADE', // Si se elimina un registro en 'pacientes'
          allowNull: false, // No puede ser nula
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('cuestionarios');

    if (tableDescription.pacienteId) {
      await queryInterface.removeColumn(
        'cuestionarios', // Nombre de la tabla
        'pacienteId' // Nombre de la columna a eliminar
      );
    }
  }
};
