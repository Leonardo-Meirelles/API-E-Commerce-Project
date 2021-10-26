module.exports = (sequelize, DataTypes) => {

  const order = sequelize.define('ordersModel',
      {
          userId: {
              type: DataTypes.INTEGER,
              allowNull: false
          },

          productName: {
            allowNull: false,
            type: DataTypes.TEXT
          },

          orderQuantity: {
              type: DataTypes.INTEGER,
              allowNull: false
          },

          orderPrice: {
              type: DataTypes.DECIMAL(10, 2),
              allowNull: false
          }
      },

      {
          tableName: 'orders',

      }
  )

  order.associate = (db) => {

      order.belongsTo(db.usersModel, {
          foreignKey: 'userId',
          as: 'user'
      })

  }


  return order
}
