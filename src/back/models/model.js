const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const { INTEGER, TEXT, STRING } = DataTypes;

const Books = sequelize.define('Books', {
	link: { type: TEXT, allowNull: false },
	name: { type: STRING, allowNull: false },
	price: { type: INTEGER, allowNull: false },
    desc: { type: TEXT, allowNull: false },
	id: { type: INTEGER, primaryKey: true, autoIncrement: true }
});

module.exports = { Books }