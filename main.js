document.getElementById("submit-btn").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const email = userEmail.value;
  const userPass = document.getElementById("user-pass");
  const password = userPass.value;
  if (email.endsWith("@gmail.com") && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid email or password");
  }
});
