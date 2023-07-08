console.log(" ");
console.log(
  "==============================Object Literals=============================="
);
// ! Object Literals
// * Dengan menuliskan Key : Value, Key bersifat string dan Value bisa berisi data apapun.

const employee = {
  name: "Farhan Septiansyah Hidayat",
  age: 28,
  education: "Highschool",
  organitation: ["Rohis", "Paskibra", "Pramuka"],
};

// console.log(" ");
// console.log("====Employee====");
// console.log(`Nama murid: ${employee.name}`);
// console.log(`Umur murid: ${employee["age"]} th`);

// ! Array Object Literals

const employees = [
  {
    name: "Farhan Septiansyah Hidayat",
    age: 24,
    education: "Highschool",
    organitation: ["Rohis", "Paskibra", "Pramuka"],
  },
  {
    name: "Muhammad Anthony Cahyo",
    age: 22,
    education: "Degree",
    organitation: ["Engineering", "Scintiest", "Pramuka"],
  },
];

console.log(" ");
console.log("====Employees====");
console.log(employees[1]);
// console.log(`${employees[1]}`); Tidak bisa muncul dengan tulisan [objects,objects]

// ! Modifiying Object Literals

console.log(" ");
console.log("====Modifying Object Literals====");

employees[1].organitation.push("Futsal", "Karate");
employees[1].education = "Highschool";

console.log(employees[1]);
