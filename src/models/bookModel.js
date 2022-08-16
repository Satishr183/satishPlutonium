const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName :{
        type : String,
        required : true
    },
    authorName : String,
    category : String,
    year : {
        type: Number,
        default : "2022"
    },
    price :{
        indianPrice : String,
        euroPrice : String
    },
    tag : [String],
    totalPages: Number,
    stock: Boolean

}, {timestamps: true})

module.exports = mongoose.model('Book', bookSchema)