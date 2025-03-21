const buttonSend = document.getElementById('button-send')
const result = document.getElementById('result')

buttonSend.addEventListener('click',() => {
    const inputAge = document.getElementById('age')
    if (inputAge.value < 18) {
    result.textContent = "未成年です"
} else if (inputAge.value >= 18) {
    result.textContent = "成人済です"
} else {
    result.textContent = ""
}
});