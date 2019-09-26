const Sequelize = require('sequelize');
const sequelize = new Sequelize('mytestdb', 'testuser', 'testuser', {
    host: 'localhost',
    dialect: 'mariadb'
  });

module.exports = sequelize;