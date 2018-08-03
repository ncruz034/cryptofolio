const express = require('express');
const app = express();
const currency = require('./routes/currency');
const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
    timestamp:{type: Date, default: Date.now},
    pair:String,
    type: String,
    side: String,
    price:Number,  
    amount:Number,//Number of coins purchased
    symbol: String,
    priceOfBTC:Number//This is the price of Bitcoin at the time of purchase
    });
//app.use('/api');

app.listen(3000,()=>{
    console.log('Listening on port: 3000');
})
