const express=require ('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})
require('./db/conn')
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(5000,()=>{
    console.log('Server running on 5000');
})