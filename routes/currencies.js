const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');



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


//Get all currencies
router.get('/',(req,res) =>{
    const currencies = await Currency
    .find({symbol:'XLM'})
    .sort({date: 1})
    .select({pair:1,price:1,date:1});

    res.send(currencies);
});

//Get a currency by id
router.get('/:id',(req,res) =>{
    
    const currency = currencies.find(g => g.id ===parseInt(req.param.id));
    if(!currency) res.status(404).send('The currency does not exists');
    res.send(currency);
});

router.put('/:id',(req,res) =>{
    const currency = currencies.find(g => g.id ===parseInt(req.param.id));
    if(!currency) return res.status(404).send('The currency does not exists');
   
     //validate the input
     const {error} = validateCourse(req.body);
     //check if there is any error
     if(error) return res.status(400).send(error.details[0].message);
   
     currency.name = req.body.name;
    res.send(currency);
});

router.post('/',(req,res) =>{
    const {error} = validateCourse(req.body.name);
    if (error) return res.status(400).send(error.details[0].message);

    const currency = {
        id:currencies.length +1,
        name:req.body.name
    }

    currencies.push(currency);
    res.send(currency);
});

router.delete('/',(req,res) =>{
    const currency = currencies.find(c => c.id === parseInt(req.body.id));
    if(!currency) return res.status(404).send('The currency was not found');

    const {error} = validateCourse(req.body.name);
    if (error) return res.status(400).send(error.details[0].message);

    const index = currencies.indexOf(currency);
    currencies.splice(index,1);
    res.send(currency);
});

function validateCourse(currency){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(currency, schema);
    //check if there is any error
}

module.exports = router;