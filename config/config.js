const node_environment = process.env.NODE_ENV || 'development'

if (node_environment === 'development') {
  
  require('dotenv').config()

}

module.exports = {

  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  port: process.env.DB_PORT,
  define: {
    timestamps: true,
    underscored: true
  }
};