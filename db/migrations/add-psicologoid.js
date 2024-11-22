'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('citas');

    // Verifica si la columna 'psicologoId' ya existe
    if (!tableDescription.psicologoId) {
      await queryInterface.addColumn(
        'citas', // Nombre de la tabla
        'psicologoId', // Nombre de la nueva columna
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'usuarios', // Tabla a la que hace referencia
            key: 'id', // Campo de la tabla referenciada
          },
          onUpdate: 'CASCADE', // Si se actualiza la clave primaria en 'usuarios'
          onDelete: 'SET NULL', // Si se elimina un registro en 'usuarios'
          allowNull: true, // Puede ser nula si no se asigna un psicólogo
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    const tableDescription = await queryInterface.describeTable('citas');

    if (tableDescription.psicologoId) {
      await queryInterface.removeColumn(
        'citas', // Nombre de la tabla
        'psicologoId' // Nombre de la columna a eliminar
      );
    }
  }
};
