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
                    case 37: //left
                    // case 65:
                        this.tilePosition = this.game.gameMap[this.row]
                        // if (this.tilePosition[this.col - 1] === 1 || this.tilePosition[this.col - 1] === 4 && this.x >= 0) {
                            if (this.tilePosition[this.col - 1] === 1 && this.x >= 0) {
                                this.x -= this.game.tileW;
                                this.col--;
                            } else if (this.tilePosition[this.col - 1] === 4) {
                                this.direction = 2;
                                this.game.renderSpiral()
                                console.log(`============position x: ${this.x} position y: ${this.y}`)    
                        }
                        break;
                    case 38: //up
                    // case 87:
                        this.tilePosition = this.game.gameMap[this.row - 1]
                        // if (this.tilePosition[this.col] === 1 || this.tilePosition[this.col] === 4 && this.y >= 0) {
                            if (this.tilePosition[this.col] === 1 && this.y >= 0) {
                            this.y -= this.game.tileH;
                            this.row--;
                        } else if (this.tilePosition[this.col] === 4 ) {
                            this.direction = 3;
                            this.game.renderSpiral()
                            console.log(`============position x: ${this.x} position y: ${this.y}`)
                            // this.game.createQuestion()
                        }
                        break;
                    case 39: //rigth
                    // case 83:
                        this.tilePosition = this.game.gameMap[this.row]
                        // if (this.tilePosition[this.col + 1] === 1 || this.tilePosition[this.col + 1] === 4 && this.x <= 900 - this.width) {
                            if (this.tilePosition[this.col + 1] === 1 && this.x <= 900 - this.width) {
                            this.x += this.game.tileW;
                            this.col++;
                        } else if (this.tilePosition[this.col + 1] === 4) {
                            this.direction = 0;
                            this.game.renderSpiral()
                            console.log(`============position x: ${this.x} position y: ${this.y}`)
                        }
                        break;
                    case 40: //down
                    // case 68:
                        this.tilePosition = this.game.gameMap[this.row + 1]
                        // if (this.tilePosition[this.col] === 1 || this.tilePosition[this.col] === 4 && this.y <= 900 - this.height) {
                            if (this.tilePosition[this.col] === 1 && this.y <= 900 - this.height) {
                            this.y += this.game.tileH;
                            this.row++;
                        } else if (this.tilePosition[this.col] === 4) {
                            this.direction = 1;
                            this.game.renderSpiral()
                            console.log(`============position x: ${this.x} position y: ${this.y}`)
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
