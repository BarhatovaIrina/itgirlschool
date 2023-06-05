class Transport {
    constructor(type, price, brand) {
        this.type = type;
        this.price = price;
        this.brand = brand;
    }
    getInfo() {
        return `
            type: ${this.type},
            brand: ${this.brand}
            `
    }
    getPrice() {
        return `price: ${this.price}`;
    }
}

class Car extends Transport {
    constructor(price, brand, doors) {
        super('car', price, brand);
        this.doors = doors;
    }
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getDoorsCount = this.getDoorsCount.bind(this);
    getDoorsCount() {
        return `count doors: ${this.doors}`;
    }
}

class Bike extends Transport {
    constructor(price, brand, maxspeed) {
        super('bike', price, brand);
        this.maxspeed = maxspeed;
    }
    getInfo = this.getInfo.bind(this);
    getPrice = this.getPrice.bind(this);
    getMaxSpeed = this.getMaxSpeed.bind(this);
    getMaxSpeed() {
        return `max speed: ${this.maxspeed}`;
    }
}