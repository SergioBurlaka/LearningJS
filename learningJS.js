
// 70 вопросов по JavaScript для подготовки к собеседованию
// https://habr.com/ru/articles/486820/



// console.log('learning java script')

const factorial = (n) => {
  if (n === 1) return 1;
  return factorial(n - 1) * n;
};

// console.log('factorial(5)', factorial(5))

const clouser = (n) => {
  let count = n;
  return () => {
    return count++;
  };
};

const counter = clouser(0);
const counter2 = clouser(5);

// console.log('counter()', counter())
// console.log('counter()', counter())
// console.log('counter()', counter())

// console.log('counter2()', counter2())
// console.log('counter2()', counter2())
// console.log('counter2()', counter2())

// 24. Какое значение имеет this?

const car = {
  name: "Ford Mustang",
  getCarname() {
    return this.name;
  },
};

// console.log("car", car.getCarname());

const newMetodGetCar = function () {
  return this.name;
};

function getCarNameFn() {
  return this.name;
}

const newFun = newMetodGetCar.bind(car);

const arrowFn = () => this.name;

// console.log(getCarName.apply(carDetails))

// console.log("getCarNameFn", getCarNameFn.call(car));
// console.log("arrowFn", arrowFn.call(car));
// console.log("newFun", newFun());

// 25. Что такое прототип объекта?

const animal = {
  eat: true,
};

const rabbit = {
  jump: true,
};

rabbit.__proto__ = animal;

// console.log("rabbit ", rabbit.eat);

const iterateObj = (obj) => {
  for (prop in obj) {
    console.log("prop", prop, obj[prop]);
  }
};

// iterateObj(rabbit);

function CarCreator(name) {
  this.name = name;
}

const ford = new CarCreator("Ford");
const bmw = new CarCreator("BMW");

// console.log("ford ", ford);
// console.log("bmw ", bmw);

CarCreator.prototype.riding = function () {
  console.log(" yeah let's go ");
};

// bmw.riding();

const nine = 9;

// console.log(
//   "nine.__proto__ === Number.prototype ",
//   nine.__proto__ === Number.prototype
// );

const newArr = new Array(1, 3, 4, 5);

// console.log(
//   "newArr.__proto__ === Array.prototype ",
//   newArr.__proto__ === Array.prototype
// );

// // console.log(newArr.__proto__.__proto__ );

// function FirstConstructor() {}
// function SecondConstructor() {}

// console.log(FirstConstructor.prototype === SecondConstructor.prototype);
// console.log(FirstConstructor.__proto__ === SecondConstructor.__proto__);

// console.log(
//   "Object.prototype === Array.__proto__.__proto__",
//   Object.prototype === Array.__proto__.__proto__
// );

const User = class {
  constructor(name) {
    this.name = name;
  }
};

// const petro = new User("Petro");

// console.log("petro ", petro);

// console.log(
//   " Function.prototype === User.prototype",
//   Function.prototype === User.prototype
// );
// console.log(
//   "Function.prototype === User.__proto__",
//   Function.prototype === User.__proto__
// );
// console.log(
//   "Object.prototype === User.__proto__.__proto__",
//   Object.prototype === User.__proto__.__proto__
// );

const myTestFunction = function () {};

// console.log(
//   "Function.prototype === myTestFunction.__proto__",
//   Function.prototype === myTestFunction.__proto__
// );

const twelve = 12;

// console.log(
//   "Number.prototype === twelve.__proto__",
//   Number.prototype === twelve.__proto__
// );

const ArrowFnTwo = () => {
  this.name = "my own function 2";
};
const ArrowFnThree = function () {
  this.name = "my own function 3";
};

// const testTwo = new ArrowFnTwo()

const testThree = new ArrowFnThree();

// console.log("testTwo ", testTwo);
// console.log("testThree ", testThree);

let arr = [1, 2, 3];

// console.log("arr.toString() ", arr.toString());

// Деструктурізація об'єкту

const myObj2 = {
  name: "Sergio",
  age: 36,
  car: "Walksvagen",
};

const { age, herro = "supermen", ...rest } = myObj2;

// console.log(age, rest);

// Деструктурізація масиву

const someArr = [2, 7, 3, 12, 6, 0, 3];

const [arr1, arr2] = someArr;

const someArr_2 = [2, 7];

const [first, second, ...rstArr] = someArr_2;

// console.log(arr1, arr2);
// console.log(first, second, rstArr);

// const timeoutId = setTimeout( ()=>{
//   console.log('say Hello ')
// }, 3000)

