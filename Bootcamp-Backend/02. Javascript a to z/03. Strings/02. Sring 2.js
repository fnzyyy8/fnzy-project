// ! Concatenation & Tamplate Literal

console.log("===Concate type===");

const kataA = "Aku";
const kataB = "Cinta";
const kataC = "Kamu";

const gabungKataA = kataA.concat(" ", kataB, " ", kataC);
const gabungKataB = kataA + " " + kataB + " " + kataC;

console.log(gabungKataA);
console.log(gabungKataB);
console.log(kataA + " " + kataB + " Bapak " + kataC);

console.log("===Tamplate Literal===");

const awalKata = "Selamat, ";
const nama = "Farhan ";
const lulus = "Kamu lulus ke tahap selanjutnya ";
const level1 = "(Level 1).";

const gabungkanLiteral = `${awalKata}${nama}${lulus}di ${level1}`;
console.log(gabungkanLiteral);
