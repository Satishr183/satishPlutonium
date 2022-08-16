const bookModel = require('../models/bookModel')

// Create book collection
const createBook = async function(req, res){
    let book = req.body
    let collectionBook = await bookModel.create(book)

    res.send({data:collectionBook})
}

//get list of all books with bookName and authorName
const getAllBooks = async function(req,res){
    let getBooks = await bookModel.find().select({bookName:1, authorName:1, _id:0})

    res.send({data: getBooks})
}

//get list of all books when input year is matched with year in DB

const getBooksInYear = async function(req, res){
    let year = req.body.year
    let yearBooks = await bookModel.find({year:{$eq: year}}) 

    res.send({msg:yearBooks})
}

//get the book name when bookname is matched or if year matched give the year

const getParticularBooks = async function(req, res){
    let year = req.body.year
    let name = req.body.name
    let particularBook = await bookModel.find({$or :[{bookName:{$eq:name}},{year :{$eq :year}}]})

    res.send({msg:particularBook})
}

//give list of books whose price is matched with 100inr,200inr and 500inr
const getXINRBooks = async function(req, res){

    let inrBooks = await bookModel.find({$or:[{price:{$eq:/^100INR/}},{price:{$eq:/^200INR/}},{price:{$eq:/^500INR/}}]})

    res.send({msg:inrBooks})
}

//list all books whose having more than 500pages or stock=true

const getRandomBooks = async function(req, res){
        let randomBooks = await bookModel.find({$or:[{stock:true},{totalPages:{$gt:500}}]})

        res.send({msg:randomBooks})
}

module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getParticularBooks=getParticularBooks
module.exports.getBooksInYear=getBooksInYear

module.exports.createBook=createBook
module.exports.getAllBooks=getAllBooks