/*
Oppgave 3 – Ligningssett

En oppgave i 1T matte er:

Summen av to tall er 7. Differansen mellom det største og det minste tallet er 3. Finn tallene.

Denne oppgaven kan løses ved hjelp av følgende ligningssett:

x + y = 7

x - y = 3

Finn verdiene til x og y ved å bruke javascript, uten å endre på ligningssettet.
*/
const app = document.querySelector("#app")
/*
x + y = 7
x - y = 3
*/

//let y= x-3;
//let 7 = x + y;
//let 3=x-y
let x;
let y;
let a = "x";
let b = "y"

let svar = 7
let minusSvar = 3

for (var x = 1; x<10; i++) {
  // for setning for andre og
  if (x+y===7 & x-y = 3) {

  }
}
console.log(x);
console.log(x);
/*
if (x+y=svar & x-y=minusSvar) {
console.log(x);
}


/*
let y1= 7-x
let y2=x-3

let x1=7-y;
let x2=3-y
/*
svar = x + y
minusSvar = x - y;
*/
/*
let x_verdi = x1+y1=svar
let y_verdi = x2-y2=minusSvar

console.log(x_verdi);
console.log(y_verdi);
*/
/*
svar = Number(a) + Number(b);
minusSvar = Number(a) - Number(b);

if (svar === Number(a) + Number(b) & minusSvar === Number(a) - Number(b)) {
  console.log(a);
  console.log(b.value);
}
*/


function plussef(x ,y){
  app.innerHTML += `<div>når vi pluser sammen x og y og x er ${x} og y er ${y} får vi verdien ${x+y}</div> `
}
plussef(5 , 2)
plussef(5 , 3)
function minusf(x , y){
  app.innerHTML += `<div>når vi tar minus  x og y når x er ${x} og y er ${y} får vi ${x} - ${y}  som er ${x-y}</div> `
  app.innerHTML += `Svare et x= 5 og y = 2  `
}
minusf(3, 5 )
minusf(5, 2 )
