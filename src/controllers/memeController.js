const axios = require('axios')


const getAllMemes = async function(req,res){
    let options ={
        method:'get',
        url:'https://api.imgflip.com/get_memes'
    }
    let result = await axios(options)

    res.status(200).send({data:result.data})
}

const createMeme = async function(req,res){

    let template_id =req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username = req.query.username
    let password = req.query.password
    let options ={
        method:'post',
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(options)

    res.status(201).send({data:result.data})
}



module.exports.getAllMemes=getAllMemes
module.exports.createMeme=createMeme