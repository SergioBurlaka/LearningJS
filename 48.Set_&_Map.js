// 48. Что такое объект Set?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set

const uniqArr = ["1", "3"];

const myCollection = new Set([
  1,
  2,
  3,
  uniqArr,
  true,
  "false",
  false,
  [],
  [],
  1,
  5,
  uniqArr,
]);

myCollection.add({}).add(true);

myCollection.forEach((value, valueAgain, set) => {
  console.log("value", value);
  // console.log('valueAgain', valueAgain)
  // console.log('set', set)
});

console.log("myCollection.values()", myCollection.values());
console.log(`myCollection.has('')`, myCollection.has(""));
console.log(`myCollection.has('false')`, myCollection.has("false"));
console.log(` myCollection.size`, myCollection.size);

myCollection.delete(uniqArr);

console.log(` myCollection.size`, myCollection.size);

for (const item of myCollection) {
  console.log("item of myCollection", item);
}

// get uniq values from set

const uniqCollection = [...new Set([1, 1, 2, 4, 4])];

console.log(`uniqCollection `, uniqCollection);

// Map

const someObj = {
  name: "Sergii",
  age: 25,
};

const myMap = new Map();

myMap.set(someObj, "me");
myMap.set(1, 1);
myMap.set(true, "1");
myMap.set("name", "Petro");
myMap.set("LastName", "Vasilevich");

console.log(`myMap `, myMap);
console.log(`myMap.get(1) `, myMap.get(1));
console.log(`myMap.get(someObj) `, myMap.get(someObj));

myMap.forEach((value, key, map) => {
  console.log("key", key);
  console.log("value", value);
  console.log("map", map);
});

for (const item of myMap) {
  console.log("item", item);
}

console.log("myMap.entries()", myMap.entries());

// Створюємо map колекцію з об'єкту

const myGrandfather = {
  name: "Petro Vasylovich",
  age: 28,
};

const mapMyDido = new Map(Object.entries(myGrandfather));

console.log(" mapMyDido.entries()", mapMyDido.entries());
