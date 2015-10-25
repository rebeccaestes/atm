var checkingBalanceDiv = $("div#checking-balance");
var savingsBalanceDiv = $("div#savings-balance");
var checkingInputDiv = $("input").eq(0);
var savingsInputDiv = $("input").eq(3);

var checkingBalance, savingsBalance, checkingInput, savingsInput;

$("input").eq(1).on("click", checkingDeposit);
$("input").eq(2).on("click", checkingWithdrawal);
$("input").eq(4).on("click", savingsDeposit);
$("input").eq(5).on("click", savingsWithdrawal);

function getBalance(divElement) {
  return parseInt(divElement.text().substr(1), 10);
}

function getInput(inputElement) {
  return parseInt(inputElement.val(), 10);
}

function checkingDeposit() {
  checkingBalance = getBalance(checkingBalanceDiv);
  checkingInput = getInput(checkingInputDiv);
  if (checkingBalance === 0 && checkingInput > 0) {
    checkingBalanceDiv.removeClass("zero");
  }
  checkingBalance += checkingInput;
  checkingBalanceDiv.text("$" + checkingBalance);
  $("input").eq(0).val("");
}

function checkingWithdrawal() {
  checkingBalance = getBalance(checkingBalanceDiv);
  checkingInput = getInput(checkingInputDiv);
  if (checkingInput <= checkingBalance) {
    checkingBalance -= checkingInput;
    checkingBalanceDiv.text("$" + checkingBalance);
  } else if (checkingInput <= (checkingBalance + savingsBalance)) {
    savingsBalance -= (checkingInput - checkingBalance);;
    checkingBalance = 0;
    checkingBalanceDiv.text("$" + checkingBalance);
    savingsBalanceDiv.text("$" + savingsBalance);
  } else {
    alert("You have insufficient funds.");
  }
  $("input").eq(0).val("");
  if (checkingBalance === 0) {
    checkingBalanceDiv.addClass("zero");
  }
  if (savingsBalance === 0) {
      savingsBalanceDivadd.Class("zero");
    }
  }

  function savingsDeposit() {
  savingsBalance = getBalance(savingsBalanceDiv);
  savingsInput = getInput(savingsInputDiv);
  if (savingsBalance === 0 && savingsInput > 0) {
    savingsBalanceDiv.removeClass("zero");
  }
    savingsBalance += savingsInput;
    savingsBalanceDiv.text("$" + savingsBalance);
    $("input").eq(3).val("");
  }

  function savingsWithdrawal() {
  savingsBalance = getBalance(savingsBalanceDiv);
  savingsInput = getInput(savingsInputDiv);
    if (savingsInput <= savingsBalance) {
      savingsBalance -= savingsInput;
      savingsBalanceDiv.text("$" + savingsBalance);
    } else if (savingsInput <= (checkingBalance + savingsBalance)) {
      checkingBalance -= (savingsInput - savingsBalance);;
      savingsBalance = 0;
      checkingBalanceDiv.text("$" + checkingBalance);
      savingsBalanceDiv.text("$" + savingsBalance);
    } else {
      alert("You have insufficient funds.");
    }
    $("input").eq(3).val("");
    if (checkingBalance === 0) {
      checkingBalanceDiv.addClass("zero");
    } 
    if (savingsBalance === 0) {
      savingsBalanceDiv.addClass("zero");
    }
  }
