// https://learn.javascript.ru/prototype-inheritance
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://www.youtube.com/watch?v=b55hiUlhAzI&t=1738s


const parent = {
    gen: '1',
    canFly: true
}

const child = {
    gen: '2',
    canWalk: true
}

child.__proto__ = parent

console.log('child.canFly ', child.canFly)
console.log('child.canWalk ', child.canWalk)



const Animal = class {
  

}
const Rabbit = class {

}


