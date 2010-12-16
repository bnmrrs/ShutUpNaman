$(document).ready(function() {
  jQuery.getJSON("http://twitter.com/statuses/user_timeline/naman_k.json?count=1&callback=?", function(data) {
    $("#tweet > p").html(data[0]['text']);
    $("#tweet > img").slideUp('slow');
  });
});