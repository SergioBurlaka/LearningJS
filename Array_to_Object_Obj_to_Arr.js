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

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// Object.entries() метод возвращает массив
const arrFromObj = Object.entries(objToArray);

console.log("arrFromObj", arrFromObj);

const arrToObj = [1, 4, 5, 6, 7];

const objFromArr_1 = { ...arrToObj };

console.log("objFromArr_1", objFromArr_1);

// console.log( Object.keys({name: 'Marta', age: 32}))

// .... преобразовать обьект в массив [] to {}

const arrToObject = [
  ["name", "Sergii"],
  ["age", 38],
];

const sergii = Object.fromEntries(arrToObject);

console.log("sergii", sergii);

const arrToObj_1 = [1, "Opel", { name: "user", age: 25 }, true];

const objFromArr = { ...arrToObj_1 };

console.log("objFromArr", objFromArr);
