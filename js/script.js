document.getElementById('loginForm').addEventListener('submit', function (e) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "admin" && password === "1234") {
    alert("Login berhasil!");
  } else {
    e.preventDefault();
    alert("Login gagal! Username atau Password salah.");
  }
});
