function Telephone(mobile) {
  console.log("Telephone are  less use compare to ", mobile);
}
function communicationMediam(callback) {
  var mobile = "Android,ios mobile";
  callback(mobile);
}
communicationMediam(Telephone);

function goverment(privati, prof) {
  console.log("In 2020 privatization of railway is happen ", privati);
  console.log(`railway profit ${prof}`);
}
function privatizationofRailway(callback1) {
  var privatization = "By Modi ji";
  function profitofRailway() {
    let a = 100;
    let b = 200;
    let c = a + b;
    return c;
  }
  callback1(privatization, profitofRailway());
}
privatizationofRailway(goverment);
