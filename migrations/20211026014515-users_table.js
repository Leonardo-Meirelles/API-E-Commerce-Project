'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('users', {

      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },

      user_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      user_email: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users');

  }
};
