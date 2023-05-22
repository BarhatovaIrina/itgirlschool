const cart = document.querySelector('.cart');
function showProducts() {
    cart.innerHTML = "";
    let sum = 0;
    products.forEach(item => {
        sum += item.price
        cart.innerHTML = cart.innerHTML + `
    <div class="item box">
    <div class="item_img"><img src="img/${item.img}"></div>
    <div class ="item_description">
        <h3>${item.name}</h3>
        <p>Цвет: ${item.color}</p>
        <p>Размер: ${item.size}</p>
        <p>Количество${item.count}</p>
    </div>
    <div class="item_price">
        <p> ${item.price} руб. </p>
    </div>
    </div>
    `
    })
    let total = document.querySelector('.total_price')
    total.innerHTML = sum;
}

showProducts();

const but = document.querySelector('.disc');
but.addEventListener('click', () => {
    let sum = 0
    const ar = document.querySelectorAll('.item_price')
    ar.forEach((item, index) => {
        let discont = (products[index].price * 0.8).toFixed()
        item.innerHTML = discont + " руб."
        sum += parseInt(discont)
    })
    let total = document.querySelector('.total_price')
    total.innerHTML = sum;
})

//// === task =====
const d1 = document.querySelector('.digit');
const d2 = document.querySelector('.new_digit');
const but_digit = document.querySelector('.but_digit');


d1.addEventListener('input', () => {
    number = d1.value[d1.value.length - 1];
    if (!isNaN(parseFloat(number) && isFinite(number))) console.log('ok')
    else {
        d1.value = d1.value.substr(0, d1.value.length - 1);
    }
})
but_digit.addEventListener('click', () => {
    number = parseInt(d1.value) ** 2;
    d2.value = number;
})