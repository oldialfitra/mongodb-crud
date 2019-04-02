const book = require('../models/book')

class Book {
    static create(req, res) {
        book
        .createBook(req.body)
        .then(function (newBook) {
            res.status(201).json(newBook)
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
    }

    static find(req, res) {
        book
        .findAllBooks()
        .then(function (books) {
            res.status(200).json(books)
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
    }

    static updateOneBook(req, res) {
        book
        .updateBook(req.params.isbn, req.body)
        .then(function (book) {
            res.status(200).json(book)
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
    }

    static deleteOneBook(req,res) {
        book
        .deleteBook(req.params.isbn)
        .then(function (book) {
            res.status(200).json(book)
        })
        .catch(function (err) {
            res.status(500).json(err)
        })
    }
}

module.exports = Book