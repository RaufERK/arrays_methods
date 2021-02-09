console.clear();
//                  0         1        2        3         4
// const myArray = ['apple', 'banana', 'mango', 'kiwi', 'pineapple'];

// console.log('  myArray = ', myArray);
// console.log('  myArray.length => ', myArray.length);
// console.log('  myArray[0] = ', myArray[0]);
// console.log('  myArray[0] = ', myArray[myArray.length - 1]);

// способ перебора массива (3 строки , i - как индекс, управлем - i)
// for (let i = 0; i < myArray.length; i++) {
//   console.log(i, myArray[i]);
//   if (i > 1) {
//     return;
//   }
// }

// myArray.forEach((el, index) => {
//   // действия
//   // расчёты
//   // и т.д.
//   if (index > 1) {
//     console.log(index, el);
//     return;
//   }
// });

//                  0         1        2        3         4
// const myArray = ['apple', 'banana', 'mango', 'kiwi', 'pineapple'];
// // const tryNewArray = myArray.concat();
// const tryNewArray = [...myArray]; //современный метод копирования массивов

// tryNewArray[0] = 'zzz';

// console.log('tryNewArray = ', tryNewArray);
// console.log('myArray = ', myArray);

// const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 10].map((item) => {
//   //расчёты
//   //действия и т.д.
//   return item;
// });
// console.log('(map)  newArray = ', newArray);

const explArr = [1, 2, [11, 22, 33]];

console.log('explArr = ', explArr[2][0]);
