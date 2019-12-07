
class Game {
    constructor() {
        this.ctx = undefined;
        this.grass = new Component(this, this.tileW, this.tileH);
        this.sand = new Component(this, this.positionX, this.positionY, this.tileW, this.tileH);
        this.wall = new Component(this, this.positionX, this.positionY, this.tileW, this.tileH);      
            this.positionX = 0;
            this.positionY = 0;
            this.cols = 15;
            this.row = 17;
            this.tileW = 800 / this.cols;
            this.tileH = 800 / this.row;
            this.tileSize = 240;
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
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            ]
    }

    init() {
        this.canvas = document.getElementById("game")
            this.ctx = this.canvas.getContext("2d")
            this.start()
            this.drawInGame()
    }

    start() {
        this.drawBackground()
        this.drawInGame()
        const interId = setInterval(() => {
            this.clear()
            this.drawBackground()
            this.drawInGame()
            // this.brain.move()
        })
    }

    drawBackground() {
        this.ctx.fillStyle = "pink";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "green";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(`Score: ${this.score}`, 800, 50);
      }

    background() {
        for (let y = 0; y < this.cols; y++) {
            for (let x = 0; x < this.row; x++) {
                // console.log(`======================= ${this.gameMap[(y * this.cols) + x]}`);
                // console.log(`++++++++++++++++ ctx: ${this.ctx}`)
                switch (this.gameMap[y][x]) {
                    case 0:
                        this.ctx.drawImage(this.wall, this.positionX, this.positionY, this.tileW, this.tileH);
                        break;
                    case 1:
                        this.ctx.drawImage(this.sand, this.positionX, this.positionY, this.tileW, this.tileH);
                        break;
                    case 2:
                        this.ctx.drawImage(this.grass, this.positionX, this.positionY, this.tileW, this.tileH)
                        break;
                    default:
                        this.ctx.drawImage(this.blackHole, this.positionX, this.positionY, this.tileW, this.tileH);
                }
                this.ctx.fillRect(x * this.tileW, y * this.tileH, this.tileW, this.tileH);

            }
        }
    }

    drawInGame() {
        console.log(`========================= $`)
        this.grass.drawComponent("./images/grass.png");
        this.wall.drawComponent("./images/wall.png");
        this.sand.drawComponent("./images/sand.png");
        this.blackHole.drawComponent("./images/blackHole.png");
    }


}

