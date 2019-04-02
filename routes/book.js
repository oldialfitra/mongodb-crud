const router = require('express').Router(),
controllerBook = require('../controllers/book')

router.post('/', controllerBook.create)

router.get('/', controllerBook.find)

router.put('/:isbn', controllerBook.updateOneBook)

router.delete('/:isbn', controllerBook.deleteOneBook)

module.exports = router