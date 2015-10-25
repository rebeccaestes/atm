var checkingBalanceDiv = $("div#checking-balance");
var savingsBalanceDiv = $("div#savings-balance");

var checkingBalance, savingsBalance, checkingInput, savingsInput;

$("input").eq(1).on("click", checkingDeposit);
$("input").eq(2).on("click", checkingWithdrawal);
$("input").eq(4).on("click", savingsDeposit);
$("input").eq(5).on("click", savingsWithdrawal);

function checkingDeposit() {
  checkingBalance = parseInt($("div#checking-balance").text().substr(1));
  checkingInput = parseInt($("input").eq(0).val());
  checkingBalance += checkingInput;
  checkingBalanceDiv.text("$" + checkingBalance);
  $("input").eq(0).val("");
}

function checkingWithdrawal() {
  checkingBalance = parseInt($("div#checking-balance").text().substr(1));
  checkingInput = parseInt($("input").eq(0).val());
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
  } else if (savingsBalance === 0) {
      savingsBalanceDivadd.Class("zero");
    }
    // }
  }

  function savingsDeposit() {
    savingsBalance = parseInt($("div#savings-balance").text().substr(1));
    savingsInput = parseInt($("input").eq(3).val());
    savingsBalance += savingsInput;
    savingsBalanceDiv.text("$" + savingsBalance);
    $("input").eq(3).val("");
  }

  function savingsWithdrawal() {
    savingsBalance = parseInt($("div#savings-balance").text().substr(1));
    savingsInput = parseInt($("input").eq(3).val());
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
      } else if (savingsBalance === 0) {
        savingsBalanceDiv.addClass("zero");
      }
    }