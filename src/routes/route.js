const express = require('express')
const router = express.Router()
const bookControl = require('../controller/bookController')

// of books
router.post('/createBook', bookControl.createBook)

//get list of all books
router.get('/getAllBooks', bookControl.getAllBooks)

//get list of book with year condition
router.post('/getYearBooks', bookControl.getBooksInYear)

//get particular books
router.post('/getParticularBook', bookControl.getParticularBooks)

//give list of books whose price is matched with 100inr,200inr and 500inr
router.get('/getINRprice', bookControl.getXINRBooks)

//return all the books which have stock =true or pages >=500
router.get('/getRandomBooks', bookControl.getRandomBooks)


module.exports = router