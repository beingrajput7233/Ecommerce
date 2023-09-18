const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    quantity:{
        
    }
})