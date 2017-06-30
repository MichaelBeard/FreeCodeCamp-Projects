$(document).ready(function(){
  var quoteText;
  var quoteAuthor;
  
  $("#newQuote").on("click", function(){
    getQuote();
  });
  function getQuote(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data){
      quoteText = data.quoteText;
      quoteAuthor = data.quoteAuthor;
      $(".text").html(data.quoteText);
      $(".name").html(data.quoteAuthor);
    });
  };

    
  $("#tweetQuote").on("click", function(){
    url="https://twitter.com/intent/tweet?text="+ quoteText + "  -"+ quoteAuthor;
      window.open(url, "_blank");
  });
});
