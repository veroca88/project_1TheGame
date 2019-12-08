
class Game {
    constructor() {
        this.canvas = document.getElementById("game");
        this.ctx = this.canvas.getContext("2d");
        this.grass = new Image();
        this.sand = new Image();
        this.wall = new Image();
        this.cols = 16;
        this.row = 16;
        this.tileW = 50;
        this.tileH = 50;
        this.gameMap = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 1, 0],
            [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 0],
            [0, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 1, 0],
            [0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 0],
            [0, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 0],
            [0, 1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 1, 0],
            [0, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 1, 0],
            [0, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 1, 2, 1, 1, 0],
            [0, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 0],
            [0, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0],
            [0, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }

    init() {
        this.start()

    }

    start() {
        this.drawBackground()
        this.grass.src = "./images/grass.png";
        this.sand.src = "./images/sand.png";
        this.wall.src = "./images/wall.png";
        const interId = setInterval(() => {
        // this.clear()
        this.drawBackground()
        // this.brain.move()
        }, 1000)
    }

    //   this.ctx.drawImage(this.wall, this.tileW*y/15, this.tileW*x/17, this.tileW/15, this.tileH/17);

    //                     this.ctx.drawImage(this.wall, this.tileW/15, this.tileH/17, this.tileW*y/15, this.tileW*x/17);

    drawBackground() {
        for (let x = 0; x < this.gameMap.length; x++) {
            for (let y = 0; y < this.gameMap[x].length; y++) {
                
                // console.log(`===========${this.gameMap[y][x]}===============`)

                switch (this.gameMap[x][y]) {
                    case 0:
                        this.ctx.drawImage(this.wall, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                        // console.log(`case 0 ${this.wall.src}=================`)
                        break;
                    case 1:
                        this.ctx.drawImage(this.sand, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                        // console.log(`case 1 ${this.wall}=================`)
                        break;
                    case 2:
                        this.ctx.drawImage(this.grass, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                        // console.log(`case 2 ${this.wall}=================`)
                        break;
                    default:
                        this.ctx.drawImage(this.blackHole, this.tileW * x, this.tileH * y, this.tileW, this.tileH);
                        // console.log(`case 3 ${this.wall}=================`)
                }

            }
        }
    }

}

