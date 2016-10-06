var credentials = {
    username: '',
    password: ''
};

var Robinhood = require('robinhood-observer')     //Robinhood has not authenticated but can still be used for the unauthenticated subset of the API
var subscription = Robinhood(null).observeQuote(['AAPL'])
var subscription = Robinhood(null).observeQuote(['AAPL'])
.map(quote => quote.results)
.distinct()                                             //Only use distict results...
.subscribe(x => {
  //Do something each time the price changes
  console.log(x);

}, e => {
  console.error(e)
}, () => console.log('disposed'));

 //Unsubscribe to updates for the data after 6 seconds.

setTimeout(function(){
  subscription.dispose();
}, 60000);
