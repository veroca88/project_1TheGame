function presentationMove() {
  elPlayer = document.getElementById("brain-presentation");

  docWidth = screen.width - elPlayer.width;
  docHeigth = screen.height - elPlayer.height;

  setInterval(move, 600);
}

function move() {
  elPlayer.style.top = Math.round(Math.random() * docWidth) + "px";
  elPlayer.style.left = Math.round(Math.random() * docHeigth) + "px";
}

// let elGoal = document.getElementById("key-presentation")

presentationMove();

$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
