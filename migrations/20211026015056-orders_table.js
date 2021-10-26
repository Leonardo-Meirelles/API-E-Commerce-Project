'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable('orders', {

      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },

      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },

      product_name: {
        allowNull: false,
        type: Sequelize.TEXT
      },

      orderQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

      order_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
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

    return queryInterface.dropTable('orders')
  }
}
