const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, TEXT } = DataTypes;

const AuthorsBook = sequelize.define('Books', {
	link: { type: TEXT, allowNull: false },
	name: { type: TEXT, allowNull: false },
	price: { type: TEXT, allowNull: false },
    desc: { type: TEXT, allowNull: false },
	id: { type: INTEGER, primaryKey: true, autoIncrement: false }
}, {
	freezeTableName: true
});

module.exports = { Books }