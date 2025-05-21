var input_text = document.querySelector("#input_text");
var input_password = document.querySelector("#input_password");
var error_msg = document.querySelector(".error_msg");
var form = document.querySelector("#submit");

alert('username = unismuh dan password = 1234');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = input_text.value.trim();
  const password = input_password.value.trim();

  if (username === "" || password === "") {
    error_msg.textContent = "Username dan Password tidak boleh kosong";
    error_msg.style.display = "inline-block";
    return;
  }

  if (username === "unismuh" && password === "1234") {
    error_msg.style.display = "none";
    input_text.style.border = "1px solid #1dbf73";
    input_password.style.border = "1px solid #1dbf73";
    window.location.href = "daftar-tempat.html";
  } else {
    error_msg.textContent = "Username atau Password salah, ulangi lagi";
    error_msg.style.display = "inline-block";
    input_text.style.border = "1px solid #f74040";
    input_password.style.border = "1px solid #f74040";
  }
});
