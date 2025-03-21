document.addEventListener('DOMContentLoaded', () => {
    const decrementButton = document.getElementById('decrement-button');
    const incrementButton = document.getElementById('increment-button');
    let number = document.getElementById('number');

    const changeNum = string => Number(string);

    incrementButton.addEventListener('click', function() {
        number.textContent = changeNum(number.textContent) + 1;
    })

    decrementButton.addEventListener('click', function() {
        const currentValue = changeNum(number.textContent);
        if (currentValue > 0) {
            number.textContent = currentValue - 1;
        }
    });
});