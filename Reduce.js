const numbers = [4, 7, 1, 5, 3, 9, 2];

// array.reduce(callback[, initialValue])

const initialValue = 10;

const result = numbers.reduce((acum, item, index, currntArray) => {
  console.log("currntArray", currntArray);

  return acum + item;
}, 0);

console.log("result", result);

const avrgValue = numbers.reduce((acum, item, index, currntArray) => {
  return index === currntArray.length - 1
    ? (acum + item) / currntArray.length
    : acum + item;
}, 0);

console.log("avrgValue", avrgValue);

const users = [
  {
    name: "Rick",
    family: ["Morty", "Summer", "Jerry", "Beth"],
  },
  {
    name: "Morty",
    family: ["Rick", "Summer", "Jerry", "Beth"],
  },
  {
    name: "Summer",
    family: ["Rick", "Morty", "Jerry", "Beth"],
  },
  {
    name: "Jerry",
    family: ["Rick", "Morty", "Summer", "Beth"],
  },
  {
    name: "Beth",
    family: ["Rick", "Morty", "Summer", "Jerry"],
  },
];

const family = users.reduce((initialValue, item) => {
  const newArr = [...initialValue];

  item.family.forEach((item) => {
    if (!initialValue.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}, []);

console.log("family", family);
