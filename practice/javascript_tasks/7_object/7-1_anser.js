const inputAddress = document.getElementById('changeAddress');
const changeBtn = document.getElementById('changeBtn');
const message = document.createElement('p');

const user = {
    name: 'John',
    age: 30,
    email: 'example@example.com',
    updateEmail: email => user.email = email
}

const handleChangeEmail = () => {
    if (!inputAddress.value) {
        message.textContent = '入力されていません！';
        inputAddress.after(message);
    } else {
        user.updateEmail(inputAddress.value);
        message.remove();
        const {name, age, email} = user; // オブジェクトの分割代入
        console.log({name, age, email}); // 分割代入した変数でオブジェクトを作成
    }
};
changeBtn.addEventListener('click', handleChangeEmail);
