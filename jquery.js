$(document).on("click", ".start-button", function() {
  $(".start-screen").hide();
  $(".pre-level-one").show();
 setTimeout(function(){
    $(".pre-level-one").hide();
    $(".level-one").show();

    $("#animate").animate({
    left: "-1500px" }, 9000);
    $("#animate1").animate({
    left: "-1500px" }, 8000);
    $("#animate2").animate({
    left: "-1500px" }, 7000);
    $("#animate3").animate({
    left: "-1500px" }, 6000);
    $("#animate4").animate({
    left: "-1500px" }, 5000);

    $("#animate5").animate({
    left: "-1500px" }, 5000);
    $("#animate6").animate({
    left: "-1500px" }, 5000);
    $("#animate7").animate({
    left: "-1500px" }, 5000);
    $("#animate8").animate({
    left: "-1500px" }, 5000);

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
    left: "-1500px" }, 6000);
    $("#animate15").animate({
    left: "-1500px" }, 5000);
   }, 6000);
   setTimeout(function() {
     prompt("How many fish did you count?")
   }, 17000)
});
