'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Niveis', [
      {
        decr_nivel:"intermediário",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        decr_nivel:"básico",
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        decr_nivel:"avançado",
        createdAt:new Date(),
        updatedAt:new Date()
      }
    
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
