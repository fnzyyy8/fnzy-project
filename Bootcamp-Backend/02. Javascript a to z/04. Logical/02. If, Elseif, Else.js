// ! Belajar if, Else if, Else

const hargaBaju = 30000;
const voucher = true;

console.log(" ");
console.log("=== if, Else if, Else ===");

// Jika harga baju lebih besar dari 100ribu dan menggunakan voucher maka tidak dapat diskon
if (hargaBaju > 100000 && voucher) {
  console.log(
    "Maaf kamu tidak dapat mendapatkan diskon karena sudah menggunakan voucher"
  );
} else if (hargaBaju > 100000) {
  console.log("Selamat anda mendapatkan diskon 10%");
} else if (hargaBaju <= 100000 && hargaBaju > 50000) {
  console.log("Selamat anda mendapatkan diskon 5%");
} else {
  console.log("Lanjutkan checkout!");
}
console.log("============");

// ! Belajar Switch

const jumlahKeluarga = 300;
console.log(" ");
console.log("=== Switch ===");
switch (jumlahKeluarga) {
  case 0:
    console.log("Keluarga anda kurang dari 2 orang");
    break;
  case 1:
    console.log("Keluarga anda kurang kurang dari 5 orang");
    break;
  default:
    console.log("Keluarga anda lebih dari 5");
}
console.log("============");
