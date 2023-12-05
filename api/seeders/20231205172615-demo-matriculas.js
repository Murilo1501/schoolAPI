'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Matriculas', [
      {
        status: 'confirmado',
        estudante_id:1,
        turma_id:12,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        status: 'confirmado',
        estudante_id:1,
        turma_id:10,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        status: 'confirmado',
        estudante_id:6,
        turma_id:13,
        createdAt:new Date(),
        updatedAt:new Date()
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
