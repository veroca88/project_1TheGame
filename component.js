class Component {
    constructor(game, positionX, positionY, tileW, tileH) {
        this.game = game;
        this.x = positionX;
        this.y = positionY;
        this.w = tileW;
        this.h = tileH;
        this.img = new Image()
    }

    drawComponent(imgSource) {
        let compCtx = this.game.ctx;
        this.img.src = imgSource;
        compCtx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}