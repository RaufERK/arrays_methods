console.clear();
//                  0         1        2        3         4
// const myArray = ['apple', 'banana', 'mango', 'kiwi', 'pineapple'];

// const newArr = myArray.slice(3)
// console.log(newArr);

//                  0         1        2        3         4
// const myArray1 = ['apple', 'banana', 'mango', 'kiwi', 'pineapple'];

// myArray1.splice(2,0,'new item','water melone')

// console.log(myArray1);

const result = [11, 12, 13].reduce((acc, item, arr, index) => {
  console.log(acc, item);
  return acc + '_' + item;
}, 'start');
console.log(result);
