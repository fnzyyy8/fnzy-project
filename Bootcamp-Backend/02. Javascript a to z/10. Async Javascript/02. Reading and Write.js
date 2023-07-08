// * Syncronus tanpa callback, Asyncronus menggunakan callback
// *Stringify = Mengubah jadi string
// * Parse = Mengubah menjadi array object

const fs = require("fs");
const { test } = require("node:test");
const { json } = require("stream/consumers");

const data = [
  {
    nama: "Farhan",
    umur: 24,
    Jabatan: "Document Control",
  },
];

fs.writeFileSync("test.json", JSON.stringiy(data, null, 2));

const dataRead = fs.readFile("test.json");

console.log(dataRead);
