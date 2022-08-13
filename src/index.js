const express = require('express')
const {default:mongoose} = require('mongoose')
const bodyParser = require('body-parser')

const route = require('./routes/route')

//using the express package
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Mongoose helps to make connection between mongoDb and Nodejs
mongoose.connect("mongodb+srv://Satishr183:6SdvyY7phCfH5VsV@cluster0.ewmx8.mongodb.net/books",{
    useNewUrlParser: true
})
.then( ()=> console.log("MognoDB Connected..."))
.catch( err => console.log(err))

//route entry point
app.use('/', route)

app.listen(process.env.PORT || 3000, function(){
    console.log("Express is running on port "+(process.env.PORT || 3000))
})