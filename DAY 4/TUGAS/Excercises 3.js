function getCurrDate() {
  let currentDate = new Date();

  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  let formattedDate = day + "/" + month + "/" + year;

  return formattedDate;
}

let tanggalHasil = getCurrDate();
console.log("Tanggal Sekarang:", tanggalHasil);
