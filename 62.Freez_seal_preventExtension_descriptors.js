//  node ./62.Freez_seal_preventExtension.js

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

// configurable
// Равен true только в том случае, если тип этого дескриптора свойства может быть изменён и если свойство может быть удалено из содержащего его объекта. Значение по умолчанию установлено в false.

// enumerable
// Равен true только в том случае, если это свойство можно увидеть через перечисление свойств содержащего его объекта. Значение по умолчанию установлено в false.

// Дескриптор данных также может содержать следующие дополнительные ключи:

// value
// Значение, ассоциированное со свойством. Может быть любым допустимым значением JavaScript (числом, объектом, функцией и т.д.). Значение по умолчанию установлено в undefined.

// writable
// Равен true только в том случае, если значение, ассоциированное со свойством, может быть изменено с помощью оператора присваивания (en-US). Значение по умолчанию установлено в false.

const child = {
  gen: "2",
  canWalk: true,
};

// створення об'єкту створення властивостей з певними дескрипторами

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

const preventExtensionsObj = {
  name: "Ronaldo",
  age: 37,
};

// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

Object.preventExtensions(preventExtensionsObj);

preventExtensionsObj.age = 46;
delete preventExtensionsObj.name;

//  TypeError: Cannot add property rank, object is not extensible
// preventExtensionsObj.rank = 1

console.log("preventExtensionsObj", preventExtensionsObj);

///////////////////////////////////////////////////////

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

const sealObj = {
  name: "Elon Mask",
  age: 52,
};
Object.seal(sealObj);

// TypeError: Cannot delete property 'name' of #<Object>
// delete sealObj.name

sealObj.name = "Mudak";

// TypeError: Cannot add property rank,
// sealObj.rank = 1

console.log("sealObj", sealObj);

////////

// Перевірка властивостей об'єкта
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

const descriptorsFreez = Object.getOwnPropertyDescriptors(testFreezObj);

console.log("descriptorsFreez", descriptorsFreez);

// descriptorsFreez {
//   name: {
//     value: 'Maraev',
//     writable: false,
//     enumerable: true,
//     configurable: false
//   },
//   age: { value: 43, writable: false, enumerable: true, configurable: false }
// }

const descriptorsPreventExtensions =
Object.getOwnPropertyDescriptors(preventExtensionsObj);


console.log("descriptorsPreventExtensions", descriptorsPreventExtensions);

// descriptorsPreventExtensions {
//   age: { value: 46, writable: true, enumerable: true, configurable: true }  
// }


const descriptorsSeal = Object.getOwnPropertyDescriptors(sealObj);

console.log("descriptorsSeal", descriptorsSeal);


// descriptorsSeal {
//   name: {
//     value: 'Mudak',
//     writable: true,
//     enumerable: true,
//     configurable: false
//   },
//   age: { value: 52, writable: true, enumerable: true, configurable: false }
// }