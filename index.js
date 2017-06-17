$(document).ready(function(){
  function getQuote(){
  //var quotes = ["Hello", "You", "Batman"];
//  var authors =  ["Michael", "Java", "Kim"];
//  var randomNum = Math.floor((Math.random() //* quotes.length));
//  var randomQuote = quotes[randomNum];
 //   var randomAuthor = authors[randomNum];
  //  $(".text").text(randomQuote);
  //  $(".name").text(randomAuthor);
  //}
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      $(".text").html(data.quoteText);
      $(".name").html(data.quoteAuthor);
    });
  };

    $(".button").on("click", function(){
      getQuote();
 });
});