// Kerjakan Soal - Soal dibawah ini dalam bentuk live code.
// -Buatlah variable dengan let dan const.
// -Gunakan console.log() untuk menampilkan isi variable di console browser.
// A. Buatlah sebuah array berisi 5 buah-buahan (string).
// B. Lalu tambahkan satu buah.
// C. Edit/ubah satu buah.
// D. Kurangi satu buah terakhir dari array
// E.  Gunakan console.log() untuk menampilkan isi array di setiap step nya.

// A. Buatlah sebuah array berisi 5 buah-buahan (string).
let buahArray = ["Apel", "Jeruk", "Anggur", "Pisang", "Mangga"];
console.log("Step A:", buahArray);

// B. Lalu tambahkan satu buah.
buahArray.push("Strawberry");
console.log("Step B:", buahArray);

// C. Edit/ubah satu buah.
buahArray[2] = "Nanas";
console.log("Step C:", buahArray);

// D. Kurangi satu buah terakhir dari array.
buahArray.pop();
console.log("Step D:", buahArray);
