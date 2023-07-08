// ! Object Oriented Program

// * OOP Merupakan struktur dari object, berupa class menggunakan huruf besar di depan tanpa spasi.

console.log("===== Class dan Constructor Method ====");

// *Struktur class hanya dapat di isi jika ada constructor di dalamnya

class Car {
  constructor(brand, id) {
    this.brand = brand;
    this.type = "Vehicle";
    this.id = id;
  }
}
const honda = new Car("Honda", 12310);
const mazda = new Car("Mazda", 12315);

console.log(mazda);
console.log(honda);

// ! Class Field terdiri dari 3 jenis
// * Private    : Modifier yang paling restrictive atau bersifat membatasi, dimana akses hanya untuk method yang didefinisikan di dalam class yang sama
// * Protected  : Modifier yang mirit private, namun dapat diakses turunannya
// * Public     : Modifier yang paling bebas, dapat di akses dari mana saja.

// ! Getter & Setter
// * Getter mengambil data dari properti asli lalu di return, Menerapkan sikap enkapsulasi pada OOP, Mempertahankan private.
// * Setter menerapkan nilai pada suatu properti => Encrypt

console.log(" ");
console.log("===== Getter & Setter ====");

class Smartphone {
  constructor(id, brand) {
    this.id = id;
    this.brand = brand;
  }
  get getBrandName() {
    return this.brand;
  }
  get getId() {
    return this.id;
  }
  set changeId(secretId) {
    this.id = secretId;
  }
}

const xiaomi = new Smartphone(13172908, "Xiamoi"); // ! => Pastikan di atas console.log

xiaomi.changeId = 8888;
console.log(xiaomi.getBrandName);
console.log(xiaomi.getId);

// ! Method Chaining
// * Mengikat atau merantai method => memanggil lebih dari satu method untuk satu kali operasi dengan mengolah object yang sama.

class Student {
  constructor(id) {
    this.id = id;
  }
  setNama(nama) {
    this.nama = nama;
    return this;
  }
  setKelas(kelas) {
    this.kelas = kelas;
    return this;
  }
  setJurusan(jurusan) {
    this.jurusan = jurusan;
    return this;
  }

  getStudentInfo() {
    return {
      id: this.id,
      nama: this.nama,
      kelas: this.kelas,
      Jurusan: this.jurusan,
    };
  }
}

let murid1001 = new Student(1001);
murid1001.setNama("Farhan Septiansyah Hidayat");
murid1001.setKelas("XII IPA 1");
murid1001.setJurusan("IPA");
console.log(murid1001.getStudentInfo());

console.log(
  new Student(1002)
    .setNama("Arief Dwi Putra")
    .setKelas("XII IPS 3")
    .setJurusan("IPS")
);
