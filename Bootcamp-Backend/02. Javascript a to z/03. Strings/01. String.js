// ! Index & Length
const word = "Aku dan Kamu";

console.log("===Index & Length===");
console.log(word.length);
console.log(word[1]);

// ! Slice mengambil kata
console.log("===Bagian Slice===");
console.log(word.slice(8)); // ! (0 = Awal kata | 3 = Akhir kata) & (3 = Huruf ke 4 sampai akhir)

// ! trim untuk menghilangkan whitespace
console.log("===Bagian Trim===");
console.log(word.trim()); // ! Menghilangkan spasi di awal dan akhir

// ! Uppercase and Lowercase

console.log("===Bagian Upper case dan Lower Case===");

const ubahCase = "Aku Mau Makan";
const Upper = ubahCase.toUpperCase();
const Lower = ubahCase.toLowerCase();

console.log(ubahCase);
console.log(Upper);
console.log(Lower);
