// ! Jenis-jenis Looping
// * For        : Perulangan sesuai dengan nilai yang ditentukan di awal
// * While      : Perulangan dengan menyisipkan boolean
// * Do While   : Perulangan dengan mengesksekusi kode terlebih dahulu baru pengecekan kondisi
// * For Each   : Sma seperti for yang membedakan hanya penulisannya

// ! Looping String

console.log(" ");
console.log("=== Looping String ===");

for (let angka = 1; angka <= 5; angka++) {
  console.log(angka);
}

console.log("===========");

console.log(" ");
console.log("=== Looping Char Name ===");

const nama = "Farhan";
for (let i = 0; i < nama.length; i++) {
  const char = nama[i];
  console.log(`Indeks ke - ${i} adalah ${char}`);
}

console.log("===========");

console.log(" ");
console.log("=== Looping Name ===");

for (let i = 1; i <= 10; i++) {
  console.log(`${i}.    ${nama}`);
}

console.log("===========");
