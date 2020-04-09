$(document).on("click", ".start-button", function() {
  $(".start-screen").hide();
  $(".pre-level-one").show();
 setTimeout(function(){
    $(".pre-level-one").hide();
    $(".level-one").show();
    $("#animate").animate({
    left: "-400px" }, 3000);
   }, 6000);
});