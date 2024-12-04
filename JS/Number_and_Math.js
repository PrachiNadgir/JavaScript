const score = 900
console.log(score);
const value = new Number(100)
console.log(value);
console.log(value.toString());
console.log(value.toString().length);
console.log(value.toFixed(3));

const otherNum = 200.90
console.log(otherNum.toPrecision(3));

const number = 20000000;
console.log(number.toLocaleString('en-IN'));


// //****************Maths***********************
// math library is default in JS
// console.log(Math)
// console.log(Math.abs(-9))
// console.log(Math.round(9.8))
// console.log(Math.ceil(9.8))
// console.log(Math.floor(9.8))
// console.log(Math.min(9,8,1,0))
// console.log(Math.max(9,8,1,0))

console.log(Math.random())//bet 0 and 1
console.log(Math.floor(Math.random()*10)+1 )

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1) + min));




