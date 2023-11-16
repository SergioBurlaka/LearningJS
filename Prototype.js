// https://learn.javascript.ru/prototype-inheritance
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain


// Дуже корисне відео по прототипах
// https://www.youtube.com/watch?v=b55hiUlhAzI&t=1738s

const parent = {
  gen: "1",
  canFly: true,
};

const child = {
  gen: "2",
  canWalk: true,
};

child.__proto__ = parent;

console.log("child.canFly ", child.canFly);
console.log("child.canWalk ", child.canWalk);

const Animal = class {};
const Rabbit = class {};

const myStr = "React js";

console.log(
  "myStr.__proto__ === String.prototype",
  myStr.__proto__ === String.prototype
);

console.log(
  "parent.__proto__ === Object.prototype",
  parent.__proto__ === Object.prototype
);

console.log(
  "child.__proto__.__proto__ === Object.prototype",
  child.__proto__.__proto__ === Object.prototype
);
console.log(
  "child.__proto__ === Object.prototype",
  child.__proto__ === Object.prototype
);

const myArr_2 = ["1", 4, true];

console.log(
  "myArr_2.__proto__ === Array.prototype0",
  myArr_2.__proto__ === Array.prototype
);

const User = class {
  constructor(name) {
    this.name = name;
  }
};

const sergii = new User("Sergii");

console.log("sergii", sergii);
console.log(
  "sergii.__proto__ === User.prototype",
  sergii.__proto__ === User.prototype
);

for (let item in child) {
  console.log("item", item, child.hasOwnProperty(item));
}

// Клас наслідує об'єкт

const animal = {
  canEats: function () {
    return true;
  },
};

class Rabbit_1 {
  constructor(name) {
    this.name = name;
  }
}

// function Rabbit_1(name) {
//   this.name = name;

//   this.canRun = function () {
//     return true;
//   };
// }

// Наслідування класу від об'єкту

Rabbit_1.prototype.__proto__ = animal;

// Для наслідування конструктора Rabbit_1 віл об'єкту animal
// Rabbit_1.prototype = animal;

const whiteRabbit = new Rabbit_1("White rabbit");

console.log("whiteRabbit", whiteRabbit);
console.log(" whiteRabbit.canRun()", whiteRabbit.canEats());

class Rabbit_2 {
  constructor(name) {
    this.name = name;
    console.log(" Second rabbit");
  }
  canWalk() {
    return true;
  }
}
class Rabbit_3 extends Rabbit_2 {
  constructor(name) {
    super(); /// обов'язково вказати при наслідуванні

    this.name = name;
    console.log(" Third rabbit");
  }
  canJamp() {
    return true;
  }
}

Rabbit_2.prototype.canFly = function () {
  return ` ${this.name} can fly`;
};

const rabbit_3 = new Rabbit_3("Pink rabbit");

console.log(" rabbit_3.canWalk()", rabbit_3.canWalk());

console.log(
  " rabbit_3.__proto__ === Rabbit_3.prototype",
  rabbit_3.__proto__ === Rabbit_3.prototype
); // true

console.log(" rabbit_3.canWalk()", rabbit_3.canFly());


