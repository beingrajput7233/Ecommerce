const express=require('express')
require('../db/conn')
const router=express.Router()
const customer=require('../models/customer')
router.get('/',(req,res)=>{
    res.send('Hello Jii')
})
router.post('/signin',async(req,res)=>{
    // res.send('Hello JII')
    const {name,email,address,phone,password}=req.body
    if(!name||!email||!address||!phone||!password){
        res.status(404).send('Fields are missing');
        return;
    }
    try {
        const cus=new customer({
        name:name,
        email:email,
        address:address,
        phone:phone,
        password:password
        })
        const result=await customer.collection.insertOne(cus);
        res.status(201).send('Registered Successfully');
    } catch (error) {
        res.status(404).send(error)
    }
})

// router.get('/login',async(req,res)=>{
//     // res.send('Hello JII')
//     const {email,password}=req.body
//     if(!email||!password){
//         res.status(404).send('Fields are missing');
//         return;
//     }
//     try {
//         const cus=new customer({
//         name:name,
//         email:email,
//         address:address,
//         phone:phone,
//         password:password
//         })
//         const result=await customer.collection.insertOne(cus);
//         res.status(201).send('Registered Successfully');
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })

module.exports=router