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

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

Object.defineProperty(child, "nonIterablePrp", {
  value: "Hello i am not iterable property",
  enumerable: false,
});

for (let item in child) {
  console.log("item", item, child.hasOwnProperty(item));
}

console.log("child", child);

// https://learn.javascript.ru/property-descriptors#globalnoe-zapechatyvanie-obekta

// Глобальное запечатывание объекта

const testFreezObj = {
  name: "Maraev",
  age: 43,
};

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.

Object.freeze(testFreezObj);

// Uncaught TypeError: Cannot assign to read only property 'age' of object '#<Object>'
// testFreezObj.age = 46

// TypeError: Cannot delete property 'name'
// delete testFreezObj.name

// console.log("testFreezObj", testFreezObj);
//////////////////////////////////////////////////////

const testFreezObj_2 = {
  name: "Ronaldo",
  age: 37,
};

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

Object.preventExtensions(testFreezObj_2);

testFreezObj_2.age = 46;
delete testFreezObj_2.name;

//  TypeError: Cannot add property rank, object is not extensible
// testFreezObj_2.rank = 1

console.log("testFreezObj_2", testFreezObj_2);

///////////////////////////////////////////////////////

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

const testFreezObj_3 = {
  name: "Elon Mask",
  age: 52,
};
Object.seal(testFreezObj_3);

// TypeError: Cannot delete property 'name' of #<Object>
// delete testFreezObj_3.name

testFreezObj_3.name = "Mudak";

// TypeError: Cannot add property rank,
// testFreezObj_3.rank = 1

console.log("testFreezObj_3", testFreezObj_3);

////////

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


