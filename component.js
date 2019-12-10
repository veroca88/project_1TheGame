class Component {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.col = 0;
        this.row = 0;
        this.img = new Image();
        this.tilePosition = 0
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
                    case 65:
                        if (this.x >= 0)  
                        this.x -= 56.25;
                        this.col--;
                        this.tilePosition = this.game.gameMap[[this.col][this.row]]
                        console.log(`=======================nmber col: ${this.col} row: ${this.row}  tilepos:${this.tilePosition}`)
                        break;
                    case 38: //up
                    case 87:
                        if (this.y >= 0) 
                        this.y -= 56.25;
                        this.row--;
                        console.log(`=======================nmber ${this.col}${this.row}`)
                        break;
                    case 39: //rigth
                    case 83:
                        if (this.x <= 900 - this.width) 
                        this.x += 56.25;
                        this.col++;
                        console.log(`=======================nmber ${this.col}${this.row}`)
                        break;
                    case 40: //down
                    case 68:
                        if (this.y <= 900 - this.height) 
                        this.y += 56.25;
                        this.row++;
                        console.log(`=======================nmber ${this.col}${this.row}`)
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