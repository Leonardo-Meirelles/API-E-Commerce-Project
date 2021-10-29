module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('usersModel',
    {
      userName: {
        type: DataTypes.TEXT,
        allowNull: false
      },

      userEmail: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },

    {
      tableName: 'users',

    }
  )

  User.associate = (db) => {

    User.hasMany(db.ordersModel, {
      foreignKey: 'userId',
      as: 'order'
    })
  }

  return User
};
