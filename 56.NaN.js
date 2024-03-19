// 56. Что такое NaN? Как проверить, является ли значение NaN?

// Що таке NaN ?
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN

// Перевіра на NaN
// ES6 для проверки, является ли значение NaN, рекомендует использовать метод Number.isNaN
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

// node ./56.NaN

console.log("Number.isNaN(1)", Number.isNaN(1 * {}));
console.log(`Number.isNaN('1')`, Number.isNaN("1"));
console.log(`Number.isNaN(2 / {})`, Number.isNaN(2 / {}));

console.log(`Number.isNaN(1 + +[3,5,6,])`, Number.isNaN(1 + +[3, 5, 6]));

console.log(`Number.isNaN(1  +[3,5,6,])`, Number.isNaN(1 + [3, 5, 6]));

console.log(`+"b" `, +"b");
console.log(`parseInt('b') `, parseInt('b'));
console.log(`parseInt('1b') `, parseInt('1b'));

console.log(`"b" + "a" + +"a" + "a" `, "b" + "a" + +"a" + "a");
