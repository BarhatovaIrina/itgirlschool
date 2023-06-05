let box_car = document.querySelector('.car');
let box_bike = document.querySelector('.bike');
function showData() {
    let t1 = '<h2>Car\'s catalog</h2>';
    let t2 = '<h2>Bike\'s catalog</h2>';
    data.forEach(element => {
        if (element.type == 'car') {
            const obj = new Car(element.price, element.brand, element.doors);
            t1 += `
            <div class="item">
                <p class="title">${obj.getInfo()}</p>
                <img src='${element.image}'>
                <p> ${obj.getDoorsCount()}</p>
                <p> ${obj.getPrice()}</p>
            </div>`;
        }
        if (element.type == 'bike') {
            const obj = new Bike(element.price, element.brand, element.maxSpeed);
            t2 += `
            <div class="item">
                <p class="title">${obj.getInfo()}</p>
                <img src='${element.image}'>
                <p> ${obj.getMaxSpeed()}</p>
                <p> ${obj.getPrice()}</p>
            </div>
            `;
        }
    });
    box_car.innerHTML = t1;
    box_bike.innerHTML = t2;
}

showData();