document.addEventListener('DOMContentLoaded', ()=> {
    const todoListElem = document.getElementsByClassName('todoList');
    const errorMsg = document.getElementsByClassName('errorMessage');

    const getToDos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            //const response = await fetch('https://jsonplaceholder.typicode.coma/todos');
            const data = await response.json();
            data.forEach(item => {
                const listElem = document.createElement('li');
                listElem.textContent = item.title;
                todoListElem[0].append(listElem);
            });
        } catch (error) {
            errorMsg[0].textContent = '取得できませんでした。';
        };
    };
    getToDos();

    const registerBtn = document.getElementsByClassName('registerButton');
    const inputTitle = document.getElementsByClassName('titleField');

    registerBtn[0].addEventListener('click', ()=> {
        const inputTitleValue = inputTitle[0].value;
        const postToDos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                //const response = await fetch('https://jsonplaceholder.typicode.coma/todos', {
                    method: 'POST',
                    body: JSON.stringify({
                        'userId': 11,
                        'id': 201,
                        'title': inputTitleValue,
                        'completed': false
                    })
                });
                const data = await response.json();
                const listElem = document.createElement('li');
                listElem.textContent = inputTitleValue;//APIが仮でない場合は「data.title」
                todoListElem[0].append(listElem);
                inputTitle[0].value = '';
            } catch(error) {
                errorMsg[0].textContent = '登録できませんでした。';
            }
        }
        postToDos();
    });
});

