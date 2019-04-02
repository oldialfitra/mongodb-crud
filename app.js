const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
routerBook = require('./routes/book')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/books', routerBook)

app.listen(port, function () {
    console.log('Listening on port:', port)
})