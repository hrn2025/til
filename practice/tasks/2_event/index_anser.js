document.addEventListener('DOMContentLoaded', () => {
const inputText = document.getElementById("input-text");
const buttonAdd = document.getElementById("button-add");
const buttonRemove = document.getElementById("button-remove");
const list = document.getElementById("list");

buttonAdd.addEventListener("click", () => {
  const liElem = document.createElement("li");
  const liText = inputText.value;
  liElem.innerText = liText;
  list.appendChild(liElem);
  inputText.value = ''; // 追加後に入力欄をクリア
});

buttonRemove.addEventListener("click", () => {
  const liALL = list.querySelectorAll('li');
  if (liALL[0]) {
    liALL[0].remove();
  }
});

});