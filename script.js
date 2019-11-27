let ctx = null;
let tileW = 53.4, tileH = 50;
let mapW = 15, mapH = 16;

let currentSecond = 0, frameCount = 0, frameLastSecond = 0;

let gameMap = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 0,
    0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 0,
    0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 0,
    0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 0,
    0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 0,
    0, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 0,
    0, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 0,
    0, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 0,
    0, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 0,
    0, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 0,
    0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 0,
    0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
    0, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

window.onload = function () {
    ctx = document.getElementById("game").getContext("2d");
    requestAnimationFrame(drawGame);
    ctx.front = "bold 10pt sans-serif"
};

function drawGame() {
    if (ctx === null) {
        return;
    }
    let seconds = Math.floor(Date.now() / 1000)
    if (seconds != currentSecond) {
        currentSecond = seconds;
        frameLastSecond = frameCount;
        frameCount = 1;
    } else {
        frameCount++
    }
    for (let y = 0; y < mapH; y++) {
        // console.log(this.mapHeigth[y])
        for (let x = 0; x < mapW; x++) {
            switch (gameMap[(y * mapW) + x]) {
                case 0:
                    ctx.fillStyle = "#549393";
                    break;
                case 1:
                    ctx.fillStyle = "#E1E1D4";
                    break;
                case 2:
                    ctx.fillStyle = "#3F5A6C";
                    break;
                default:
                    ctx.fillStyle = "#549393";
            }
            ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
        }
    }
    ctx.fillStyle = "yellow";
    ctx.fillText("FPS: " + framesLastSecond, 10, 20)

    requestAnimationFrame(drawGame);
}
