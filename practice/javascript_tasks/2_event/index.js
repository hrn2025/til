const inputText = document.getElementById("input-text");
const buttonAdd = document.getElementById("button-add");
const buttonRemove = document.getElementById("button-remove");
const list = document.getElementById("list");

buttonAdd.addEventListener("click", () => {
  const liElem = document.createElement("li");
  liElem.className = "list-li";
  const liText = inputText.value;
  liElem.innerText = liText;
  list.appendChild(liElem);
});

buttonRemove.addEventListener("click", () => {
  const liALL = document.getElementsByClassName("list-li");
  if (liALL[0]) {
    liALL[0].remove();
  }
});
