function function1() {
  setTimeout(() => {
    console.log("first");
    setTimeout(() => {
      console.log("Second set time out ");
      setTimeout(() => {
        console.log("third set time out ");
        setTimeout(() => {
          var name = ["priyanka", "bulbul"];
          for (let element of name) {
            console.log(element);
          }
          console.log("end of set time out ");
        }, 10000);
        console.log(`third set time out completed`);
      }, 5000);
      console.log("second  completed");
    }, 5000);
    console.log("first one completed");
  }, 5000);
}
function1();
console.log(`call back hell example `);
