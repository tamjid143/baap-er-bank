// Deposit Events
document.getElementById("deposit-btn").addEventListener("click", function () {
  // Step 1
  const userDeposit = document.getElementById("user-deposit");
  const depositString = userDeposit.value;
  const deposit = parseFloat(depositString);
  // Step 2
  const depositAmount = document.getElementById("deposit-amount");
  const depositTotalstring = depositAmount.innerText;
  const depositTotal = parseFloat(depositTotalstring);
  const sumOfDeposit = depositTotal + deposit;
  depositAmount.innerText = sumOfDeposit;

  // step 3
  const balanceAmount = document.getElementById("balance-amount");
  const balanceString = balanceAmount.innerText;
  const balance = parseFloat(balanceString);
  const sumOfBalance = deposit + balance;
  balanceAmount.innerText = sumOfBalance;
  //
  userDeposit.value = "";
});
