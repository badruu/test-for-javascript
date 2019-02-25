inputIds=[]
values=[]
$(document).ready(function() {
  $("#submit").click(function() {
    //event.preventDefault();
    var choices1 = parseInt($("input:checkbox[name=choice1]:checked").val());
    var choices2 = parseInt($("input:checkbox[name=choice2]:checked").val());
    var choices3 = parseInt($("input:checkbox[name=choice3]:checked").val());
    var choices4 = parseInt($("input:checkbox[name=choice4]:checked").val());
    var score = (choices1 + choices2 + choices3 + choices4);


//    $('#tests').hide();
    $("#finalScore").text('Your score is'+score);
  });
  $("#button").click(function() {
    location.replace('#exam')
    $('.general-details').hide();
    $("#exam").show();
  });


  $('#details').click(function(){
    $("input").each(function(){
      var inputId=$(this).attr('id');
      inputIds.push(inputId)
    })
    getValue();
  })

});

function getValue(){
  alert(inputIds)
  for(i=0;i<inputIds.length;i+=1){
    var value=$(inputIds[i]).val()

    values.push(value)

  }
  alert(values)
}
