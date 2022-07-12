const express = require('express');
require('dotenv').config();
require('./models/model');

const cors = require('cors');
const bookRouter = require('./routers/booksRouter');

const sequelize = require('./db');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/book', bookRouter);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log('Server started...')
		})
	} catch (err) {
		console.log(err);
	}
}
start();