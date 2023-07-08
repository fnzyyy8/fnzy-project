// ! Nesting Object

// *Menghapus
const employee = {
  name: "Farhan Septiansyah Hidayat",
  age: 28,
  education: "Highschool",
  organitation: ["Rohis", "Paskibra", "Pramuka"],
};

console.log(" ");
console.log("================Menghapus================");
console.log(" ");
console.log("====Sebelum====");

console.log(employee); // ! Sebelum di delete
delete employee.education;

console.log(" ");
console.log("====Sesudah====");
console.log(employee); // ! Sesudah di delete

// * Cara akses detail
const dataKaryawan = {
  idKaryawan: 101227,
  nama: "Farhan Septiansyah Hidayat",
  noTelp: "0882016965192",
  keahlian: {
    bahasa: ["Inggris", "Indonesia", "China"],
    softskills: [
      "Backennd Developer",
      "Microsoft Excel",
      "Microsoft Power Point",
    ],
    hardskills: ["Communication", "Negotiation", "Analytics"],
  },
};

console.log(" ");
console.log("================Akses Detail================");
console.log(" ");

const softSkills = dataKaryawan.keahlian.softskills;

console.log(softSkills);

// ! Iterating Object
// * For in

const data = {
  id: 100,
  amount: 20000,
  type: "Food",
};

console.log(" ");
console.log("===============Iterating Objects================");
console.log(" ");
for (const value in data) {
  console.log(value, ": ", data[value]);
}

// ! Ubah menjadi Array

console.log(" ");
console.log("===============Iterating Objects================");
console.log(" ");
const keys = Object.keys(data);
console.log(keys);

// ! Looping datanya

console.log(" ");
console.log(
  "===============Looping Dari Hasil Perubahan Array================"
);
console.log(" ");

for (let i = 0; i < keys.length; i++) {
  console.log("Data ke", i + 1, ":", keys[i]);
}
