module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define('ordersModel',
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            productId: {
                allowNull: false,
                type: DataTypes.TEXT
            },

            productVendor: {
                allowNull: false,
                type: DataTypes.TEXT
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

    Order.associate = (db) => {

        Order.belongsTo(db.usersModel, {
            foreignKey: 'userId',
            as: 'user'
        })

    }


    return Order
};
