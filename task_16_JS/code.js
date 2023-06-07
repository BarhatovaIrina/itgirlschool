let marka = document.querySelector('.marka');
let models = document.querySelector('.models');
let owners = document.querySelector('.owners');
let btn_calc = document.querySelector('.btn-calc');
let answer = document.querySelector('.answer');
let current_model = '';
let current_price = 0;

const showModels = () => {
    models.innerHTML = '';
    let current_models = auto.filter(el => el.marka == marka.value)[0].models;
    current_models.forEach(element => {
        models.innerHTML += `<option value='${element.price}'>${element.name}</option>`;
    });
    getDataAuto();
}

const getDataAuto = () => {
    current_price = models.value;
    current_model = models.options[models.selectedIndex].text;
}

const changeValueState = (state) => {
    if (state.value == 2) {
        owners.classList.add('visibled');
    }
    else {
        owners.classList.remove('visibled');
    }
}

marka.addEventListener('change', () => {
    showModels();
})

models.addEventListener('change', () => {
    getDataAuto();
})

btn_calc.addEventListener('click', (evt) => {
    evt.preventDefault();
    const probeg = document.querySelector('.probeg').value;
    const fuel_value = parseInt(document.forms[0].fuel.value);
    const engine = parseFloat(document.querySelector('.engine').value);
    const year = document.querySelector('.year').value;
    const state = document.forms[0].state.value;
    const count_owners = document.forms[0].owner.value;
    const pay = document.forms[0].pay.value;

    let price_fuel = 0;
    let fuel = '';
    switch (fuel_value) {
        case 1:
            fuel = 'бензин';
            price_fuel = 54;
            break;
        case 2:
            fuel = 'дизель';
            price_fuel = 58;
            break;
        case 3:
            fuel = 'электричество';
            price_fuel = 250;
            break;
        case 4:
            fuel = 'газ';
            price_fuel = 22;
            break;
        default:
            fuel = 'бензин';
            price_fuel = 54;
    }
    let k_engine = 0.0;
    if (engine >= 1.0 && engine < 2) {
        k_engine = 7;
    }
    if (engine >= 2 && engine < 2.5) {
        k_engine = 7.5;
    }
    if (engine >= 2.5 && engine < 3) {
        k_engine = 8;
    }
    if (engine >= 3 && engine < 3.5) {
        k_engine = 9;
    }
    let k_state = 0;
    let state_value = '';
    if (state == 2) {
        state_value = 'Подержанный'
        if (count_owners == 1) k_state = 0.1;   // 1% 
        else k_state = 0.2;                     //2%
    }
    else {
        state_value = 'Новый'
    }

    // calc
    // коэф.расхода топлива = расход топлива * цену топлива * пробег 
    const C_fuel = (((k_engine * price_fuel) / 100 * probeg) / 100).toFixed(2);
    // коэф. эксплуатации авто = коэф. износа * пробег + коэф.старения*кол-во лет + коэф.подержанности авто
    const k_work = (0.00035 * (probeg) / 100 + 0.012 * (2023 - year) + k_state).toFixed(2);
    const C_work = k_work * current_price;
    const C_auto = current_price - C_fuel - C_work;
    // console.log(C_auto + " " + C_fuel + " " + C_work);

    // вывод данных
    answer.innerHTML = '';
    answer.innerHTML = `
    <h2>Данные автомобиля</h2>
    <div class='data'>
    <p class="row_data"><span>Марка: </span> <span>${marka.value}</span></p>
    <p class="row_data"><span>Модель: </span> <span>${current_model}</span></p>
    <p class="row_data"><span>Пробег: </span> <span>${probeg}</span></p>
    <p class="row_data"><span>Тип топлива: </span> <span>${fuel}</span>  </p>
    <p class="row_data"><span>Объем двигателя: </span> <span>${engine}</span> </p>
    <p class="row_data"><span>Год выпуска: </span> <span>${year}</span> </p>
    <p class="row_data"><span>Состояние: </span> <span>${state_value}</span> </p>
    </div>
    `;
    answer.innerHTML += `
    <h2>Расчетные данные</h2>
    <div class="data">
    <p class="row_data"><span>Коэффициент расхода топлива: </span> <span>${C_fuel}</span></p>
    <p class="row_data"><span>Коэффициент эксплуатации авто: </span> <span>${C_work}</span></p>
    <p class="row_data"><span class="output">Стоимость автомобиля авто: </span> </span> <span class="output">${C_auto}</span></p>
    <p></p>
    <p class="row_data"><span>Оплата:</span> </span> <span>${pay}</span></p>
    </div>
    `;

})
showModels();


