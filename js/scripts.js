$(document).ready(function() {
  $("form#tests").submit(function(event) {
    event.preventDefault();
    var choices1 = parseInt($("input:checkbox[name=choice1]:checked").val());
    var choices2 = parseInt($("input:checkbox[name=choice2]:checked").val());
    var score = (choices1 + choices2);
    $("#finalScore").text(score);
  });
});
