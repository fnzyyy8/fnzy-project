//  ! Function Sederhana
function panggilFunction() {
  console.log("Isi Function");
}
panggilFunction();

//  ! Function Dengan Parameter
function panggilFunctionParam(params) {
  console.log("Function dengan parameter :", params);
}
console.log("Luar Function");
panggilFunctionParam("Ada aja deh");

// * Function itu nilainya harus di simpan dalam satu variabel

// ! Variabel dengan Function
function Penjumlahan(alas, tinggi) {
  return (alas * tinggi) / 2;
}
const hasil = Penjumlahan(10, 15);
console.log(`${hasil} cm`);

// ! Annonymous function
const anonyFunction = function () {
  console.log("Ini Annonymous Function");
};
anonyFunction();

// ! Arrow Function
// * => Bisa di katakan function

const arrowFunct = () => {
  console.log("Ini hasil arrow Function");
};

arrowFunct();
