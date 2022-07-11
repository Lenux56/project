const router = new require('express')();
const { getAll } = require('../controllers/bookcontroller');


router.get('/all', getAll);


module.exports = router