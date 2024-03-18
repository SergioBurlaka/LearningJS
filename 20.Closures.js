// 20. Что такое замыкание (Closures)?

const myClosure_1 = (a) => (b) => a + b;

const resOfClosure = myClosure_1(5);

console.log("resOfClosure 5+7", resOfClosure(7));
console.log("resOfClosure 2+5 ", resOfClosure(2));

const counter = () => {
  let count = 0;

  return () => ++count;
};

const resulOfCounter = counter();

console.log("resulOfCounter  ", resulOfCounter());
console.log("resulOfCounter  ", resulOfCounter());
console.log("resulOfCounter  ", resulOfCounter());
console.log("resulOfCounter  ", resulOfCounter());

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
    name: "Svitlana",
    age: 28,
  },
];

const caaryFn = (propName) => (obj) => obj[propName];

const names = users.map(caaryFn("name"));
const ages = users.map(caaryFn("age"));

// console.log("names", names);
// console.log("ages", ages);
