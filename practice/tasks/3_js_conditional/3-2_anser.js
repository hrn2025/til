const buttonSeason = document.getElementById('button-season');
const result = document.getElementById('result');

function getSeason(month) {
  switch (month) {
    case 3:
    case 4:
    case 5:
      return '春です';
    case 6:
    case 7:
    case 8:
      return '夏です';
    case 9:
    case 10:
    case 11:
      return '秋です';
    case 12:
    case 1:
    case 2:
      return '冬です';
  }
}

buttonSeason.addEventListener('click', () => {
  result.textContent = ''; // 結果をクリア
  let month = Math.floor(Math.random() * 12) + 1;
  result.textContent = getSeason(month);
});
