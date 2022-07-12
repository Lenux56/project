const { Books } = require('../models/model');

class BookController {

	async getAll(req, res) {
		const books = await Books.findAll();
		return res.send(books)
	}
}

module.exports = new BookController();