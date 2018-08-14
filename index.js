

const express = require('express');

const currencies = require('./routes/currencies');
const home = require('./routes/home');
const mongoose = require('mongoose');
const app = express();
const router = express.Router()

mongoose.connect('mongodb://localhost/cryptofolio')
    .then(()=> console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB',err))
/*
async function createCurrency(){
    const currency = new Currency({
        date:'08-06-2018 01:45:55'	,
        pair:'XLM/BTC',
        type:'LIMIT',
        side: 'BUY',
        price:0.00001693, //price of the coin in BTC 
        balance:5011,//Number of coins purchased
        priceInUSD:0.113431,//This is the product of priceOfBTC * price
        balanceInBTC:0.08483623,//this the product of balance * price
        symbol: 'XLM',
        priceOfBTC:7105.0342625//(priceInUsd * balance)/balanceInBTC
    });

    try{
        const result = await currency.save();
        console.log(result);
    }catch(ex){
        console.log(ex.message);
    }
    
}
//Get all currencies
async function getCurrencies(){
    const currencies = await Currency
    .find({symbol:'XLM'})
    .sort({date: 1})
    .select({pair:1,price:1,date:1});
    console.log(currencies);
}
//We use this method by finding first the record then updating it
async function findThenUpdateCurrency(id){
    const currency = await Currency.findById(id);
    if(!currency) return;
    currency.side = 'SALE';
    const result = await currency.save();
    console.log(result);
}
//Update the record and returns the old document.
async function updateCurrencyByIdReturnOld(id){
    const currency = await Currency.findByIdAndUpdate(id,{
        $set: {
            side:'BUY'
        }
    });
    console.log(currency);
}
//Update the record and returns the New document.
async function updateCurrencyByIdReturnNew(id){
    const currency = await Currency.findByIdAndUpdate(id,{
        $set: {
            side:'SALE'
        },
    },{
        new:true});
    console.log(currency);
}
//To update the document without returning it
async function updateCurrency(id){
    const result = await Currency.update({_id:id},{
        $set: {
            side:'BUY'
        }
    });
    console.log(result);
}
//To update the document without returning it
async function deleteCurrency(id){
    const result = await Currency.deleteOne({_id:id});
    console.log(result);
}


//createCurrency();
//updateCurrencyByIdReturnNew('5b6ba9a59b07cf9f5462b53f');
//updateCurrencyByIdReturnOld('5b6ba9a59b07cf9f5462b53f');
//updateCurrency('5b6ba9a59b07cf9f5462b53f');
//findThenUpdateCurrency('5b6ba2389eb7210bd171e123');
//getCurrencies();
*/
app.use(express.json());
app.use('/api/currencies', currencies);
const port = process.env.PORT || 3000;

app.listen(port ,()=>{console.log(`Listening on port ${port}...`);})
