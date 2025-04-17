
const form = document.getElementById('form');
const requiredInputs = document.querySelectorAll('.form__input[required]');
const submitButton = document.getElementById('submit');
const agreeCheckbox = document.getElementById('agree');
const agreeError = document.getElementById('agree-error');

// 送信処理
form.addEventListener('submit', (event) => {
    if (!submitButton.disabled) {
        event.preventDefault();
        console.log('送信しました：コンソールログのみ');
    }
});
// 関数：送信ボタンの活性・非活性を判断する
const invalidCheck = () => {
    const isInvalid = document.querySelectorAll('.is-invalid');
    requiredInputs.forEach(input => {
        // inputに値があり、エラーが無く、同意にチェックが入っていたら送信ボタンを活性化
        if (input.value !== '' && isInvalid.length === 0 && agreeCheckbox.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
};

// 入力フィールドのフォーカスが外れた時のリアルタイムバリデーション
requiredInputs.forEach(input => {
    let previousPostalValue = ''; // 郵便番号の以前の値を保存する変数

    if (input.id === 'postal') {
      input.addEventListener('focus', function () {
        previousPostalValue = this.value; // フォーカス時に現在の値を保存
      });
    };

    input.addEventListener('blur', function () {
        const errorElement = document.getElementById(`${this.id}-error`);
        if (!this.value.trim()) {
            errorElement.textContent = '必須項目のためご入力ください。';
            errorElement.classList.add('is-error');
            this.classList.add('is-invalid');
        } else if (this.id === 'furigana') { // ふりがなのバリデーション
            furiganaValidation(this, errorElement);
        } else if (this.id === 'email') { // メールアドレスのバリデーション
            emailValidation(this, errorElement);
        } else if (this.id === 'postal') { // 郵便番号のバリデーション＆API実行
            if (this.value !== previousPostalValue) {
                postalValidation(this, errorElement);
              }
        } else {
            errorElement.textContent = '';
            errorElement.classList.remove('is-error');
            this.classList.remove('is-invalid');
        };
        invalidCheck();

    });
});

// 同意（チェックボックス）のチェック必須を確認
agreeCheckbox.addEventListener('change', () => {
    if (!agreeCheckbox.checked) {
        agreeError.textContent = '必須項目のためチェックを入れてください。';
        agreeError.classList.add('is-error');
        agreeCheckbox.classList.add('is-invalid');
        invalidCheck();
    } else {
        agreeError.textContent = '';
        agreeError.classList.remove('is-error');
        agreeCheckbox.classList.remove('is-invalid');
        invalidCheck();
    };
});

// ふりがなのバリデーション
const furiganaValidation = (obj, errorElement) => {
    if (!/^([ぁ-んー]| |　)+$/.test(obj.value)) {
        errorElement.textContent = 'ひらがなを入力してください';
        obj.classList.add('is-invalid');
    } else {
        errorElement.textContent = '';
        obj.classList.remove('is-invalid');
    }
};

// メールアドレスのバリデーション
const emailValidation = (obj, errorElement) => {
    if (!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,}(\.[a-z]+)?)$/.test(obj.value)) {
        errorElement.textContent = '半角英数字で正しくメールアドレスを入力してください。';
        obj.classList.add('is-invalid');
    } else {
        errorElement.textContent = '';
        obj.classList.remove('is-invalid');
    }
};

// 郵便番号のバリデーション
const postalValidation = (obj, errorElement) => {
    if (!/^[0-9]+$/.test(obj.value)) {
        errorElement.textContent = '半角数字のみ入力してください';
        obj.classList.add('is-invalid');
    } else if (obj.value.length !== 7) {
        errorElement.textContent = '桁数が7桁ではありません';
        obj.classList.add('is-invalid');
    } else if (/^[0-9]+$/.test(obj.value) && obj.value.length == 7) {
        errorElement.textContent = '';
        obj.classList.remove('is-invalid');
        //郵便番号が7桁入力されたらAPIを実行
        postalAPI(obj.value);
    } else {
        errorElement.textContent = '';
        obj.classList.remove('is-invalid');
    }
};

// 郵便番号のAPIを実行
const postalAPI = (value) => {
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('address-error');

    const zipcode = value;

    // 郵便番号が7桁入力されたらAPIを呼び出す
    if (zipcode.length === 7) {
        addressInput.placeholder = '検索中...';
        addressError.textContent = '';

        fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`)
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    const address1 = data.results[0].address1; // 都道府県
                    const address2 = data.results[0].address2; // 市区町村
                    const address3 = data.results[0].address3; // 町域
                    addressInput.value = `${address1}${address2}${address3}`;
                    addressError.textContent = '';
                    addressInput.classList.remove('is-invalid');
                } else {
                    addressInput.value = '';
                    addressError.textContent = '住所が見つかりません。郵便番号に間違いがないか確認してください。';
                    addressInput.classList.add('is-invalid');
                }
            })
            .catch(error => {
                console.error('エラー:', error);
                addressInput.value = '';
                addressError.textContent = 'エラーが発生しました';
                addressInput.classList.add('is-invalid');
            });
    } else {
        addressInput.value = '';
        addressError.textContent = '';
        addressInput.classList.remove('is-invalid');
    }
};

