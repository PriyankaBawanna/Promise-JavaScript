/*function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  var name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

function person(naam) {
  console.log("welcome to call back world", naam);
  console.log("here we learn javascript ");
}
function enterperson(newPerson) {
  var naam = "priyanka";
  newPerson(naam);
}
enterperson(person);
/** */ /*
function account(withdraw) {
  console.log("after withdraw your blance is ", withdraw);
  console.log("");
}
function accountwithdraw(withdrawMoney) {
  var account = 5000;
  var withdraw = 2500;
  var mainBlance = account - withdraw;
  withdrawMoney(mainBlance);
}
accountwithdraw(account);*/
var numbers = [81, 92, 98, 85, 73, 75, 45, 68];
function result() {
  setTimeout(function () {
    console.log("first set time ");
    var start = Date.now();

    for (let i = 0; i < numbers.length; i++) {
      setTimeout(function () {
        console.log("(", i, ")", numbers[i]);
        var end = Date.now();

        console.log(`Execution time: ${end - start} ms`);
      }, 5000);
    }
    console.log("end part of first function");
  }, 5000);
}
result();
