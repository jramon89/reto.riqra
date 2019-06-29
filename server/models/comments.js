const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/db').sequelize;
class List extends Model {}
List.init({
    content: {
        type: Sequelize.STRING
    }
},{
    sequelize,
    modelName: 'list',
    timestamps: false
});

module.exports = List;
