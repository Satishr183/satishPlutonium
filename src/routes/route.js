const express = require('express')
const router = express.Router()
const bookControl = require('../controller/bookController')

// of books
router.post('/createBook', bookControl.createBook)

//get list of all books
router.get('/getAllBooks', bookControl.getAllBooks)



module.exports = router