const mongoose = require('mongoose');
const Joi = require('Joi');

const Currency = mongoose.model('Currency',new mongoose.Schema({
    date:{type: Date, default: Date.now},
    pair:{type:String, required:true},
    type: {type:String, required:true},//Order type (Limit,Market,etc.)
    side: {type:String, required:true},
    price:Number, //price of the coin in BTC 
    balance:Number,//Number of coins purchased
    priceInUSD:Number,//This is the product of priceOfBTC * price
    balanceInBTC:Number,//this the product of balance * priceInBTC
    symbol: {type:String, required:true},
    priceOfBTC:Number//This is the price of Bitcoin at the time of purchase
    }));



function validateCourse(currency){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(currency, schema);
    //check if there is any error
}

exports.Currency = Currency;
exports.validate = validateCourse;