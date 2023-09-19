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
        const obj=req.body
        console.log(obj)
        // converting all data to lower case to remove the case of pattern matching
        for(const key in obj){
            if(typeof(obj[key])=== 'string'){
                obj[key]=obj[key].toLowerCase();
            }
        }
        const clothe=new clothes(obj);
        const result=await clothes.collection.insertOne(clothe)
        res.status(201).send('Clothe Added Successfully');
    } catch (error) {
        res.status(404).send('Failed to add');
    }
})

module.exports=router;