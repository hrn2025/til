document.addEventListener('DOMContentLoaded', ()=> {
    const todoListElem = document.querySelector('.todoList');
    const errorMsg = document.querySelector('.errorMessage');
    const registerBtn = document.querySelector('.registerButton');
    const inputTitle = document.querySelector('.titleField');

    // タスク取得関数
    async function fetchTodos(url, errorMessage) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            errorMsg.textContent = errorMessage;
            return [];
        };
    };

    // 初期タスク読み込み
    async function loadInitialTodos() {
        const todos = await fetchTodos('https://jsonplaceholder.typicode.com/todos','取得できませんでした。');

        todos.forEach(item => {
            const listElem = document.createElement('li');
            listElem.textContent = item.title;
            todoListElem.append(listElem);
        });
    };

    // タスク追加関数
    async function addTodo(title) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                //const response = await fetch('https://jsonplaceholder.typicode.coma/todos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'userId': 11,
                        //'id': 201, //APIで自動設定されるので不要
                        'title': title,
                        'completed': false
                    })
                });

                //const data = await response.json();
                const listElem = document.createElement('li');
                listElem.textContent = title; //data.titleが返ってくるAPIならdata.titleでもOK？
                todoListElem.append(listElem);
                inputTitle.value = '';
            } catch(error) {
                errorMsg.textContent = '登録できませんでした。';
            };
        };

// 初期読み込み
loadInitialTodos();

// 登録ボタンイベント
    registerBtn.addEventListener('click', ()=> {
        const title = inputTitle.value.trim();
        if(title) {
            addTodo(title);
        };
    });
});

