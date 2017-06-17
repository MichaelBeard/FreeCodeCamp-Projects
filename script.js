$(document).ready(function(){
  function getQuote(){
  var quotes = ["Hello", "You", "Batman"];
  var authors =  ["Michael", "Java", "Kim"];
  var randomNum = Math.floor((Math.random() * quotes.length));
  var randomQuote = quotes[randomNum];
    var randomAuthor = authors[randomNum];
    $(".text").text(randomQuote);
    $(".name").text(randomAuthor);
  }
    $(".button").on("click", function(){
      getQuote();
    });
});