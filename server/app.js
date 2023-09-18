const express=require ('express')
const mongoose=require('mongoose')
var passport=require('passport')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
require('./db/conn')
const app=express()
app.use(express.json())


app.use(require('./routes/register'))
app.use(require('./routes/login'))
app.use(require('./routes/clothesAdd'))
app.use(require('./routes/searchAndSort'))

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(5000,()=>{
    console.log('Server running on 5000');
})

//------------------------------------------------------------
