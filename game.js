class Game {
    constructor() {
        this.gameMap = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 0,
            0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 0,
            0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 0,
            0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 0,
            0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 0,
            0, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 0,
            0, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 0,
            0, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 0,
            0, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 0,
            0, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 0,
            0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 0,
            0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 0,
            0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0,
            0, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
            this.ctx = document.getElementById('game').getContext("2d"),
            this.tileW = 53.4,
            this.tileH = 50,
            this.mapW = 15,
            this.mapH = 16,

            this.currentSecond = 0,
            this.frameCount = 0,
            this.framesLastSecond = 0,
            this.lastFrameTime = 0,

            this.keysDown = {
                37: false,
                38: false,
                39: false,
                40: false
            },

            this.brainPlayer = new Player(this, 60, 60, 65, 65),
            this.currentFrameTime = Date.now()
    }

    initGame() {
        // console.log("in the in it game method ==== ", this.ctx)
        window.requestAnimationFrame(this.drawGame)
        this.ctx.font = "bold 10pt sans-serif";
        // this.drawMainCharacters();
    }
        
    drawGame = () => {
        console.log('the ctx in draw game >>> ', this.keysDown);
        if (this.ctx == null) {
            return;
        }

        let sec = Math.floor(Date.now() / 1000);
        if (sec != this.currentSecond) {
            this.currentSecond = sec;
            this.framesLastSecond = this.frameCount;
            this.frameCount = 1;
        }
        else {
            this.frameCount++;
        }

        if (!this.brainPlayer.processMovement(this.currentFrameTime)) {
            if (this.keysDown[38] && this.brainPlayer.pointFrom[1] > 0 &&
                this.gameMap[this.brainPlayer.toIndex(this.brainPlayer.pointFrom[0],                        //this.brainPlayer.pointFrom[0],
                    this.brainPlayer.pointFrom[1] - 1)] == 1) {                                             //this.brainPlayer.pointFrom[1] 
                this.brainPlayer.pointTo[1] -= 1;
            }
            else if (this.keysDown[40] && this.brainPlayer.pointFrom[1] < (this.mapH - 1) &&
                this.gameMap[this.brainPlayer.toIndex(this.brainPlayer.pointFrom[0],             //this.brainPlayer.pointFrom[0],
                    this.brainPlayer.pointFrom[1] + 1)] == 1) {                                  //this.brainPlayer.pointFrom[1]
                this.brainPlayer.pointTo[1] += 1;
            }
            else if (this.keysDown[39] && this.brainPlayer.pointFrom[0] > 0 &&
                this.gameMap[this.brainPlayer.toIndex(this.brainPlayer.pointFrom[0] - 1,            //this.brainPlayer.pointFrom[0]
                    this.brainPlayer.pointFrom[1])] == 1) {                                         //this.brainPlayer.pointFrom[1]
                this.brainPlayer.pointTo[0] -= 1;
            }
            else if (this.keysDown[39] && this.brainPlayer.pointFrom[0] < (this.mapH - 1) &&
                this.gameMap[this.brainPlayer.toIndex(this.brainPlayer.pointFrom[0] + 1,            //this.brainPlayer.pointFrom[0]
                    this.brainPlayer.pointFrom[1])] == 1) {                                         //this.brainPlayer.pointFrom[1]
                this.brainPlayer.pointTo[0] += 1;
            }

            if (this.brainPlayer.pointFrom[0] != this.brainPlayer.pointTo[0] ||
                this.brainPlayer.pointFrom[1] != this.brainPlayer.pointTo[1]) {
                this.brainPLayer.timeMoved = this.currentFrameTime;
            }
        }

        for (let y = 0; y < this.mapH; ++y) {
            for (let x = 0; x < this.mapW; ++x) {
                switch (this.gameMap[((y * this.mapW) + x)]) {
                    case 0:
                        // this.ctx.fillStyle = "#549393";
                        this.ctx.fillStyle = "black";
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

        this.drawMainCharacters();
        // this.ctx.fillStyle = "#ff0000";
        // this.ctx.fillText("FPS: " + this.framesLastSecond, 10, 20);

        this.lastFrameTime = this.currentFrameTime;
        // setTimeout(() => window.requestAnimationFrame(() => this.drawGame()), 900)
        window.requestAnimationFrame(this.drawGame)

    }

    drawMainCharacters() {
        console.log('player')
        this.brainPlayer.drawComponent("./images/brain.png")
    }
}