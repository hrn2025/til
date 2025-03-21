const inputAge = document.getElementById('age')
const buttonSend = document.getElementById('button-send')
const result = document.getElementById('result')

buttonSend.addEventListener('click',() => {
    const age = Number(inputAge.value)
    if (isNaN(age)) {
        result.textContent = '数値を入力してください'
    } else if (age < 0) {
        result.textContent = '0歳以上を入力してください'
    } else {
        result.textContent = age < 18 ? '未成年です' : '成人済です'
    }
});