const showMessage = () => {
    console.log('Я учу JavaScript!');
}

let kart = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let n = kart.length;
let index = 1;

function nextImg() {
    index++;
    if (index >= n)
        index = 0;
    show(index);
}
function previosImg() {
    index--;
    if (index < 0)
        index = n - 1;
    show(index);
}

function show(index) {
    const d = document.querySelector("#ris");
    let img = document.createElement('img');
    img.src = "img\\" + kart[index];
    d.replaceChildren(img);
    // console.log(index);
}
show(1);

function checkYear() {
    let year = document.querySelector('.year').value;
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                alert('Год високосный');
            }
            else alert('Год невисокосный');
        }
        else alert('Год високосный');
    }
    else alert('Год невисокосный');
}