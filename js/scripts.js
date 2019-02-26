//UI logic

$(document).ready(function() {
  $("#details").submit(function(event) {
    event.preventDefault();
    var firstNameInput = $("#firstName").val();
    var middleInitialInput = $("input#middleInitial").val();
    var lastNameInput = $("input#lastName").val();

    $(".1stName").text(firstNameInput);
    $(".middleInit").text(middleInitialInput);
    $(".2ndName").text(lastNameInput);
  });
  $("#tests").submit(function(event) {
    event.preventDefault();
    var choices1 = parseInt($("input:checkbox[name=choice1]:checked").val());
    var choices2 = parseInt($("input:checkbox[name=choice2]:checked").val());
    var choices3 = parseInt($("input:checkbox[name=choice3]:checked").val());
    var choices4 = parseInt($("input:checkbox[name=choice4]:checked").val());
    marks(choices1,choices2,choices3,choices4)
  })
  $("#button").click(function() {
    location.replace('#exam')
    $('.general-details').hide();
    $("#exam").show();
 });
});

//business logic
function marks(choices1,choices2,choices3,choices4){
  var score = (choices1 + choices2 + choices3 + choices4);
  $(".finalScore").text(score);
}
