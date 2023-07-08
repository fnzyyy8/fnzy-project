// ! Thruty & Flasy
// * Nilai Falsy antaranya : False, null, undefined, 0, -0, NaN, ""

// Contoh

console.log("===Thruty&Falsy===");
console.log(`Ini adalah nilai Thruty : ${Boolean("Aku")}, ${Boolean(3)}`);
console.log(`Ini adalah nilai Falsy : ${Boolean(false)}, ${Boolean(null)}`);

// ! If : Percabangan atau kondisi

console.log("===Percabanagan===");
let x = 5;
let y = 1;
const value = x + y;

if (x > 3) {
  console.log("Kamu benar");
}

// ! (==) Perbandingan Loose atau 9 == '9' hasilnya true, sedangkan (===) Perbandingan Strict hasilnya false.
// * Contoh
console.log(5 === "5");
