var divPoeng = document.querySelector("#divPoeng") // lager en variabel som er koblet til divPoeng id i html dokumentet mitt som her kan skriver som kunn divPoeng som funksjon
var hindringer = [];
var speed = 10
var poeng = -1 // starter poeng variabelen på -1 siden jeg har satt at man får poeng når man kommer halveis bort til neste så må starte på -1 får at det skal gå opp.
var flyLyd;
var bakgrunnLyd;
var tapLyd;




function preload() {
bakgrunnLyd = loadSound("Lyder/MP3/Music/Music-01.mp3");
flyLyd = loadSound("Lyder/MP3/Input/Input-05.mp3");
tapLyd = loadSound("Lyder/MP3/Voice/Male/Voice-Cartoon_Laugh-01.mp3");
}


function setup() { // ting som skal skje hele tiden

  createCanvas(window.innerWidth, window.innerHeight - 80 ) // lengden på spille
textSize(21);
  fly = new Fly();
  start = new Start();
  bakgrunnLyd.play();
}

function draw() {
  background(0, 200, 255)


  if (frameCount % 80 == 0) { // her sier vi at hver 80 frame så skal vi lage en hindring(pipe)
    hindringer.push(new Hindring());
    poeng = poeng + 1 ;
    divPoeng.innerHTML = ` Poeng: ${poeng} `;
  }
  for (var hindring of hindringer) {
    hindring.show();
    hindring.update(speed);

    if (fly.rører(hindring)) {
      start.tap();

    }
  }
  fly.show();
  fly.update();
  speed += 0.03 ;
}

function keyPressed() {
  if (key == ' ') {
    fly.fly();
    flyLyd.play();

  } else if (event.key === "Enter") {
    location.reload();
  }
}
