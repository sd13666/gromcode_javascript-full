// const getSpecialNumbers = (numbers) => numbers.filter((num) => num % 3 === 0);

// const arr = [1, 2, 3, 4, 5, 6, 18, 21, 30, 33];

// console.log(getSpecialNumbers(arr));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const sortDesc = numbers => numbers.slice().sort((a, b) => b - a);

// const arr = [21, 30, 18, 3, 4, 5];

// console.log(arr);
// console.log(sortDesc(arr));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const flatArray = (arr) => arr.flat().sort((a, b) => a - b);

// const arr = [5, [2, 3, 4], 1, [6]];

// console.log(flatArray(arr));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
//   allStudentsList
//     .filter((name) => !studentsForRetake.includes(name))
//     .map((name) => "Good job, " + name);

// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];

// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];

// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(num => num % 2 === 0 ? num + delta : num);
// };

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // Output: [22, 5, 26, 28, 11, 9, 24]

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   const cloneArr = [...arr];
//   return cloneArr;
// };

// const cloneArr = (arr) => {
//   return Array.isArray(arr) ? [...arr] : null;
// };

// const arr = [1, 2, 3, 4, 5];

// console.log(cloneArr(arr));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// function withdraw(clients, balances, client, amount) {
//   const index = clients.findIndex((item) => item === client);

//   if (index !== -1) {
//     if (balances[index] >= amount) {
//       balances[index] -= amount;
//       return balances[index];
//     }
//     return -1;
//   }
//   return -1;
// }

function withdraw(clients, balances, client, amount) {
  const index = clients.findIndex((item) => item === client);
  return index !== -1
    ? balances[index] >= amount
      ? ((balances[index] -= amount), balances[index])
      : -1
    : -1;
}

// const withdraw = (clients, balances, client, amount) => {
//   const indexOfClient = clients.indexOf(client);
//   return amount > balances[indexOfClient]
//     ? -1
//     : balances[indexOfClient] - amount;
// }

// const clients = ["Ann", "John", "User"];
// const balances = [1400, 87, -6];
// const clientName = "John";
// const amountToWithdraw = 40;

// const remainingBalance = withdraw(
//   clients,
//   balances,
//   clientName,
//   amountToWithdraw,
// );
// console.log(remainingBalance); // Вивід: 37
// console.log(balances); // Вивід: [1400, 37, -6]

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const sum = (arr) => {
//   return Array.isArray(arr) ? arr.reduce((acum, el) => acum + el, 0) : null;
// };

// console.log(sum([2, 5, 6, 3, 0, 3, -1]));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const filterNames = (arr, text) => {
//   return arr
//   .filter(el => (el.length > 5 && el.includes(text)))
// }


// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'))
// //  **Пример работы:**
// //   Input: filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')
// //   Output: ['Olivya', 'Nastya']

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const arrAverage = arr => {
//   return Array.isArray(arr)
//   ? arr.reduce((acc, el) => acc + el) / arr.length
//   : null;
// };

// console.log(arrAverage([2, 3, 1, 1, -1, 3]));

// // expect(arrAverage([2, 3, 1, 1, -1, 3])).toEqual(1.5);

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const squareArray = arr => {
//   return Array.isArray(arr)
//   ? arr.map(num => Math.pow(num, 2))
//   : null;
// };

// console.log(squareArray([10, 10, 10]));
// console.log(squareArray([0, 0, 1, 3]));
// console.log(squareArray([-1, 0, -1, 1]));

// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------
// -----------------------------------

// const reverseArray = arr => {
//   return Array.isArray(arr)
//   ? [...arr].reverse()
//   : null;
// };

// const array = [0, 0, 1, 3];

// console.log(reverseArray(array));
// console.log(array);