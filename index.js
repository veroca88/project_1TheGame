window.addEventListener("load", () => {
    const myGame = new Game();
    myGame.initGame();
    // console.log("Loading game data ", myGame)
    
    window.addEventListener("keydown", function (e) {
        if (e.keyCode >= 37 && e.keyCode <= 40) {
            myGame.keysDown[e.keyCode] = true;
        }
    });
    
    window.addEventListener("keyup", function (e) {
        if (e.keyCode >= 37 && e.keyCode <= 40) {
            myGame.keysDown[e.keyCode] = false;
        }
    })
});