// 4. Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?

const myNextSelary = "2300";

// console.log(
//   "myNextSelary = ",
//   typeof Number(myNextSelary),
//   Number(myNextSelary)
// );

// console.log("myNextSelary = ", typeof +myNextSelary, +myNextSelary);

// console.log(
//   "myNextSelary = ",
//   typeof Number.parseInt(myNextSelary),
//   Number.parseInt(myNextSelary)
// );

const myNewNumber = parseInt("4.567");

// console.log("myNewNumber = ", typeof myNewNumber, myNewNumber);

const myNewNumber_2 = Math.floor("4.567");

// console.log("myNewNumber_2 = ", typeof myNewNumber_2, myNewNumber_2);

const muNumber = Number("3.826349");

// console.log("muNumber = ", typeof muNumber, muNumber);

const nullToNumber = Number(null);

// console.log("nullToNumber = ", typeof nullToNumber, nullToNumber);

const undefinedToNumber = Number(undefined);

// console.log("undefinedToNumber = ", typeof undefinedToNumber, undefinedToNumber);

// 14. В чем разница между операторами "==" и "==="?

const res_1 = 2 == "2";

// console.log("res_1 ", res_1);

const res_2 = true == "1";

// console.log("res_2 ", res_2);

const myObj = {};

const cloneOfMyObj = myObj;

const res_3 = cloneOfMyObj == myObj;

// console.log("res_3 ", res_3);

//16. Для чего используется оператор "!!"?

// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!'') // false
// console.log(!!0) // false
// console.log(!!NaN) // false
// console.log(!!' ') // true
// console.log(!!{}) // true
// console.log(!![]) // true
// console.log(!!1) // true
// console.log(!![].length) // false

// 20. Что такое замыкание (Closures)?

const myClosure_1 = (a) => (b) => a + b;

const resOfClosure = myClosure_1(5);

// console.log("resOfClosure 5+7", resOfClosure(7));
// console.log("resOfClosure 2+5 ", resOfClosure(2));

const counter = () => {
  let count = 0;

  return () => {
    return ++count;
  };
};

const resulOfCounter = counter();

// console.log("resulOfCounter  ", resulOfCounter());
// console.log("resulOfCounter  ", resulOfCounter());
// console.log("resulOfCounter  ", resulOfCounter());
// console.log("resulOfCounter  ", resulOfCounter());

const myFunction = function (...arg) {
  console.log("arg  ", arg);
  console.log("arg  ", arg.length);
  arg.push(9);
  console.log("arg  ", arg);
};

// myFunction(2,4)
// myFunction(5,2, 'hello')

// carring карирование или частичное применение, на основе замыкания

const users = [
  {
    name: "User 1",
    age: 23,
  },
  {
    name: "User 2",
    age: 22,
  },
  {
    name: "User 3",
    age: 21,
  },
  {
    name: "User 4",
    age: 34,
  },
  {
    name: "User51",
    age: 35,
  },
];

const getPropByname = (prop) => (item) => item[prop];

const getAge = users.map(getPropByname("age"));
const getName = users.map(getPropByname("name"));

// console.log("getAge  ", getAge);
// console.log("getName  ", getName);

let hello = "Hello";

// sayHello();

function sayHello() {
  console.log(hello);
}

// 22. Как проверить, является ли значение ложным?

// console.log("is false  '' ", Boolean(''));
// console.log("is false  undefined ", Boolean(undefined));
// console.log("is false null ", Boolean(null));
// console.log("is false  [] ", Boolean([]));
// console.log("is false  NaN ", Boolean(NaN));
// console.log("is false false ", Boolean(false));
// console.log("is false 0 ", Boolean(0));

// 24. Какое значение имеет this?

const myThisFun = function () {
  console.log("this", this);
};

// console.log("this 2 ", this);
// myThisFun();

const myUser = {
  name: "Peter",
  getMyself() {
    return this;
  },
  age: 74,
  getName() {
    return this.name;
  },
  getAge(a, b, c) {
    return `first arg: ${a}, age: ${this.age} second arg: ${b}, third arg: ${c}`;
  },
};

