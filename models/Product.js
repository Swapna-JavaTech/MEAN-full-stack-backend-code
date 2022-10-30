//import mongoose
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Product = new Schema({
    productName:{
        type:String
    },
    productBrand:{
        type:String
    },
    productPrice:{
        type:Number
    }
},{
    collection: 'products'
})

module.exports = mongoose.model('Product',Product)