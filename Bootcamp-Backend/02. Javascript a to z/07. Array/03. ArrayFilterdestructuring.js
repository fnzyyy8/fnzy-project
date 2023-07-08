// ! Manual Filtering menggunakan For

const nilaiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = [];

console.log(" ");
console.log("====Manual Filtering====");
for (let i = 0; i < nilaiArray.length; i++) {
  const element = nilaiArray[i];
  if (element % 2 === 0) {
    newArray.push(element);
  }
}
console.log(`Hasil dari manual : ${newArray}`);

console.log("====Filtering dengan .Filter====");
const arrayFilter = nilaiArray.filter((val) => val % 2 === 0);
console.log(`Hasil dari Filter : ${arrayFilter}`);

// ! Multidimensional Array

console.log(" ");
console.log("====Multidimensional Array====");
const arrayA = [
  [1, 2, 3, 4],
  ["Wahyu", "Anto", "David", "Ridwan", ["Hasan", "Afif", "Nawawi", "Justin"]],
  ["Ikan", "Udang", "Cumi", "Kapal Selam"],
];

// *Cara manggil arraynya
const panggilArrayMulti1 = arrayA[1][4][2]; // * Memanggil Nawawi
const panggilArrayMulti2 = arrayA[2][3]; // * Memanggil kapal selam

console.log(panggilArrayMulti1);
console.log(panggilArrayMulti2);

// ! Spread operator
// * Spread operator : Menggunakan (...) sebelum nama variabel hasilnya akan sama dengan concat dan dapat dilakukan pengulangan

console.log(" ");
console.log("====Spread Operator====");
// Contoh
const arraySpread = [...nilaiArray, ...nilaiArray]; //!Yang diambil hanya value
console.log(arraySpread);

// ! Array Desrtucturing
// * Dapat menyimpan elemen dari suatu array dalam sebuah variabel

console.log(" ");
console.log("====Destructing assignment====");
let a, b, rest;
[a, b] = [10, 20];

console.log(`Variabel a : ${a}`);
console.log(`Variabel b : ${b}`);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(`Variabel rest : ${rest}`);
