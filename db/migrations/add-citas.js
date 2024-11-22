'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('citas');

    // Verifica si la columna 'estado' ya existe
    if (!tableDescription.estado) {
      await queryInterface.addColumn(
        'citas', // Nombre de la tabla
        'estado', // Nombre de la nueva columna
        {
          type: Sequelize.ENUM('pendiente', 'confirmada', 'cancelada'),
          defaultValue: 'pendiente', // Valor por defecto
          allowNull: false, // No puede ser nula
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('citas');

    if (tableDescription.estado) {
      await queryInterface.removeColumn(
        'citas', // Nombre de la tabla
        'estado' // Nombre de la columna a eliminar
      );
    }
  }
};
