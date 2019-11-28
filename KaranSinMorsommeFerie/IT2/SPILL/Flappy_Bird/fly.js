class Fly {
    constructor() {
        this.width = 50; // hvor bred fuglen er
        this.height = 50; // hvor høy fuglen er
        this.x = width / 3;// hvor på skjermen fuglen skal være i bredde
        this.y = height / 2; // hvor på skjermen fuglen skal ligge i høyden
        this.gravity = 1;// hvor mye fuglen skal trekkes nedover
        this.jump = 18 ; // hvor mye fuglen skal hoppe med når man hopper
        this.fart = 5 ;// farten til fuglen om den går ut av skjermen
        
      //  this.farge = `rgb(${Math.floor(Math.random()*255)} ,${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;// slik at fargen til fuglen endret seg hver runde, men trengs ikke mer
        this.img = loadImage('bilder/52708377_1957517474347647_5675183202965127168_n.png'); // this.img er lik linken til bilde til fuglen
    }

    show() {
        fill(0);
        image(this.img, this.x, this.y, this.width, this.height); // setter bildet som selve objekte og setter bredde, høyde og posisjon lik det vi satte i class Fly
    }

    fly() {
        this.fart -= this.jump; // funksjonen sier at farte som er 0 skal ta minus 16 hver gang denne funksjonen kjøres som er hver gang man trykker SPACE

    }

    rører(pipe) { // hvis fly fører pipen så skal dette skje
        if (collideRectCircle(pipe.x, 0, pipe.width, pipe.height, this.x, this.y, this.width)) {// collideRect Circle er en funksjon jeg får fra P5. collide2d.js filen for å letter
            return true; // Dette gjør at Hvis jeg kolliderer med den øverste pipen vil det bli true og så vil det jeg sier at det den skal gjøre hvis det er truth skje
        }
        if (collideRectCircle(pipe.x, pipe.y+pipe.gap, pipe.width, pipe.height, this.x, this.y, this.width)) {
            return true; // Dette gjør at Hvis jeg kolliderer med den nederste pipen vil det bli true og så vil det jeg sier at det den skal gjøre hvis det er truth skje

        }
        return false;
                  poeng = poeng + 1; // Hvis jeg ikke kolliderer med noen av pipene vil jeg få +1 poeng på poeng.
    }

    update() { // Om den går under eller over skjermen
        this.fart += this.gravity; // 0 plusses på med 1 hele tiden altså vil den dra fuglen ned
        this.y += this.fart; // posisjonen til fuglen blir plusset med farten som øker når vi ikke trykker SPACE

        if (this.y > height-this.height) {// nederste del av skjermen. posisjonen til fuglen skal være større enn
            this.y = height-this.height
            this.fart = 0
        }

        if (this.y < 0) {
            this.y = 0
            this.fart = 0
        }
    }
}
