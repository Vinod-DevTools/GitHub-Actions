const { add, subtract, multiply, divide } = require('./index');

console.log('Demo results (no user input):');
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`7 − 4 = ${subtract(7, 4)}`);
console.log(`5 × 6 = ${multiply(5, 6)}`);
console.log(`8 ÷ 2 = ${divide(8, 2)}`);
