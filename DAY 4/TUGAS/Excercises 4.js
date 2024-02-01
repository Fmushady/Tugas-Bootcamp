function ganjilGenap(angka) {
  if (typeof angka != "number" || isNaN(angka)) {
    return "Input tidak valid";
  }

  if (angka % 2 !== 0) {
    return "Ganjil";
  } else {
    return "Genap";
  }
}

console.log(ganjilGenap(2));
console.log(ganjilGenap(3));
console.log(ganjilGenap("ini string"));
