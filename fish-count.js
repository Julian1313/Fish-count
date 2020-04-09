//setTimeout(function() { alert("my message"); }, 5000);


/*function fade_out() {
  $(".instructions-one").fadeOut().empty();
}

/*setTimeout2(fade_out, 5000);

function fade_out() {
  $(".instructions-img1").fadeOut().empty();
}
*/
let fade_out = function() {
    $(".instructions-one").fadeOut().empty();
    $(".instructions-img1").fadeOut().empty();
  }
  
  setTimeout(fade_out, 5000);