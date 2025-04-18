// 1. 以下のコードを利用して、必要なところに型定義を行ってください。
// ◼︎ここでは今まで勉強してきた、以下を必ず全て利用してください。
// ・オプション引数
// ・デフォルト引数
// ・ジェネリクス
// ・戻り値あり / なし

// ◼︎実装時の注意事項
// ・型定義以外の修正をしないでください。
// ・APIはこちらを利用しています。また対象のAPIは以下になります
// 　https://zipcloud.ibsnet.co.jp/doc/api
// 　　- Products
// 　　- Filter Products
// 　　- Categories
// ・「〇〇」と記載している部分は、推論でできてしまう部分ですが、意図的に記載して欲しい部分です。

type ProductsType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
    }
    images: string[];
};

type CategoriesType = {
    id: number;
    name: string;
    image: string;
};

type ErrorResponse = {
    message: string;
    error: string;
    statusCode: number;
}

const BASE_URL = 'https://api.escuelajs.co/api/v1';

const getDataUtilFunc = async <T>(path: string = '', query?: string): Promise<T | undefined> => {
    try {
        const response = await fetch(BASE_URL + path + `${query ? query : ''}`);

        if (!response.ok) {
            throw new Error('Error');
        }

        const data: T = await response.json();
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const productsButton = document.getElementById('products-button');
    const filteredProductsButton = document.getElementById('filtered-products-button');
    const categoriesButton = document.getElementById('categories-button');

    // 商品ボタンをクリックしたとき
    if (productsButton instanceof HTMLButtonElement) {
        productsButton.addEventListener('click', async () => {
            const productsArray = await getDataUtilFunc<ErrorResponse>();
            console.log(productsArray);
        });
    }

    // フィルタされた商品ボタンをクリックしたとき
    if (filteredProductsButton instanceof HTMLButtonElement) {
        filteredProductsButton.addEventListener('click', async () => {
            const filteredProductsArray = await getDataUtilFunc<ProductsType[]>('/products', '/?price_min=900&price_max=1000');
            console.log(filteredProductsArray);
        });
    }

    // カテゴリボタンをクリックしたとき
    if (categoriesButton instanceof HTMLButtonElement) {
        categoriesButton.addEventListener('click', async () => {
            const categoriesArray = await getDataUtilFunc<CategoriesType[]>('/categories');
            console.log(categoriesArray);
        });
    }
});