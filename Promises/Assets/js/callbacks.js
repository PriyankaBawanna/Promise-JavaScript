/**call Back Function  */

/** welcome scrren of account owner  */
let blance;
let cuurentBlance = 1000;
let AmmountDeposit = 20000000;
let withdraw = 10000;
function createbankaccount(name) {
  console.log("welcome to Swiss Bank", name);

  DepositMoney(AmmountDeposit);
  withdrawMoney(withdraw);
}

createbankaccount("Priyanka");

function DepositMoney(AmmountDeposit) {
  blance = cuurentBlance + AmmountDeposit;
  curentstatusofblance(blance);
}

function withdrawMoney(withdraw) {
  blance = blance - withdraw;
  curentstatusofblance(blance);
}

function curentstatusofblance(blance) {
  console.log(`current balance on your bank account is ${blance}`);
}
