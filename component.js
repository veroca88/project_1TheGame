class Component {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.col = 1;
        this.row = 1;
        this.img = new Image();
        this.tilePosition = 0;
        this.direction;
    }
    drawComponent(imgSource) {
        let daCtx = this.game.ctx;
        this.img.src = imgSource;
        // this.img.addEventListener("load", () => {
        daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
        // });
    }
    move() {
        document.onkeydown = event => {
            //   console.log("event: ", event.keyCode);
            const key = event.keyCode;
            const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];

            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 37: //left  //this is going to be my 3
                        // case 65:
                        this.tilePosition = this.game.gameMap[this.row]
                        // if (this.tilePosition[this.col - 1] === 1 || this.tilePosition[this.col - 1] === 4 && this.x >= 0) {
                        if (this.tilePosition[this.col - 1] === 1 && this.x >= 0) {
                            this.x -= this.game.tileW;
                            this.col--;
                        } else if (this.tilePosition[this.col - 1] === 4) {
                            this.direction = 2;
                            this.game.renderSpiral()
                            
                            console.log(`============================= ARRAY : ${this.game.gameMap[this.row]} (FOUR) ${this.tilePosition[this.col - 1]} INDEX : ${this.game.gameMap[this.row].indexOf(this.tilePosition[this.col - 1])} `)
                        }
                        break;
                    case 38: //up //this is going to be my 0
                        // case 87:
                        this.tilePosition = this.game.gameMap[this.row - 1]
                        // if (this.tilePosition[this.col] === 1 || this.tilePosition[this.col] === 4 && this.y >= 0) {
                        if (this.tilePosition[this.col] === 1 && this.y >= 0) {
                            this.y -= this.game.tileH;
                            this.row--;
                        } else if (this.tilePosition[this.col] === 4) {
                            this.direction = 3;
                            this.game.renderSpiral()

                            console.log(`============position ROW : ${this.game.gameMap[this.row - 1]} position y: ${this.tilePosition[this.col - 1]}`)
                            // this.game.createQuestion()
                        }
                        break;
                    case 39: //rigth //this is going to be my 1
                        // case 83:
                        this.tilePosition = this.game.gameMap[this.row]
                        // if (this.tilePosition[this.col + 1] === 1 || this.tilePosition[this.col + 1] === 4 && this.x <= 900 - this.width) {
                        if (this.tilePosition[this.col + 1] === 1 && this.x <= 900 - this.width) {
                            this.x += this.game.tileW;
                            this.col++;
                        } else if (this.tilePosition[this.col + 1] === 4) {
                            this.direction = 0;
                            this.game.renderSpiral()
                            // this.positionPlayer(1)
                            
                            console.log(`============ ARRAY : ${this.game.gameMap[this.row]}(FOUR): ${this.tilePosition[this.col + 1]}  INDEX: ${this.game.gameMap[this.row].indexOf(this.tilePosition[this.col + 1])} `)     //this.tilePosition[this.col] shows me the number where is stand up my player inside the array ROW
                        
                        }
                        break;
                    case 40: //down //this is going to be my 2
                        // case 68:
                        this.tilePosition = this.game.gameMap[this.row + 1]
                        // if (this.tilePosition[this.col] === 1 || this.tilePosition[this.col] === 4 && this.y <= 900 - this.height) {
                        if (this.tilePosition[this.col] === 1 && this.y <= 900 - this.height) {
                            this.y += this.game.tileH;
                            this.row++;
                        } else if (this.tilePosition[this.col] === 4) {
                            this.direction = 1;
                            this.game.renderSpiral()
                            console.log(`============  ARRAY: ${this.game.gameMap[this.row + 1]} (FOUR) ${this.tilePosition[this.col]} INDEX: ${this.game.gameMap[this.row + 1].indexOf(this.tilePosition[this.col])}`)
                        }
                        break;
                }
            }
        };
    }

    getLeft() {
        return this.x;
    }
    getRight() {
        return this.x + this.width;
    }

    getTop() {
        return this.y;
    }

    getBottom() {
        return this.y + this.height;
    }


}
