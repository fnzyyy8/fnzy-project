// ! Array
// * Array adalah sekumpulan data, di Javascript array dapat menggunakan tipe data yang berbeda

const names = ["Farhan", "Aulia", "Fauzi", "David"];
const campurs = [`Farhan Septiansyah Hidayat`, 24, false];

// *Memanggil keseluruhan Array
console.log("====================================");
console.log(names);

// *Array di mulai dari indeks ke 0
console.log("====================================");
console.log(names[2]);

// *Campurs
console.log("====================================");
console.log(
  `Nama saya ${campurs[0]}, umur saya ${campurs[1]} tahun, Status Lajang : ${campurs[2]}`
);

// ! Array Value Modificartion
// * Push, Pop, Shift, Unshift

// * Push : Menambahkan data setelah array terakhir

const students = ["Arief", "Dwi", "Arifin"];

console.log("====================================");
console.log(" ");
console.log("====================================");

console.log(`Data Asli: ${students}`);

console.log("====PUSH====");

students.push("Joni", "Ridho", "Saufi");
console.log(`Sesudah di Push: ${students}`);

// * Pop : Menghapus deretan data array terakhir
console.log("====POP====");

students.pop();
students.pop();
students.pop();
console.log(`Sesudah di pop: ${students}`);

// * Shift : Menghapus deretan data array di awal
console.log("====SHIFT====");
students.shift(); //Merubah data jika di console.log selanjutnya

console.log(`Sesudah di Shift: ${students}`);

// * Unhift : menambahkan deretan data array di awal
console.log("====Unshift====");
students.unshift("Farhan");
console.log(`Sesudah di Unshift: ${students}`);

// ! concate
// * Menggabungkan 2 Array

console.log("====Concat====");
const arrayA = ["a", "b", "c"];
const arrayB = ["d", "e", "f"];
const arrayConcat = arrayA.concat(arrayB);

console.log(arrayConcat);

// ! Index of
// * Mencari suatu huruf di Index keberapa

console.log("====Index Of====");
const arrayindexof = arrayConcat.indexOf("e") + 1;

console.log(arrayindexof);

// ! Include
// * Mencari suatu value dari array dengan menjawab boolean
console.log("====Include====");
const arrayInclude = arrayConcat.includes("H");

console.log(arrayInclude);

// ! Reverse
// * Membalikan suatu value dalam array
console.log("====Reverse====");
const arrayReverse = arrayConcat.reverse();

console.log(arrayReverse);
