const mongoose=require('mongoose')

const clothesSchema=new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    size:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    colour:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

const Clothes=mongoose.model('CLOTHES',clothesSchema)
module.exports=Clothes;

