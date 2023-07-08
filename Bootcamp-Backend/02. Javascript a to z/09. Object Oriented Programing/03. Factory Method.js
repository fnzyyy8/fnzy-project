class DocumentControl {
  constructor() {
    this.sallary = 5500000;
    this.bonus = 800000;
  }
}

class Surveyor {
  constructor() {
    this.sallary = 4500000;
    this.bonus = 300000;
  }
}
class Engineer {
  constructor() {
    this.sallary = 10000000;
    this.bonus = 1000000;
  }
}

class Factory {
  constructor(jabatan) {
    if (jabatan === "Document Control") {
      return new DocumentControl();
    } else if (jabatan === "Surveyor") {
      return new Surveyor();
    } else if (jabatan === "Engineer") {
      return new Engineer();
    }
  }
}

const pegawai1 = new Factory("Document Control");

console.log(pegawai1);
