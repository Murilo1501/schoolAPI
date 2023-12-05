'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Pessoas', [
      {
        nome:'Vitor Falconeri',
        ativo:true,
        email:'vitor@gmail.com',
        role:'professor',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        nome:'Murilo Falconeri',
        ativo:true,
        email:'murilo@gmail.com',
        role:'professor',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        nome:'Alice Cordeiro',
        ativo:true,
        email:'alice@gmail.com',
        role:'professor',
        createdAt:new Date(),
        updatedAt:new Date()
      },

    ], {});

  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('People', null, {});
  }
};
