class Game {
    constructor() {
            this.ctx = null,
            this.tileW = 53.4,
            this.tileH = 50,
            this.mapW = 15,
            this.mapH = 16,

            this.brainPlayer = new Player(this),


            this.currentSecond = 0,
            this.frameCount = 0,
            this.frameLastSecond = 0,
            this.lastFrameTime = 0,

            this.keysDown = {
                37: false,
                38: false,
                39: false,
                40: false
            }

        this.gameMap = [
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
    }

    init() {
        this.ctx = document.getElementById("game").getContext("2d");
        requestAnimationFrame(this.drawGame)
        this.start()
    }

    start() {
        this.drawGame();
        this.drawMainCharacters();
    }

    drawGame() {
        if (this.ctx === null) {
            return;
        }
        let seconds = Math.floor(Date.now() / 1000)
        if (seconds != this.currentSecond) {
            this.currentSecond = seconds;
            this.frameLastSecond = this.frameCount;
            this.frameCount = 1;
        } else {
            this.frameCount++
        }
        for (let y = 0; y < this.mapH; y++) {
            // console.log(this.mapHeigth[y])
            for (let x = 0; x < this.mapW; x++) {
                switch (this.gameMap[(y * this.mapW) + x]) {
                    case 0:
                        this.ctx.fillStyle = "#549393";
                        break;
                    case 1:
                        this.ctx.fillStyle = "#E1E1D4";
                        break;
                    case 2:
                        this.ctx.fillStyle = "#3F5A6C";
                        break;
                    default:
                        this.ctx.fillStyle = "#549393";
                }
                this.ctx.fillRect(x * this.tileW, y * this.tileH, this.tileW, this.tileH);
            }
        }
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText("FPS: " + this.framesLastSecond, 10, 20)
    
        requestAnimationFrame(this.drawGame);
    }

    drawMainCharacters() {
        this.brainPlayer.drawComponent("./images/brain.png");
    }
}