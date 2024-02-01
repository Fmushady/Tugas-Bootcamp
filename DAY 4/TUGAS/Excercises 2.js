// A. Membuat objek
let saya = {
  nama_depan: "Furqan",
  nama_belakang: "Mushady",
  hobi: ["menyanyi", "ngoding", "makan"],
  angka_favorit: 69,
  memakai_kacamata: false,
};

// B. Menambah property dan menampilkan setiap perubahan
console.log("Nama Depan:", saya.nama_depan);
console.log("Nama Belakang:", saya.nama_belakang);
console.log("Hobi:", saya.hobi);
console.log("Angka Favorit:", saya.angka_favorit);
console.log("Memakai Kacamata:", saya.memakai_kacamata);

// C. Cetak nama_lengkap dengan console.log.
console.log("\nNama Lengkap:", saya.nama_depan + " " + saya.nama_belakang);

// D. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.
console.log("\nMengubah Angka Favorit menjadi 8");
saya.angka_favorit = 8;
console.log("Angka Favorit:", saya.angka_favorit);

// E.nambah hobi
console.log("\nMenambahkan hobi 'coding'");
saya.hobi.push("coding");
console.log("Hobi:", saya.hobi);

// F.Nambah property
console.log("\nMenambahkan property 'lulusan' dengan value 'Hacktiv8'");
saya.lulusan = "Hacktiv8";
console.log("Lulusan:", saya.lulusan);

// G. Cetak semua hobi satu per satu menggunakan loop.
console.log("\nCetak semua hobi satu per satu menggunakan loop:");
for (let i = 0; i < saya.hobi.length; i++) {
  console.log("Hobi", i + 1 + ":", saya.hobi[i]);
}

// H. Cetak semua key milik objek, dan cetak semua values milik objek.
console.log("\nCetak semua key milik objek:");
for (let key in saya) {
  console.log(key);
}

// I. Gunakan loop untuk cetak semua property milik objek dengan format key : values
console.log(
  "\nGunakan loop untuk cetak semua property milik objek dengan format key : values:"
);
for (let key in saya) {
  console.log(key + " : " + saya[key]);
}
