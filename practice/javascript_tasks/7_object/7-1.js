const inputAddress = document.getElementById('changeAddress');
const changeButton = document.getElementById('changeBtn');
const message = document.createElement('p');

const user = {
    name: 'John',
    age: 30,
    email: 'example@example.com',
    updateEmail: email => user.email = email
}

changeButton.addEventListener ('click', () => {
    if (!inputAddress.value) {
        message.textContent = '入力されていません！';
        changeButton.after(message);
    } else {
        user.updateEmail(inputAddress.value);
        message.remove();
        console.log(user);
    }
});
