class Hindring {
    constructor() {
        this.width = 130;
        this.gap = random(70, 300)
        this.height = (height / 2) - this.gap;
        this.x = width / 1;
        this.y = height / 2;
      //  this.farge = `rgb(${Math.floor(Math.random()*255)} ,${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
        this.img = loadImage('bilder/pipe4.png');
        this.img_ned = loadImage('bilder/pipe3.png');
    }

    show() {
        fill(0);
        image(this.img, this.x, this.y+this.gap, this.width, this.height);
        fill(0);
        image(this.img_ned, this.x, 0, this.width, this.height);
    }
    update(speed) {
        this.x -= speed;
    }
}
