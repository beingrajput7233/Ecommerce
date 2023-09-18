const express=require('express')
const mongoose=require('mongoose')
const router=express.Router()
const clothes=require('../models/clothes')

router.post('/clothesAdd',async(req,res)=>{
    const {product,size,gender,colour,price,brand}=req.body;
    if(!product||!size||!gender||!colour||!price||!brand){
        res.status(404).send('Fields Missing!!');
        return;
    }
    try {
        const clothe=new clothes({
            product:product,
            size:size,
            gender:gender,
            colour:colour,
            price:price,
            brand:brand
        })

        const result=await clothes.collection.insertOne(clothe)
        res.status(201).send('Clothe Added Successfully');
    } catch (error) {
        res.status(404).send('Failed to add');
    }
})

module.exports=router;