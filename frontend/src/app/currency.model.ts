export interface Currency {
    date:{type: Date},
    pair:{type:String, required:true},
    type: {type:String, required:true},//Order type (Limit,Market,etc.)
    side: {type:String, required:true},
    price:Number, //price of the coin in BTC 
    balance:Number,//Number of coins purchased
    priceInUSD:Number,//This is the product of priceOfBTC * price
    balanceInBTC:Number,//this the product of balance * priceInBTC
    symbol: {type:String, required:true},
    priceOfBTC:Number//This is the price of Bitcoin at the time of purchase
}