const myPromise = new Promise((res, rej) => {
  setTimeout(() => res("Hello"), 1000);
});

// myPromise.then((resp) => {
//   console.log("resp", resp);
// });

const myAsync = async () => {
  return "Hellow async";
};

// myAsync().then((resp) => {
//   console.log("myAsync resp", resp);
// });

const asyncOperation = async () => {
  const result = await myAsync();

  console.log("myAsync result", result);
};

// asyncOperation();

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbersArr.splice(3, 4);

// console.log("numbersArr", numbersArr);

numbersArr.splice(10, 4, 90, 88, 77);

// console.log("numbersArr", numbersArr);

const concatArr = [1, 5, 6];
const concatArr_2 = ["audi", "wv", "ford", "chevrolet"];

const emptyObject = {};
const emptyObject_2 = { hi: "Hello from object" };

const isObjectEmpty = (obj) => {
  for (key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }

  return true;
};

// console.log("isObjectEmpty (emptyObject)", isObjectEmpty(emptyObject));
// console.log("isObjectEmpty (emptyObject_2)", isObjectEmpty(emptyObject_2));

const generator = function* () {
  yield 1;
  yield 2;
  yield 3;
};

const generatorResult = generator();

// console.log("generatorResult", generatorResult);

const one = generatorResult.next();
const two = generatorResult.next();
const three = generatorResult.next();

// console.log("one", JSON.stringify(one));
// console.log("two", JSON.stringify(two));
// console.log("three", JSON.stringify(three));

const params = [...generator()];

// console.log("params", params);

function* gen() {
  let ask1 = yield "2 + 2 = ?";

  let ask2 = yield "3 * 3 = ?";
}

let generator_2 = gen();

// console.log(generator_2.next().value); // "2 + 2 = ?"

// console.log(generator_2.next().value); // "3 * 3 = ?"

// console.log(generator_2.next().done); // true

// Примеры карирования (по сути это замыкание)

const sum = (a, b) => a + b;

const sumCarry = (a) => (b) => a + b;

// console.log("sum ", sum(10, 7));
// console.log("sumCarry ", sumCarry(15)(3));

const sumOnFive = sumCarry(5);
const sumOn_3 = sumCarry(3);

// console.log("sumOnFive ", sumOnFive(7));
// console.log("sumOn_3 ", sumOn_3(7));

const arrOfObj = [
  {
    id: 1,
    name: "name _1",
  },
  {
    id: 2,
    name: "name _2",
  },
  {
    id: 3,
    name: "name _3",
  },
  {
    id: 4,
    name: "name _4",
  },
];

const get = (property) => (objet) => objet[property];

const getId = get("id");
const getNmae = get("name");

const arrId = arrOfObj.map(getId);
const arrName = arrOfObj.map(getNmae);

// console.log("arrId ", arrId);
// console.log("arrName ", arrName);

const mapedResp = (fn) => (objet) => objet.map(fn);

// console.log("mapedResp", mapedResp(get("id"))(arrOfObj));

///////////////

const str = "Rome";

// console.log(str.toUpperCase());

const number = 3.14159265359;

// console.log(number.toFixed(4));

const myBigInt = 21342134123515134513413451343456356746513451341345n;
const myNotBigInt = 21342134123515134513413451343456356746513451341345;

// console.log("myBigInt ", myBigInt);
// console.log("myNotBigInt ", myNotBigInt);

const myFn = () => {};

// console.log("typeof myFn", typeof myFn);

// console.log("typeof ", typeof 100);
// console.log("typeof ", typeof 100123n);
// console.log("typeof ", typeof "my string");

// console.log("typeof ", typeof []);
// console.log("typeof ", typeof {});

//////////////class////////////////////

const MyClassCar = class {
  constructor(name) {
    this.name = name;
  }

  run() {
    return this.name + " car running";
  }
};

// console.log("typeof ", typeof MyClassCar);

MyClassCar.prototype.sayBep = () => {
  return "Beeeep";
};

const ford_1 = new MyClassCar("Ford");

// console.log("typeof ", typeof ford_1);
// console.log("ford_1 ", ford_1);
// console.log("ford_1 ", ford_1.run());
// console.log("ford_1 ", ford_1.sayBep());

// console.log(
//   "ford_1.__proto__ === MyClassCar.prototype ",
//   ford_1.__proto__ === MyClassCar.prototype
// );

ford_1.__proto__.getName = function () {
  return this.name;
};

// console.log("ford_1 ", ford_1.getName());

const wolksvagen = new MyClassCar("Wolksvagen");

