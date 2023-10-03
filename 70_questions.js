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

console.log("resOfClosure 5+7", resOfClosure(7));
console.log("resOfClosure 2+5 ", resOfClosure(2));

const counter = () => {
  let count = 0;

  return () => {
    return ++count;
  };
};

const resulOfCounter = counter();

console.log("resulOfCounter  ", resulOfCounter());
console.log("resulOfCounter  ", resulOfCounter());
console.log("resulOfCounter  ", resulOfCounter());
console.log("resulOfCounter  ", resulOfCounter());

const myFunction = function (...arg) {
  
  console.log("arg  ", arg);
  console.log("arg  ", arg.length);
  arg.push(9)
  console.log("arg  ", arg);
  
}

myFunction(2,4)
myFunction(5,2, 'hello')


// carring карирование или частичное применение, на основе замыкания



const users = [
  {
    name: 'User 1',
    age: 23
  },
  {
    name: 'User 2',
    age: 22
  },
  {
    name: 'User 3',
    age: 21
  },
  {
    name: 'User 4',
    age: 34
  },
  {
    name: 'User51',
    age: 35
  },
]

const getPropByname = prop => item => item[prop] 

const getAge = users.map(getPropByname('age'))
const getName = users.map(getPropByname('name'))

console.log("getAge  ", getAge);
console.log("getName  ", getName);
