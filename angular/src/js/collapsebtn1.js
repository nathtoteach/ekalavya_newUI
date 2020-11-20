$(document).ready(function(){
  $("#demo1").on("hide.bs.collapse", function(){
    $(".btn1").html('<img src="images/expand.svg">');
  });
  $("#demo1").on("show.bs.collapse", function(){
    $(".btn1").html('<img src="images/collapse.svg">');
  });
  
  $("#demo2").on("hide.bs.collapse", function(){
    $(".btn2").html('<img src="images/expand.svg">');
  });
  $("#demo2").on("show.bs.collapse", function(){
    $(".btn2").html('<img src="images/collapse.svg">');
  });
  
  $("#demo3").on("hide.bs.collapse", function(){
    $(".btn3").html('<img src="images/expand.svg">');
  });
  $("#demo3").on("show.bs.collapse", function(){
    $(".btn3").html('<img src="images/collapse.svg">');
  });
  
   $("#demo4").on("hide.bs.collapse", function(){
    $(".btn4").html('<img src="images/expand.svg">');
  });
  $("#demo4").on("show.bs.collapse", function(){
    $(".btn4").html('<img src="images/collapse.svg">');
  });
  
   $("#demo5").on("hide.bs.collapse", function(){
    $(".btn5").html('<img src="images/expand.svg">');
  });
  $("#demo5").on("show.bs.collapse", function(){
    $(".btn5").html('<img src="images/collapse.svg">');
  });
  
   $("#demo6").on("hide.bs.collapse", function(){
    $(".btn6").html('<img src="images/expand.svg">');
  });
  $("#demo6").on("show.bs.collapse", function(){
    $(".btn6").html('<img src="images/collapse.svg">');
  });
});

function openEmailForDemo(){
	window.open('mailto:snagavarma99@gmail.com');

}