// console.log("wolksvagen ", wolksvagen.run());
// console.log("wolksvagen ", wolksvagen.sayBep());
// console.log("wolksvagen ", wolksvagen.getName());

// наследование

const Animal = class {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(value) {
    this.speed = value;
  }
  stop() {
    this.speed = 0;
  }

  get isRunning() {
    if (this.speed) return "animal runing";
    return "animal stends";
  }
};

const myPet = new Animal("My pet");

// console.log("myPet ", myPet);
// console.log("myPet ", myPet.name);
// console.log("myPet ", myPet.isRunning);

myPet.run(10);

// console.log("myPet ", myPet.isRunning);

myPet.stop();

// console.log("myPet ", myPet.isRunning);

// class Rabbit extends Animal

const Rabbit = class extends Animal {
  constructor(name) {
    super(name);
    this.jamp = false;
  }

  hide() {
    console.log(this.name + " прячется");
  }

  stop() {
    super.stop();
    this.hide();
  }

  jamping() {
    this.jamp = true;
  }
  stopJamping() {
    this.jamp = false;
  }
};

const myWhiteRabbit = new Rabbit("white rabbit");

// console.log("myWhiteRabbit ", myWhiteRabbit);

// console.log("myWhiteRabbit ", myWhiteRabbit.name);
// console.log("myWhiteRabbit ", myWhiteRabbit.jamp);

myWhiteRabbit.run(10);

// console.log("myWhiteRabbit ", myWhiteRabbit.isRunning);

// myWhiteRabbit.stop();

// console.log("myWhiteRabbit ", myWhiteRabbit.isRunning);

// console.log(
//   " myWhiteRabbit instanceof Animal",
//   myWhiteRabbit instanceof Animal
// );
// console.log(
//   " myWhiteRabbit instanceof Rabbit",
//   myWhiteRabbit instanceof Rabbit
// );

// ..... инкапсуляцтя................

const CoffeeMachine = class {
  _waterAmount = 0;

  constructor({ power }) {
    this.power = power;
    // console.log("coffee machine created, power" + power);
  }

  get waterAmmount() {
    return this._waterAmount;
  }

  set waterAmmount(level) {
    if (level <= 0) {
      console.log("water level should be more then 0");
      return;
    }
    this._waterAmount = level;
  }
};

const myCoffeemashine = new CoffeeMachine({ power: 200 });

myCoffeemashine.waterAmmount = 500;

// console.log("myCoffeemashine", myCoffeemashine);

const getPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("Hello from primise");
    }, 1000);
  });
};

const myPromise_2 = getPromise();

// myPromise_2.then((res) => {
//   console.log("myPromise_2", res);
// });

////////// Map

const myMap = new Map();

myMap.set("1", "string");
myMap.set(1, "num");
myMap.set(true, "boolean");

// console.log("myMap.get(true)", myMap.get(true));

// console.log("myMap.get(true)", myMap.get(true));

// console.log("myMap.size", myMap.size);
// console.log("myMap", myMap);

/////////////// Object iteration

const men = {
  tall: 165,
  weight: 75,
};

const myObjForIteration = {
  age: 24,
  name: "Petro",
  car: "Mersedes",
};

myObjForIteration.__proto__ = men;

const myIterObj = (obj) => {
  for (let key in obj) {
    console.log("all property", obj[key]);

    if (obj.hasOwnProperty(key)) {
      console.log("hasOwnProperty", obj[key]);
    }
  }
};

// myIterObj(myObjForIteration);

/// array to object

const arrToObject = ["4", 5, 7, true, "hello"];

const newObj = { ...arrToObject };

// console.log("newObj", newObj);

////// Наследование в конструкторах

const Human = function (name) {
  this.name = name;
  this.walk = function () {
    return "walking";
  };
};

const Admin = function (name) {
  Human.call(this);
  this.name = name;
  this.sayHello = function () {
    return "Hello i am admin";
  };
};

Admin.prototype = Object.create(Human.prototype);

const admin_1 = new Admin("admin 1");

// console.log(admin_1.sayHello());
// console.log(admin_1.walk());

const Men = function (name) {
  this.name = name;
  this.toWalk = function () {
    return "i am walking";
  };
};

const SuperHero = function (name) {
  Men.call(this);

  this.name = name;
  this.toFly = function () {
    return "i am flying";
  };
};

Object.setPrototypeOf(SuperHero.prototype, Men.prototype);

const clarkKent = new SuperHero("Clark Kent");

// console.log(clarkKent.toWalk());

///////////////// carring карирование или частичное применение, на основе замыкания

