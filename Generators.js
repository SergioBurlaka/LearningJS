// https://learn.javascript.ru/generators-iterators

function* GenerateSequence() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const sequence = GenerateSequence();

console.log("res 1", sequence.next());
console.log("res 2", sequence.next());
console.log("res 3", sequence.next());
console.log("res 4", sequence.next());
console.log("res 5", sequence.next());

// res 1 {value: 1, done: false}
// res 2 {value: 2, done: false}
// res 3 {value: 3, done: false}
// res 4 {value: 4, done: true}
// res 5 {value: undefined, done: true}

// Композиция генераторов

const combinedGenerators_1_3 = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const combinedGenerators_4_6 = function* () {
  yield 4;
  yield 5;
  yield 6;
};
const combinedGenerators = function* () {
  yield* combinedGenerators_1_3();
  yield* combinedGenerators_4_6();
};

const combinationResult = combinedGenerators();

console.log("res 1", combinationResult.next());
console.log("res 2", combinationResult.next());
console.log("res 3", combinationResult.next());
console.log("res 4", combinationResult.next());
console.log("res 5", combinationResult.next());
console.log("res 6", combinationResult.next());
console.log("res 7", combinationResult.next());

// res 1 {value: 1, done: false}
// res 2 {value: 2, done: false}
// res 3 {value: 3, done: false}
// res 4 {value: 4, done: false}
// res 5 {value: 5, done: false}
// res 6 {value: 6, done: false}
// res 7 {value: undefined, done: true}

// Перебор генераторов

for (let value of combinationResult) {
  console.log("value", value);
}

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
