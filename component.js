class Component extends Player{
    contructor() {
        this.img = new Image()
        this.compX = x,
        this.compY = y,
        this.compW = w,
        this.compH = h
    }

   drawComponent(imgSource) {
       let compCtx = this.game.ctx;
       this.img.src = imgSource;
       compCtx.drawImage(this.img, this.compX, this.compY, this.compW, this.compH)       
    }
    
}