const elm = document.querySelectorAll('.item');

for (let i = 0; i < elm.length; i++) {
    if (elm[i].textContent === "ぶどう") {
        console.log('continue!');
        continue;
    }
    console.log(elm[i].textContent);
}


// りんご
// みかん
// continue!
// もも
// パイナップル