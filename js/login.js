let btn = document.getElementById("btnLogin");
btn.addEventListener("click", login);

window.addEventListener("keydown", enterKey);
window.addEventListener("keydown", spaceKey);

function login() {
  let id = document.getElementById("id");
  let password = document.getElementById("password");
  if (id.value === "111") {
    if (password.value === "123") {
      window.open("http://127.0.0.1:5500/index.html", "_self");
      id.value = null;
      password.value = null;
    } else {
      alert("패스워드가 틀렸습니다.");
    }
  } else {
    alert("아이디가 틀렸습니다.");
  }
}

function enterKey() {
  if (event.keyCode === 13) {
    console.log("엔터!!");
    login();
  }
}

function spaceKey() {
  if (event.keyCode === 32) {
    console.log("스페이스바!!");
  }
}
