$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    for (var i=0; i < blanks.length; i++) {
      var userInput = $("input#" + blanks[i]).val();
      $("." + blanks[i]).text(userInput);
    };

    $("#story").show();

    event.preventDefault();
  });
});
