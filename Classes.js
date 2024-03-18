class Animal {
  constructor(name) {
    this.name = name;
  }

  canEat() {
    return true;
  }
}

const Leopard = new Animal("Leopard");

console.log("Leopard ", Leopard);
console.log("Leopard.canEat() ", Leopard.canEat());

class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }

  canJump() {
    return this.name + " can jump";
  }
}

const WhiteRabbit = new Rabbit("White Rabit ");

console.log("WhiteRabbit ", WhiteRabbit);
console.log("WhiteRabbit.canJump() ", WhiteRabbit.canJump());
console.log("WhiteRabbit.canEat() ", WhiteRabbit.canEat());

Animal.prototype.canFly = "I can`t fly";

console.log("WhiteRabbit.canFly ", WhiteRabbit.canFly);

console.log("typeof Rabbit ", typeof Rabbit);

// Геттеры/сеттеры, другие сокращения

class User {
  #msg = "hello world";

  constructor(name) {
    this.name = name;
  }

  age = 0;

  get msg() {
    return this.#msg;
  }

  set msg(value) {
    this.#msg = value;
  }
}

const Sergii = new User("Sergii");

console.log("Sergii.age", Sergii.age);
Sergii.age = 28;

console.log("Sergii", Sergii);

console.log("Sergii.msg", Sergii.msg);

Sergii.msg = "Hello JS";

console.log("Sergii.msg", Sergii.msg);

class Car {
  static name = "Auto";

  constructor(name) {
    this.name = name;
  }

  static isThisCar() {
    return Car === this;
  }
}

console.log("Car.isThisCar() ", Car.isThisCar());

console.log("Car.name ", Car.name);

class CoffeeMachine {
  #waterAmount = 0;

  constructor(power) {
    this.power = power;
  }

  get power() {
    return this.power;
  }
  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    this.#waterAmount = value;
  }
}

const coffeeMachinePower_200 = new CoffeeMachine(200);

coffeeMachinePower_200.waterAmount = 500;

console.log("coffeeMachinePower_200 ", coffeeMachinePower_200);
