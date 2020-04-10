$(document).on("click", ".start-button", function() {
  $(".start-screen").hide();
  $(".pre-level-one").show();
 setTimeout(function(){
    $(".pre-level-one").hide();
    $(".level-one").show();

    $("#animate").animate({
    left: "-1500px" }, 9000);
    $("#animate1").animate({
    left: "-1500px" }, 6000);
    $("#animate2").animate({
    left: "-1500px" }, 5000);
    $("#animate3").animate({
    left: "-1500px" }, 8000);
    $("#animate4").animate({
    left: "-1500px" }, 5000);

    $("#animate5").animate({
    left: "-1500px" }, 8000);
    $("#animate6").animate({
    left: "-1500px" }, 6000);
    $("#animate7").animate({
    left: "-1500px" }, 9000);
    $("#animate8").animate({
    left: "-1500px" }, 9000);

    $("#animate9").animate({
    left: "-1500px" }, 9000);
    $("#animate10").animate({
    left: "-1500px" }, 8000);
    $("#animate11").animate({
    left: "-1500px" }, 7000);
    $("#animate12").animate({
    left: "-1500px" }, 6000);
    $("#animate13").animate({
    left: "-1500px" }, 5000);
    $("#animate14").animate({
    left: "-1500px" }, 3000);
    $("#animate15").animate({
    left: "-1500px" }, 4000);
   }, 6000);
   setTimeout(function() {
     let input1 = prompt("How many fish did you count?")
   }, 15000)
   setTimeout(function(){
    $(".level-one").hide();
    $(".start-screen2").show();
  }, 15000);
});

$(document).on("click", ".start-button2", function() {
  $(".start-screen2").hide();
  $(".pre-level-two").show();
  setTimeout(function(){
        $(".pre-level-two").hide();
        $(".level-two").show();
    
        $("#animate16").animate({
        left: "-1500px" }, 9000);
        $("#animate17").animate({
        left: "-1500px" }, 8000);
        $("#animate18").animate({
        left: "-1500px" }, 7000);
        $("#animate19").animate({
        left: "-1500px" }, 5000);
        $("#animate20").animate({
        left: "-1500px" }, 5000);
    
        $("#animate21").animate({
        left: "-1500px" }, 5000);
        $("#animate22").animate({
        left: "-1500px" }, 4000);
        $("#animate23").animate({
        left: "-1500px" }, 8000);
        $("#animate24").animate({
        left: "-1500px" }, 9000);
    
        $("#animate25").animate({
        left: "-1500px" }, 9000);
        $("#animate26").animate({
        left: "-1500px" }, 8000);
        $("#animate27").animate({
        left: "-1500px" }, 7000);
        $("#animate28").animate({
        left: "-1500px" }, 6000);
        $("#animate29").animate({
        left: "-1500px" }, 5000);
        $("#animate30").animate({
        left: "-1500px" }, 3000);
        $("#animate31").animate({
        left: "-1500px" }, 4000);
       }, 6000);
       setTimeout(function() {
        let input2 = prompt("How many fish did you count?")
      }, 15000)
      setTimeout(function(){
        $(".level-two").hide();
        $(".start-screen3").show();
      }, 15000);
});

$(document).on("click", ".start-button3", function() {
  $(".start-screen3").hide();
  $(".pre-level-three").show();
  setTimeout(function(){
        $(".pre-level-three").hide();
        $(".level-three").show();
    
        $("#animate32").animate({
        left: "-1500px" }, 3000);
        $("#animate33").animate({
        left: "-1500px" }, 4000);
        $("#animate34").animate({
        left: "-1500px" }, 7000);
        $("#animate35").animate({
        left: "-1500px" }, 6000);
        $("#animate36").animate({
        left: "-1500px" }, 5000);
    
        $("#animate37").animate({
        left: "-1500px" }, 7000);
        $("#animate38").animate({
        left: "-1500px" }, 5000);
        $("#animate39").animate({
        left: "-1500px" }, 4000);
        $("#animate40").animate({
        left: "-1500px" }, 8000);
    
        $("#animate41").animate({
        left: "-1500px" }, 9000);
        $("#animate42").animate({
        left: "-1500px" }, 8000);
        $("#animate43").animate({
        left: "-1500px" }, 7000);
        $("#animate44").animate({
        left: "-1500px" }, 6000);
        $("#animate45").animate({
        left: "-1500px" }, 5000);
        $("#animate46").animate({
        left: "-1500px" }, 6000);
        $("#animate47").animate({
        left: "-1500px" }, 5000);
       }, 6000);
       setTimeout(function() {
        let input3 = prompt("How many fish did you count?")
      }, 15000)
      setTimeout(function(){
        $(".level-three").hide();
        $(".score-screen").show();
      }, 15000);
});

