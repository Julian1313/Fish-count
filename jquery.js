$(document).on("click", ".start-button", function() {
    $(".start-screen").hide();
    $(".pre-level-one").show();
  });
  
  $(document).on("click", ".pre1-button", function() {
    $(".pre-level-one").hide(1000);
    $(".level-one").show();
  });
  
  $(document).ready(function(e) {
    var width = "+=" + $(document).width();
    $("#animate").animate({
    left: width
  }, 5000, function() {
  });
  });
  
  /*const startButton = document.querySelector(".start-button")
  const startScreen = document.querySelector(".start-screen")
  const preLevelOne = document.querySelector(".pre-level-one")
  
  startButton.addEventListener("click", function(){
    startScreen.style.display = "none"
    preLevelOne.style.display = "flex"
  })*/