const users = [
  {
    name: "Petro",
    age: 24,
  },
  {
    name: "Sergii",
    age: 36,
  },
  {
    name: "Marta",
    age: 32,
  },
  {
    name: "Pavlo",
    age: 28,
  },
];

const caaryFn = (propName) => (obj) => obj[propName];

const names = users.map(caaryFn("name"));
const ages = users.map(caaryFn("age"));

// console.log("names", names);
// console.log("ages", ages);

// .... преобразовать обьект в массив {} to []

const objToArray = {
  name: "Marta",
  age: 32,
  father: {
    name: "Igor",
    age: 53,
  },
  numbers: [1, 2, 6],
  bolean: true,
};

const nwArr = Object.keys(objToArray).map((key) => [key, objToArray[key]]);

// console.log("nwArr", nwArr);

const arrFromObj = Object.entries(objToArray);

// console.log("arrFromObj", arrFromObj);

const arrToObj = [1, 4, 5, 6, 7];

// const objFromArr_1 = Object.fromEntries(arrToObj);
// console.log("arrToObj", arrToObj);

// console.log( Object.keys({name: 'Marta', age: 32}))

// Convert array to object

const arrToObj_1 = [1, "Opel", { name: "user", age: 25 }, true];

const objFromArr = { ...arrToObj_1 };

// console.log("objFromArr", objFromArr);

/// Наследование функций конструкторов

const Persone = function (name) {
  this.name = name;

  this.walking = function () {
    console.log("start walking ", this.name);
  };
};

const Student = function (name) {
  Persone.call(this);
  this.name = name;

  this.sayHello = function () {
    console.log(" sayHello ", this.name);
  };
};

const petro = new Student("Petro");

// petro.sayHello()
// petro.walking()

// 1. В чем разница между null и undefined?

// console.log(typeof null);
// console.log(typeof undefined);
// console.log("call anonimus arrow function", (() => {})());
// console.log("call anonimus function", (function () {})());

// 2. Для чего используется оператор "&&"?

const and = 0 && 1 && 2;

const and_1 = 1 && 2 && 3;

const and_2 = 1 && 0 && 3;

// console.log('and', and)
// console.log('and_1', and_1)
// console.log('and_2', and_2)

// 3. Для чего используется оператор "||"?

// Параметры по умолчанию

const tempObj = {
  name: "user",
  age: 25,
};

const { name: superName, age: superAge } = tempObj;

console.log("superName", superName);
console.log("superAge", superAge);

const checkArguments = function (a, b, c) {
  const nweArr = Object.keys(arguments).map((key) => arguments[key]);

  console.log("nweArr", nweArr.length);

  return nweArr;
};

console.log("checkArguments", checkArguments(2, 4, 7));

const myObject = {
  name: "Peter",
  age: 45,
};

for (key in myObject) {
  console.log("key", key);
}

for (const [key, value] of Object.entries(myObject)) {
  console.log("key", key);
  console.log("value", value);
}

const swCase = (value) => {
  switch (value) {
    case "hello":
      return "hello";

    default:
      return value;
  }
};

console.log("swCase ", swCase("hello"));

console.log("swCase ", swCase("hi"));

//  разделение массива на позитивный и негативный с помощью reduce

const myArrReduce = [2, -1, 4, -7, 3, -9, 8];

const resultReduce = myArrReduce.reduce(
  (acum, item) => {
    if (item > 0) {
      acum.positive.push(item);
    }
    if (item <= 0) {
      acum.negative.push(item);
    }

    return acum;
  },
  {
    positive: [],
    negative: [],
  }
);

console.log("resultReduce", resultReduce);

const incrementArrUsingReduce = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const resultIncreasion = incrementArrUsingReduce.reduce((acum, item, index) => {
  acum.push(item + index);
  return acum;
}, []);

console.log("resultIncreasion", resultIncreasion);

const cars = [
  "Ferrary",
  "BMW",
  "Honda",
  "Toyota",
  "Lexus",
  "Mwrsedes",
  "Opel",
  "Ferrary",
  "Lamborgini",
  "BMW",
  "Porshe",
  "Toyota",
  "Ferrary",
  "Dodge",
  "Lamborgini",
  "Porshe",
  "Ford",
  "Porshe",
  "Ferrary",
  "Lamborgini",
  "Ford",
];

const countCars = cars.reduce((acum, item) => {
  acum[item] = acum[item] ? acum[item] + 1 : 1;

  return acum;
}, {});

console.log("countCars", countCars);

console.log("cars.includes('Opel')", cars.includes("Opel"));
console.log(
  "cars.some('Opel')",
  cars.some((item) => item === "Opel")
);


