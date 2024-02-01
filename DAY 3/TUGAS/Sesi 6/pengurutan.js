// Buatlah sebuah array bernama numbers yang berisi angka acak.
//Urutkan array tersebut secara ascending menggunakan fungsi sort.
// Kemudian, urutkan array secara descending.

let numbers = [4, 3, 1, 3, 11];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);