const myMom = {
  name: "Svitlana",
  age: 25,
};

// console.log("myUser ", myUser.getName());

const getNameSveta = myUser.getName;

const res = getNameSveta.call(myMom);

// console.log("res ", res);

const resBimd = getNameSveta.bind(myMom);

// console.log("resBimd() ", resBimd());

// console.log("getMyself() ", myUser.getMyself());

// window.alert(" Show window");

const getAgeOfSvitlana = myUser.getAge.call(
  myMom,
  "Star 1",
  "Star 2",
  "Star 3"
);

// console.log("getAgeOfSvitlana(", getAgeOfSvitlana);

let user_2 = {
  name: "Marta",
  getName() {
    console.log(this.name);
  },
};

let user_3 = user_2;
user_2 = null;

// user_3.getName();

// console.log("user_2", user_2);
// console.log("user_3", user_3);

///////

const user_4 = {
  name: "Simple user",
  age: 21,
  getAge() {
    return this.age;
  },

  getNameArrowFn() {
    return (() => this.name)();
  },

  getLostAge() {
    const self = this;

    return (function () {
      return self.age;
    })();
  },
};
const userAdmin = {
  name: " Admin",
  age: 32,
};

const getName_2 = function () {
  return this.name;
};

user_4.f = getName_2;
userAdmin.f = getName_2;

// console.log("user_4", user_4.f());
// console.log("userAdmin", userAdmin.f());

userAdmin.gettingage = user_4.getAge;

// console.log("userAdmin gettingage", userAdmin.gettingage());

// console.log("user_4 getLostAge", user_4.getLostAge());
// console.log("user_4 getLostAge", user_4.getNameArrowFn());
////

const user_5 = {
  name: "Valeriy",
  age: 45,

  getAge: function () {
    return this.age;
  },
  // getName: () => this.name
  // таке не працює бо стрілкова ф-ція не має this
};

// console.log("user_5 getAge", user_5.getAge());
// console.log("user_5 getName", user_5.getName());

const getNameOfValeriy = function () {
  return this.name;
};

user_5.getMyName = getNameOfValeriy;

// console.log("user_5 getMyName", user_5.getMyName());

const myName_1 = "Sergii";

const getSergiiName = function () {
  return this.myName_1;
};

// console.log('getSergiiName ', getSergiiName())
// console.log('getSergiiName ', window?.myName_1)

const getThisObj = function () {
  console.log("this obj", this);
};

const getName_3 = () => this.name;
// Немає свого this тому посилається на глобальний

const persone = {
  name: "Sergii",
  age: 37,
  getThisObj: getThisObj,
  getWindow: getThisObj.bind(window),
};

persone.getThisObj();
persone.getWindow();

// console.log("persone.getName_3()", getName_3.call(persone));

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

console.log("this === window", this === window);
console.log("this ", this);
// В строгом режиме, если значение this не установлено в контексте выполнения, оно остаётся undefined, как показано в следующем примере:

const globalObject = this;
const foo = () => this;
console.log("foo() === globalObject", foo() === globalObject);

// Створюємо this для стрілкової вункції

const persone_2 = {
  name: "Nadiya",
  age: 32,
  getAge: function () {
    return (() => this.age)();
  },

  lostName: function() {
    return (function() {
      return this.name
    })()
  }
};




console.log('persone_2.getAge() ',  persone_2.getAge())
// console.log('persone_2.lostName() ',  persone_2.lostName()) this  в такому випадку губиться


// this та прототипи





const grandparent = {
  gen:'1',
  name: 'Boris',
  canWalk: true
}

const parent_1 = {
  gen:'2',
  name: 'Igor',
  canFly: true
}

const son = {
  gen: '3',
  name: 'Sergii',
  canRead: true,
  getCanWalk: function() {
    return this.canWalk
  }
}


parent_1.__proto__ = grandparent
son.__proto__ = parent_1


console.log('son.getCanWalk() ', son.getCanWalk())


// 25. Что такое прототип объекта?
