//user interface logic
$(document).ready(function() {
$("form#display").submit(function(event) {
  event.preventDefault();
  $(".Push").empty();
  var display = parseInt($("input#pingpong").val());
  var resul = answer(display).toString();
  var result = resul.split(",").join("<br>");
  $(".Push").addClass("res-scroll").append('<li class="res-scroll">'+result+'</li>');

});
  });

  //business logic
  function answer(display){
    var arr = [];
    for(i=1; i<=display; i++){
      // if the number is divisible by 15, Display ping pong
      if ( i % 15 === 0) {
        console.log("pingpong")
        arr.push("PING PONG");
        }
      //if the number is divisible by 3
      else if ( i % 3 === 0) {
        arr.push("PING");
        }
        //if the number is divisible by 5
        else if ( i % 5 === 0) {
        arr.push("PONG");
        }
        //if the number is not divisible by anything
        else {
          console.log("conto");
          arr.push(i);

        }
    };
    return arr;
  }
