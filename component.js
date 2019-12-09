class Component {
    constructor(game, x, y, w, h) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image()
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
            if (this.game.eachTile == 1) {

                if (possibleKeystrokes.includes(key)) {
                    event.preventDefault();
                    switch (key) {
                        case 37:
                        case 65:
                            if (this.x >= 114) this.x -= 57;
                            break;
                        case 38:
                        case 87:
                            if (this.y >= 0) this.y -= 57;
                            break;
                        case 39:
                        case 83:
                            if (this.x <= 700 - this.width) this.x += 20;
                            break;
                        case 40:
                        case 68:
                            if (this.y <= 700 - this.height) this.y += 20;
                            break;
                    }
                }
            }
            else {
                console.log(`=============================== Wall`)
            }
        };
    }
}