var Robinhood = require('robinhood-observer')     //Robinhood has not authenticated but can still be used for the unauthenticated subset of the API

var credentials = {
    username: '',
    password: ''
};

var symbols = process.env.SYMBOLS.split(":")
console.log(process.env)

var subscription = Robinhood(null).observeQuote(symbols)
.map(quote => quote.results)
.distinct()                                             //Only use distict results...
.subscribe(x => {
  //Do something each time the price changes
  console.log(x[0].last_trade_price, x[0]);
}, e => {
  console.error(e)
}, () => console.log('disposed'));

 //Unsubscribe to updates for the data after 10 minutes

setTimeout(function(){
  subscription.dispose();
}, 60000*10);
