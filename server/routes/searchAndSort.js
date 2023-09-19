const express=require('express')
const mongoose=require('mongoose')
const router=express.Router()
const clothes=require('../models/clothes')

router.get('/searchandsort',async(req,res)=>{
    const {gender,product,brand,size,colour,sor}=req.body;
    try {
        // search box
            const search=req.query.search||""
            // console.log(search)
            const r=String(search)
            const searchArray=r.split(' ');
            console.log(searchArray)

            // to convert each word to lowercase to fuck regex matching
            const lowerCaseSearch=[];

            for (const word of searchArray){
                lowerCaseSearch.push(word.toLowerCase());
            }

            console.log(lowerCaseSearch)

            const defaultProduct=await clothes.find()
            const prodarr=[]
            const brandarr=[]
            const genderarr=[]
            const colourarr=[]
            
            for (let i = 0; i < defaultProduct.length; i++) {
                const productObject = defaultProduct[i];
                const product = productObject.product;
                const gender = productObject.gender;
                const brand = productObject.brand;
                const colour = productObject.colour;
                prodarr.push(product)
                brandarr.push(brand)
                genderarr.push(gender)
                colourarr.push(colour)
                // console.log(`Product: ${product}, Size: ${size}, Brand: ${brand}, Price: ${price}`);
              }
            // const regexPattern=new RegExp('^' + search)
            // const query = { brand: { $regex: regexPattern, $options: 'i' } };
            const query={
                $or: [
                    { product: { $in: lowerCaseSearch } },
                    { product: { $in: prodarr } },
                  ],
                $or: [
                    { brand: { $in: lowerCaseSearch } },
                    { brand: { $in: brandarr } },
                  ]
            }
            const result=await clothes.find(query);
            res.status(201).send(result);



            // const defaultProduct=await clothes.find()
            








        // const result=await clothes.find({
        //     $and:[
        //         // {gender:gender},
        //         {product:product},
        //         {brand:brand},
        //         {size:size}
        //         // {colour:colour}
        //     ]
        // }).sort({price:sor})
        // res.status(201).send(result); 
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