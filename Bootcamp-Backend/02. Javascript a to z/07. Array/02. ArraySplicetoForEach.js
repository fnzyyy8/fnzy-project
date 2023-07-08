// !Slice & Splice

console.log("====Data Array====");
const dataArrays = ["a", "b", "c", "d", "e", "f"];

// * Slice
console.log("====Slice====");
console.log(dataArrays.slice(1));
console.log(dataArrays.slice(1, 3));

// * Splice
console.log("====Splice====");
console.log(dataArrays.splice(1, 2));
console.log(dataArrays); // => Data dari splice yang tersisa.

// ! Looping pada Array
console.log(" ");
console.log("====Looping Pada Array====");
const arrayIsian = ["Nama : ", "Umur : ", "Pendidikan terakhir : "];

for (let judul = 1; judul <= 3; judul++) {
  console.log(`Data ke (${judul})`);
  for (let bio = 0; bio < arrayIsian.length; bio++) {
    console.log(arrayIsian[bio]);
  }
  console.log(" ");
}

// ! Array and Push

const arrayKosong = [];

for (let nomor = 1; nomor <= 10; nomor++) {
  arrayKosong.push(`Kuda ke - ${nomor}`);
}
console.log(arrayKosong);

// ! For Each Looping array dengan mudah.

console.log("====Looping ForEach====");
const arrayForEach = ["Ikan", "Udang", "Cumi", "Gurita"];
arrayForEach.forEach((Element) => console.log(Element));
