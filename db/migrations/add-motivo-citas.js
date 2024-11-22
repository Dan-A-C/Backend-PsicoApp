'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('citas');

    // Verifica si la columna 'motivo' ya existe
    if (!tableDescription.motivo) {
      await queryInterface.addColumn(
        'citas', // Nombre de la tabla
        'motivo', // Nombre de la nueva columna
        {
          type: Sequelize.STRING,
          allowNull: true, // Puede ser nula si no se requiere
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('citas');

    if (tableDescription.motivo) {
      await queryInterface.removeColumn(
        'citas', // Nombre de la tabla
        'motivo' // Nombre de la columna a eliminar
      );
    }
  }
};
