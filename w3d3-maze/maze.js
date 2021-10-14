$(function () {
  let isGameStarted = false

  $("#start").click(function () {
    isGameStarted = true;
    $("#maze .boundary").css("background", "#eeeeee");
    $("#status").text("Game started . . .")
    $(".boundary").mouseenter(function () {
      if (isGameStarted) gameOver()
    });
    $('#maze').mouseleave(function (e) {
      if (isGameStarted) gameOver()
    })
  })

  $("#end").click(function () {
    if (isGameStarted)
      $("#status").text("You win! Click S to restart.")
    isGameStarted = false
  })

  function gameOver() {
    $("#maze .boundary").css("background", "red");
    $("#status").text("You lost! Click S to restart.")
    isGameStarted = false
  }

});