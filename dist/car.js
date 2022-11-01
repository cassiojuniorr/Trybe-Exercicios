"use strict";
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() { console.log('Buzina'); }
    turnOn() { console.log('Liga o carro'); }
    turnOff() { console.log('Desliga o carro'); }
    speedUp() { console.log('Acelera'); }
    speedDown() { console.log('Reduzir'); }
    stop() { console.log('Parrar o carro'); }
    turn(side) { console.log(`virou a ${side}`); }
}
const car1 = new Car('volkswagen', 'prata', 4);
console.log(car1.turn('right'));
module.exports = Car;
