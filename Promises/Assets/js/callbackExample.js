function DiwaliIsComming() {
  console.log(`1. diwali aane wali hai `);
  cleanthehome();
}
DiwaliIsComming(); /*
function cleanthehome() {
  console.log(`clean your home `);
  decoreatehome();
}
function decoreatehome() {
  console.log(`decoration is done `);
  makeSweets();
}*/
function makeSweets() {
  console.log("4.sweets and namkin are ready");
  mataLaxmiPooja();
}
function mataLaxmiPooja() {
  console.log("5.pooja is done ");
  parshadbato();
}
function parshadbato() {
  console.log("6.yummmy hai...........!");
}
/** */
function cleanthehome() {
  console.log(`2.clean your home `);
  decoreatehome();
}
function decoreatehome() {
  console.log(`3.decoration is done `);
  makeSweets();
}
/*** another example of call back  */
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);
