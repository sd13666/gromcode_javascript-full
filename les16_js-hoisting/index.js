/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

// var a = 17;

// if (a) {
//   let a = 1;

//   console.log(a);
// }

// console.log(a);

// ----------------------------------------------------

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

// var arr = [];

// for (let i = 0; i < 10; i += 1) {
//   arr[i] = function () {
//     return i;
//   };
// }

// export { arr };

// -------------------------------------------------

/*
Создайте фабрику массивов ф-ций :
Основные требования:
Файл index.js должен експортировать ф-цию под именем createArrayOfFunctions
Ф-ция createArrayOfFunctions должна принимать целое число, как единственный аргумент. Это число укажет размерность результирующего массива
Ф-ция должно вернуть массив заданной размерности, каждым элементом которого будет ф-ция, которая возвращает свой индекс в массиве
Пример работы: createArrayOfFunctions(9)[5](); // 5
Если передано не число, нужно вернуть null
Если аргумент не передан, то вернуть пустой массив
*/

// export const createArrayOfFunctions = (size) => {
//   if (size === undefined || size <= 0) {
//     return [];
//   } else if (typeof size !== 'number') {
//     return null;
//   } else {
//     const arrayOfFunctions = [];
//     for (let i = 0; i < size; i++) {
//       arrayOfFunctions.push((function(index) {
//         return function() {
//           return index;
//         };
//       })(i));
//     }
//     return arrayOfFunctions;
//   }
// }

// console.log(createArrayOfFunctions(9)[5]());

// -----------------------------------------------

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

// var foo = 1;

// function bar() {
//   if (!foo) {
//     let foo = 10;
//   }

//   return foo;
// }

// var foo = bar();

// console.log(foo)