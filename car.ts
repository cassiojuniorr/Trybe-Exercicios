class Car {
    brand: string;
    color: string;
    doors: number;

    constructor(brand: string, color: string, doors: number) {
        this.brand  = brand;
        this.color  = color;
        this.doors  = doors;
    }

    honk() { console.log('Buzina'); }
    turnOn() { console.log('Liga o carro'); }
    turnOff() { console.log('Desliga o carro'); }
    speedUp() { console.log('Acelera'); }
    speedDown() { console.log('Reduzir'); }
    stop() { console.log('Parrar o carro'); }
    turn(side: string) { console.log(`virou a ${side}`); }
}

const car1 = new Car('volkswagen', 'prata', 4);

console.log(car1.turn('right'));

export = Car;


