const bookModel = require('../models/bookModel')

// Create book collection
const createBook = async function(req, res){
    let book = req.body
    let collectionBook = await bookModel.create(book)

    res.send({data:collectionBook})
}

//get list of all books
const getAllBooks = async function(req,res){
    let getBooks = await bookModel.find()

    res.send({data: getBooks})
}

module.exports.createBook=createBook
module.exports.getAllBooks=getAllBooks