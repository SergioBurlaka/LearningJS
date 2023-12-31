// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

const child = {
  gen: "2",
  canWalk: true,
};


Object.defineProperty(child, "nonIterablePrp", {
  value: "Hello i am not iterable property",
  enumerable: false,
});

for (let item in child) {
  console.log("item", item, child.hasOwnProperty(item));
}

console.log("child", child);


//  https://learn.javascript.ru/property-descriptors#globalnoe-zapechatyvanie-obekta

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