function showPassword() {
  const password = document.getElementById("myPassword");

  if (password.type === "password") {
    password.type = "text";
  }
  else {
    password.type = "password";
  }
}




