let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
let home = document.getElementById("homeicon");
let cnt = 1;

btn.addEventListener("click", add);
home.addEventListener("click", mvhome);

function add() {
  let temp = document.createElement("li");
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li" + cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += `<button style='flat: right;' class='btn btn-outline-secondary' type = 'button' onclick = 'remove(${cnt})' > 삭제 </button>`;
  list.appendChild(temp);
  cnt++;
  input.value = null;
}

window.onkeydown = function () {
  if (event.keyCode === 13) {
    add();
  }
};

// function edit(cnt) {
// let li = document.getElementById("li" + cnt);
// list.
// }

function remove(cnt) {
  let li = document.getElementById("li" + cnt);
  list.removeChild(li);
}

function mvhome() {
  window.open("http://127.0.0.1:5500/login/login.html", "_self");
}

// let prom = prompt("이름을 입력해 주세요!");

// take = function () {
//   let temp = prom;
//   console.log(temp);
//   input.value = temp;
// };
// take();
