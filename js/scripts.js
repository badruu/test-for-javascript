$(document).ready(function() {
  $("form#tests").submit(function(event) {
    event.preventDefault();
    var choices1 = parseInt($("input:checkbox[name=choice1]:checked").val());
    var choices2 = parseInt($("input:checkbox[name=choice2]:checked").val());
    var choices3 = parseInt($("input:checkbox[name=choice3]:checked").val());
    var choices4 = parseInt($("input:checkbox[name=choice4]:checked").val());
    var score = (choices1 + choices2 + choices3 + choices4);
    $("#finalScore").text(score);
  });
});
