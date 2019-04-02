const dbName = 'LibraryNew',
    { MongoClient } = require('mongodb'),
    url = 'mongodb://localhost:27017'

class Book {
    static createBook(input) {
        const client = new MongoClient(url, { useNewUrlParser: true })
        return new Promise((resolve, reject) => {
            client
                .connect()
                .then(function () {
                    const db = client.db(dbName).collection(dbName)
                    db
                        .insertOne(input, (err, book) => {
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve(book)
                            }
                        })
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

    static findAllBooks() {
        const client = new MongoClient(url, { useNewUrlParser: true })
        return new Promise((resolve, reject) => {
            client
                .connect()
                .then(function () {
                    const db = client.db(dbName).collection(dbName)
                    db
                        .find()
                        .toArray(function (err, books) {
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve(books)
                            }
                        })
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

    static updateBook(idIsbn, input) {
        const client = new MongoClient(url, { useNewUrlParser: true })
        return new Promise((resolve, reject) => {
            client
                .connect()
                .then(function () {
                    const db = client.db(dbName).collection(dbName)
                    db
                        .updateOne({ isbn: idIsbn }, { $set: input }, (err, book) => {
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve(book)
                            }
                        })
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

    static deleteBook(idIsbn) {
        const client = new MongoClient(url, { useNewUrlParser: true })
        return new Promise((resolve, reject) => {
            client
                .connect()
                .then(function () {
                    const db = client.db(dbName).collection(dbName)
                    db
                        .findOneAndDelete({ isbn: idIsbn }, (err, book) => {
                            if (err) {
                                reject(err)
                            }
                            else {
                                resolve(book)
                            }
                        })
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }
}

module.exports = Book