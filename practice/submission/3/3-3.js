const inputAge = document.getElementById('age')
const buttonSend = document.getElementById('button-send')
const result = document.getElementById('result')

buttonSend.addEventListener('click',() => {
    Number(inputAge.value) < 18 ? result.textContent = '未成年です' : result.textContent = '成人済です';
});