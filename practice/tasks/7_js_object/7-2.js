const inputAddress = document.getElementById('changeAddress');
const changeButton = document.getElementById('changeBtn');
const message = document.createElement('p');
const addButton = document.getElementById('addBtn');
const inputKey = document.getElementById('addKey');
const inputValue = document.getElementById('addValue');

const user = {
    name: 'John',
    age: 30,
    email: 'example@example.com',
    updateEmail: email => user.email = email
};

const displayErrorMessage = (element) => { //※修正：idでなくelementと書いて汎用的に。関数名もわかりやすく。
    message.textContent = '入力されていません！';
    element.after(message);
};

const handleChangeEmail = () => {
    if (!inputAddress.value) {
        displayErrorMessage(changeButton); // エラーメッセージを表示
    } else {
        message.remove();
        user.updateEmail(inputAddress.value);
        const {name, age, email} = user; // オブジェクトの分割代入
        console.log({name, age, email}); // 分割代入した変数でオブジェクトを作成
    }
};

const handleAddUser = () => {
    if (!inputKey.value || !inputValue.value) {
        displayErrorMessage(addButton); // エラーメッセージを表示
    } else {
        message.remove();
        const userKey = inputKey.value;
        const userValue = inputValue.value;
        user[userKey] = userValue;
        console.log(user);
    }
};

changeButton.addEventListener('click', handleChangeEmail);
addButton.addEventListener('click', handleAddUser);