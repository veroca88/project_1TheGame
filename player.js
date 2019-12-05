class Player {
    constructor(game, x, y, w, h) {
        this.game = game,
            this.x = x,
            this.y = y,
            this.width = w,
            this.heigth = h,
            this.img = new Image(),

            this.pointFrom = [1, 1],
            this.pointTo = [1, 1],
            this.timeMoved = 0,
            this.dimensions = [10, 10],
            this.position = [10, 10],
            this.delayMove = 700
    }

    drawComponent(imgSource) {
        let playerCtx = this.game.ctx;
        this.img.src = imgSource;
        this.img.addEventListener("load", () => {
            playerCtx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
        })
    }

    placeAt(x, y) {
        this.pointFrom = [x, y];
        this.pointTo = [x, y];
        this.position = [((this.game.tileW * x) + ((this.game.tileW - this.dimensions[0]) / 2)),
        ((this.game.tileH * y) + ((this.game.tileH - this.dimensions[1]) / 2))];
        // this.position = [(this.width * x) + (this.width - this.dimensions[0])/2,
        // (this.heigth * y) + (this.heigth - this.dimensions[1])/2]
    }

    // window.addEventListener("keydown", function (e) {
    //     if (e.keyCode >= 37 && e.keyCode <= 40) {
    //         myGame.keysDown[e.keyCode] = true;
    //     }
    // });
    
    // window.addEventListener("keyup", function (e) {
    //     if (e.keyCode >= 37 && e.keyCode <= 40) {
    //         myGame.keysDown[e.keyCode] = false;
    //     }
    // })

    processMovement(time) {

        // console.log(`this is the time move : ${this.timeMoved}, this is the delayMOve : ${this.delayMove}`)
        if (this.pointFrom[0] == this.pointTo[0] && this.pointFrom[1] == this.pointTo[1]) {
            return false
        }
        if ((time - this.timeMoved) >= this.delayMove) {
            this.placeAt(this.pointTo[0], this.pointTo[1])
        } else {
            this.position[0] = (this.pointFrom[0] * this.game.tileW) +
                ((this.game.tileW - this.dimensions[0])/2);
            this.position[1] = (this.pointFrom[1] * this.game.tileH) +
                ((this.game.tileH - this.dimensions[1])/2);

            if (this.pointTo[0] != this.pointFrom[0]) {
                let diff = (this.game.tileW / this.delayMove) * (time - this.timeMoved);
                this.position[0] += (this.pointTo[0] < this.pointFrom[0] ? 0 - diff : diff);
            }
            if (this.pointTo[1] != this.pointFrom[1]) {
                let diff = (this.game.tileH / this.delayMove) * (time - this.timeMoved);
                this.position[1] += (this.pointTo[1] < this.pointFrom[1] ? 0 - diff : diff);
            }
            this.position[0] = Math.round(this.position[0]);
            this.position[1] = Math.round(this.position[1]);
        }
        return true;
    }

    toIndex(x, y) {
        return ((y * this.game.mapW) + x);
    }
}