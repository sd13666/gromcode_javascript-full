// const n = 150;
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//   sum += i;
// }
// console.log(`Result: ` + sum);

//------------------------------------------
//------------------------------------------
//------------------------------------------

// const m = 10;
// const n = 20;
// let result = 1;

// for (let m = 10; m <= 20; m++) {
//   if (m % 2 === 1) {
//     result *= m;
//   };
// }
// console.log(`Result: ` + result);

//------------------------------------------
//------------------------------------------
//------------------------------------------

// for (let i = 1; i <= 5; i++) {
//   console.log('\n=> ' + i + ' <=\n\n');

//   for (let j = 1; j <= 10; j++) {
//     console.log(i + " x " + j + " = " + i * j);
//   }
// }

//------------------------------------------
//------------------------------------------
//------------------------------------------

// const n = 28;
// let sum = '';

// for (let i = 1; i <= n; i++) {
//   sum += i;
// }

// console.log(String(sum));

//------------------------------------------
//------------------------------------------
//------------------------------------------

// const start = 8;
// const end = 28;
// let result = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   } else if (i % 2 === 0 && i % 4 !== 0) {
//     result += i;
//   } else if (i % 3 === 0) {
//     result -= i;
//   } else if (i % 4 === 0) {
//     result *= i;
//   }
// }

// console.log(result);

//------------------------------------------
//------------------------------------------
//------------------------------------------

// let sum = 0;
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 !== 0) {
//     console.log("Found");
//     sum += i;
//   }
// }

// if (sum * 5 > 5000) {
//   console.log("Bigger");
// } else {
//   console.log("Smaller or equal");
// }

//------------------------------------------
//------------------------------------------
//------------------------------------------

// let sum = 0;
// for (let i = 0; i <= 10000000; i++) {
//   sum += i;
// }
// console.log(sum);

//------------------------------------------
//------------------------------------------
//------------------------------------------

let sum = 0;
for (let i = 1; i <= 1000; i++) {
  sum += i;
}

let div = Math.floor(sum / 1234);
let mod = sum % 1234;

console.log(div > mod);