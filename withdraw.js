document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step 1
  const userWithdraw = document.getElementById("user-withdraw");
  const withdrawString = userWithdraw.value;
  const withdraw = parseFloat(withdrawString);
  // step 2
  const withDrawAmount = document.getElementById("withdraw-amount");
  const withDrawAmountString = withDrawAmount.innerText;
  const withdrawTotal = parseFloat(withDrawAmountString);
  const sumOfWithdraw = withdraw + withdrawTotal;
  withDrawAmount.innerText = sumOfWithdraw;

  // step 3
  const balanceAmount = document.getElementById("balance-amount");
  const balanceString = balanceAmount.innerText;
  const balance = parseFloat(balanceString);
  const sumOfBalance = balance - withdraw;
  balanceAmount.innerText = sumOfBalance;

  userWithdraw.value = "";
});
