// ! Function menggunakan object

function tambahObject(Object) {
  console.log(Object);
  return Object.a + Object.b + Object.c;
}

const hasil = tambahObject({
  a: 5,
  b: 3,
  c: 2,
});

console.log(hasil);

// ! Filter object

const tipeMobil = [
  {
    merk: "Honda",
    cc: 2000,
    posisi: 1,
    kondisi: "Mantap",
  },
  {
    merk: "BMW",
    cc: 3000,
    posisi: 3,
    kondisi: "Kurang Mantap",
  },
  {
    merk: "Toyota",
    cc: 1500,
    posisi: 1,
    kondisi: "Mantap",
  },
  {
    merk: "Mercedes Benz",
    cc: 3500,
    posisi: 2,
    kondisi: "Sangat mantap",
  },
];

const filterCcMobil = tipeMobil.filter((val) => val.cc <= 2000);

console.log(filterCcMobil);

const elementA = { namaAwal: "Farhan", namaTengah: "Septiansyah" };
const elementB = { namaAkhir: "Hidayat" };

const gabungElement = { ...elementA, ...elementB };
console.log(gabungElement);

const { nomor, kelas, jumlah } = { nomor: 1231996, kelas: "2B", jumlah: "10" };

console.log(kelas);
