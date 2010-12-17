$(document).ready(function() {
  jQuery.getJSON("http://twitter.com/statuses/user_timeline/naman_k.json?count=1&callback=?", function(data) {
    if(data[0]) {
      $("#tweet > p").html(data[0]['text']);
      $("#tweet > img").slideUp('slow');
      $(".shutup").fadeIn('slow');
    } else {
      $("#tweet > p").html('Oops! Twitter wouldn\'t tell us what Naman is saying. We\'ll ask them again later.');
      $("#tweet > img").slideUp('slow');
    }
  });
});