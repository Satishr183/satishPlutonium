const express = require('express')
const router = express.Router()
const authorBookControl = require('../controller/authorBookController')


router.post('/createAuthor', authorBookControl.createAuthor)
router.post('/createBook', authorBookControl.createBook)
router.get('/isAuthorId', authorBookControl.isAuthorId)
router.get('/books', authorBookControl.listOfBooks)
router.post('/updateBook', authorBookControl.findAndUpdateBook)
router.get('/authorName', authorBookControl.authorName)


module.exports = router