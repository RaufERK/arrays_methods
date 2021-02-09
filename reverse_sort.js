// const myArray = [10, 2, 3, 40, 5];

// console.log(myArray.reverse());

// myArray.sort((a, b) => a - b);

// console.log(myArray);

const symbolArray = [
  'aeweewewz',
  'aeweewewa',
  'b',
  'z',
  'bdssdsd',
  'cdsds',
  'A',
  'B',
];

symbolArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(symbolArray);
