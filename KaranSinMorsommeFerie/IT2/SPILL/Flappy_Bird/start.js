
class Start {

tap(){
  //background(200,222,123);
  textSize(40);
  text("GAME OVER", width / 2.5, height / 3);
  text("PRESS ENTER to play again", width / 3, height / 2);
  textSize(40);
  text("Din poengsum er: " + poeng + " poeng", width / 3, height / 6);
  noLoop();
  console.log("GAME OVER");
  tapLyd.play();

}
}
