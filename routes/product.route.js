const express = require('express')
const app = express();
const productRoute = express.Router();

//Product Model
let Product = require('../models/Product');

//Add Product
productRoute.route('/create').post((req,res,next) => {
    Product.create(req.body,(error,data) =>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
});

//Get All Products
productRoute.route('/').get((req,res) =>{
    Product.find((error,data) =>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })

});

//Single Product
productRoute.route('/read/:id').get((req,res) =>{
    Product.findById(req.params.id,(error,data) =>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })

});

//update Product
productRoute.route('/update/:id').put((req,res,next) => {
    Product.findByIdAndUpdate(req.params.id,{
        $set : req.body
    },(error,data) =>{
        if(error){
            return next(error);
            console.log(error);
        }else{
            res.json(data);
            console.log("Data updated Succesfully")
        }
    })
})

//Delete Product
productRoute.route('/delete/:id').delete((req,res,next) => {
    Product.findOneAndRemove(req.params.id,(error,data) =>{
        if(error){
            return next(error)
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})

module.exports = productRoute;