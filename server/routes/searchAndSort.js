const express=require('express')
const mongoose=require('mongoose')
const router=express.Router()
const clothes=require('../models/clothes')

router.get('/searchandsort',async(req,res)=>{
    const {gender,product,brand,size,colour,sor}=req.body;
    try {
        const result=await clothes.find({
            $and:[
                {gender:gender},
                {product:product},
                {brand:brand},
                {size:size},
                {colour:colour}
            ]
        }).sort({price:sor})
        res.status(201).send(result); 
    } catch (error) {
        res.status(404).send(error);
    }
})

module.exports=router;


// {
//     "product":"Shirt",
//     "size":"XL",
//     "brand":"AX",
//     "sor":0
// }