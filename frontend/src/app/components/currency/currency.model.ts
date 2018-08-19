export interface Currency{
    date: Date,
    pair: String,
    type: String,
    side: String,
    price:Number, //price of the coin in BTC 
    balance:Number,//Number of coins purchased
    priceInUSD:Number,//This is the product of priceOfBTC * price
    balanceInBTC:Number,//this the product of balance * priceInBTC
    symbol: String,
    priceOfBTC:Number//This is the price of Bitcoin at the time of purchase
}