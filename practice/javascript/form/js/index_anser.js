// フォーム要素の取得
const form = document.getElementById('form');
const requiredInputs = document.querySelectorAll('.form__input[required]');
const submitButton = document.getElementById('submit');
const agreeCheckbox = document.getElementById('agree');
const agreeError = document.getElementById('agree-error');

// バリデーション状態を管理するオブジェクト
const formState = {
    isValid: false,
    fields: {
        name: false,
        furigana: false,
        email: false,
        postal: false,
        address: false,
        agree: false
    },
    // すべてのフィールドが有効か確認
    checkAllValid() {
        return Object.values(this.fields).every(field => field === true);
    },
    // 状態更新とボタン活性化
    updateState(field, isValid) {
        this.fields[field] = isValid;
        this.isValid = this.checkAllValid();
        submitButton.disabled = !this.isValid;
    }
};

// 送信処理
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    // 送信前に全フィールドの再検証
    const isFormValid = validateAllFields();
    
    if (isFormValid) {
        console.log('送信しました：コンソールログのみ');
        // 実際の送信処理はここに追加
    }
});

// すべてのフィールドを検証する関数
function validateAllFields() {
    let isValid = true;
    
    // 各必須フィールドの検証
    requiredInputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}-error`);
        
        // 空のチェック
        if (!input.value.trim()) {
            errorElement.textContent = '必須項目のためご入力ください。';
            errorElement.classList.add('is-error');
            input.classList.add('is-invalid');
            formState.updateState(input.id, false);
            isValid = false;
            return;
        }
        
        // 特定フィールドの追加バリデーション
        switch (input.id) {
            case 'furigana':
                isValid = furiganaValidation(input, errorElement) && isValid;
                break;
            case 'email':
                isValid = emailValidation(input, errorElement) && isValid;
                break;
            case 'postal':
                isValid = postalValidation(input, errorElement) && isValid;
                break;
            default:
                errorElement.textContent = '';
                errorElement.classList.remove('is-error');
                input.classList.remove('is-invalid');
                formState.updateState(input.id, true);
        }
    });
    
    // 同意チェックボックスの検証
    if (!agreeCheckbox.checked) {
        agreeError.textContent = '必須項目のためチェックを入れてください。';
        agreeError.classList.add('is-error');
        agreeCheckbox.classList.add('is-invalid');
        formState.updateState('agree', false);
        isValid = false;
    } else {
        agreeError.textContent = '';
        agreeError.classList.remove('is-error');
        agreeCheckbox.classList.remove('is-invalid');
        formState.updateState('agree', true);
    }
    
    return isValid;
}

// 各入力フィールドのイベントリスナー設定
requiredInputs.forEach(input => {
    // blurイベントでのバリデーション
    input.addEventListener('blur', function() {
        const errorElement = document.getElementById(`${this.id}-error`);
        
        if (!this.value.trim()) {
            errorElement.textContent = '必須項目のためご入力ください。';
            errorElement.classList.add('is-error');
            this.classList.add('is-invalid');
            formState.updateState(this.id, false);
        } else if (this.id === 'furigana') {
            furiganaValidation(this, errorElement);
        } else if (this.id === 'email') {
            emailValidation(this, errorElement);
        } else if (this.id === 'postal') {
            postalValidation(this, errorElement);
        } else {
            errorElement.textContent = '';
            errorElement.classList.remove('is-error');
            this.classList.remove('is-invalid');
            formState.updateState(this.id, true);
        }
    });
});

// 郵便番号の入力監視（タイプ中）
const postalInput = document.getElementById('postal');
let postalTimeout;

postalInput.addEventListener('input', function() {
    clearTimeout(postalTimeout);
    const errorElement = document.getElementById('postal-error');
    
    // 入力が完了してから少し待ってからAPIを呼び出す（連続入力防止）
    if (this.value.length === 7 && /^[0-9]+$/.test(this.value)) {
        postalTimeout = setTimeout(() => {
            postalAPI(this.value);
        }, 300);
    }
    
    // 入力中の基本バリデーション
    if (!/^[0-9]*$/.test(this.value)) {
        errorElement.textContent = '半角数字のみ入力してください';
        errorElement.classList.add('is-error');
        this.classList.add('is-invalid');
        formState.updateState('postal', false);
    } else if (this.value.length > 0 && this.value.length !== 7) {
        errorElement.textContent = '桁数が7桁ではありません';
        errorElement.classList.add('is-error');
        this.classList.add('is-invalid');
        formState.updateState('postal', false);
    } else if (this.value.length === 0) {
        errorElement.textContent = '';
        errorElement.classList.remove('is-error');
        this.classList.remove('is-invalid');
        formState.updateState('postal', false);
    } else {
        errorElement.textContent = '';
        errorElement.classList.remove('is-error');
        this.classList.remove('is-invalid');
        formState.updateState('postal', true);
    }
});

// 同意（チェックボックス）のチェック必須を確認
agreeCheckbox.addEventListener('change', () => {
    if (!agreeCheckbox.checked) {
        agreeError.textContent = '必須項目のためチェックを入れてください。';
        agreeError.classList.add('is-error');
        agreeCheckbox.classList.add('is-invalid');
        formState.updateState('agree', false);
    } else {
        agreeError.textContent = '';
        agreeError.classList.remove('is-error');
        agreeCheckbox.classList.remove('is-invalid');
        formState.updateState('agree', true);
    }
});

// ふりがなのバリデーション
const furiganaValidation = (input, errorElement) => {
    if (!/^([ぁ-んー]| |　)+$/.test(input.value)) {
        errorElement.textContent = 'ひらがなを入力してください';
        errorElement.classList.add('is-error');
        input.classList.add('is-invalid');
        formState.updateState('furigana', false);
        return false;
    } else {
        errorElement.textContent = '';
        errorElement.classList.remove('is-error');
        input.classList.remove('is-invalid');
        formState.updateState('furigana', true);
        return true;
    }
};

// メールアドレスのバリデーション
const emailValidation = (input, errorElement) => {
    if (!/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,}(\.[a-z]+)?)$/.test(input.value)) {
        errorElement.textContent = '半角英数字で正しくメールアドレスを入力してください。';
        errorElement.classList.add('is-error');
        input.classList.add('is-invalid');
        formState.updateState('email', false);
        return false;
    } else {
        errorElement.textContent = '';
        errorElement.classList.remove('is-error');
        input.classList.remove('is-invalid');
        formState.updateState('email', true);
        return true;
    }
};

// 郵便番号のバリデーション
const postalValidation = (input, errorElement) => {
    if (!/^[0-9]+$/.test(input.value)) {
        errorElement.textContent = '半角数字のみ入力してください';
        errorElement.classList.add('is-error');
        input.classList.add('is-invalid');
        formState.updateState('postal', false);
        return false;
    } else if (input.value.length !== 7) {
        errorElement.textContent = '桁数が7桁ではありません';
        errorElement.classList.add('is-error');
        input.classList.add('is-invalid');
        formState.updateState('postal', false);
        return false;
    } else {
        errorElement.textContent = '';
        errorElement.classList.remove('is-error');
        input.classList.remove('is-invalid');
        formState.updateState('postal', true);
        
        // 郵便番号が7桁入力されたらAPIを実行
        postalAPI(input.value);
        return true;
    }
};

// 郵便番号のAPIを実行（async/await使用）
const postalAPI = async (value) => {
    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('address-error');
    const zipcode = value;

    // 郵便番号が7桁入力されたらAPIを呼び出す
    if (zipcode.length === 7) {
        try {
            addressInput.placeholder = '検索中...';
            addressError.textContent = '';
            
            const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
            const data = await response.json();
            
            if (data.results) {
                const address1 = data.results[0].address1; // 都道府県
                const address2 = data.results[0].address2; // 市区町村
                const address3 = data.results[0].address3; // 町域
                addressInput.value = `${address1}${address2}${address3}`;
                addressError.textContent = '';
                addressInput.classList.remove('is-invalid');
                formState.updateState('address', true);
            } else {
                addressInput.value = '';
                addressError.textContent = '住所が見つかりません。郵便番号に間違いがないか確認してください。';
                addressError.classList.add('is-error');
                addressInput.classList.add('is-invalid');
                formState.updateState('address', false);
            }
        } catch (error) {
            console.error('エラー:', error);
            addressInput.value = '';
            addressError.textContent = 'エラーが発生しました';
            addressError.classList.add('is-error');
            addressInput.classList.add('is-invalid');
            formState.updateState('address', false);
        }
    } else {
        addressInput.value = '';
        addressError.textContent = '';
        addressInput.classList.remove('is-invalid');
        formState.updateState('address', false);
    }
};

// 初期化：フォーム読み込み時にすべてのフィールドを非有効として設定
window.addEventListener('DOMContentLoaded', () => {
    // フォームの初期状態設定
    submitButton.disabled = true;
    
    // 初期バリデーションチェック（すでに値が入っている場合のため）
    requiredInputs.forEach(input => {
        if (input.value.trim()) {
            const errorElement = document.getElementById(`${input.id}-error`);
            
            switch (input.id) {
                case 'furigana':
                    furiganaValidation(input, errorElement);
                    break;
                case 'email':
                    emailValidation(input, errorElement);
                    break;
                case 'postal':
                    postalValidation(input, errorElement);
                    break;
                default:
                    formState.updateState(input.id, true);
            }
        }
    });
    
    // チェックボックスの初期状態確認
    if (agreeCheckbox.checked) {
        formState.updateState('agree', true);
    }
});