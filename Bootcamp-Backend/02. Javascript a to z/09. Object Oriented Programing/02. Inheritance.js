// ! Inheritance
// * Membuat tingkatan atau hierarcy class dalam kode program yang nantinya akan diturunkan.
// * Class : Blueprit atau rancangan
// * Judul rancangan disini student
// * Objek dari parent disini murid
// * Objek dari MuridIpa disini muridIpa

class Student {
  constructor(namaSekolah) {
    this.namaSekolah = namaSekolah;
  }
  get getNamasekolah() {
    return this.getNamasekolah;
  }
  set changeNamaSekolah(sekolah) {
    this.namaSekolah = sekolah;
  }
}

class MuridIpa extends Student {
  constructor(namaSekolah, ruangKelas) {
    super(namaSekolah);
    this.ruangKelas = ruangKelas;
  }
  get getRuangKelas() {
    return this.ruangKelas;
  }

  static idProject = 1000;
  static panggilKata() {
    console.log("Hallo");
  }
}

const murid1 = new MuridIpa("SMK Negeri II Medan", "XII IPA 2");
const murid = new Student("SMA Negeri 1", "XII IPA 3");

console.log(murid1);
console.log(murid);

// ! Static Method & Properties
// * Static berfungsi untuk membuat property dan method yang dapat diakses langsung dari class

console.log(MuridIpa);
MuridIpa.panggilKata();
