const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('comments', 'root', 'jsql89',{
   host: process.env.HOST || 'localhost',
   dialect: 'mysql',
   operatorsAliases: false
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

    })
    .catch((err) => {
        console.error('Unable to connect to the database: ', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;