const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {Currency, validate} = require('../models/currency');

//Get all currencies
router.get('/', async (req,res) =>{
    const currencies = await Currency.find().sort('symbol');
    res.send(currencies);
});

//Get a currency by id
router.get('/:id',async (req,res) =>{
    const currency = await Currency.findById(req.params.id);
     //check if there is any error
     if(!currency) return res.status(400).send('The currency with the given symbol is not valid');
    res.send(currency);
});

router.put('/:id',async (req,res) =>{
     //validate the input
     const {error} = validate(req.body);
     //check if there is any error
     if(error) return res.status(400).send(error.details[0].message);
    const genre = await Currency.findByIdAndUpdate(req.params.id,{ symbol: req.body.symbol},{
        new: true
    });

    if(!currency) return res.status(404).send('The currency does not exists');
   
    res.send(currency);
});

router.post('/',async (req,res) =>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let currency = new Currency({
        date: req.body.date,
        pair: req.body.pair,
        type: req.body.type,
        side: req.body.side,
        price:req.body.price,
        balance: req.body.balance,
        priceInUSD: req.body.priceInUSD,
        balanceInBTC: req.body.balanceInBTC,
        symbol: req.body.symbol,
        priceOfBTC: req.body.priceOfBTC
    });
    currency = await currency.save();
    res.send(currency);
});

router.delete('/delete/:id',async (req,res) =>{
    const currency = await Currency.findByIdAndRemove(req.params.id);
    if(!currency) return res.status(404).send('The currency was not found');
    res.send(currency);
});

module.exports = router;