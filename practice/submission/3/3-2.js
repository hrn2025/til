const buttonSeason = document.getElementById('button-season')
const result = document.getElementById('result')

buttonSeason.addEventListener('click',() => {
    let month = Math.floor(Math.random() * (12 + 1 - 1) + 1)
    switch(month) {
        case 3:
        case 4:
        case 5:
            result.textContent = '春です'
            break;
        case 6:
        case 7:
        case 8:
            result.textContent = '夏です'
            break;
        case 9:
        case 10:
        case 11:
            result.textContent = '秋です'
            break;
        case 12:
        case 1:
        case 2:
            result.textContent = '冬です'
            break;
    }
});