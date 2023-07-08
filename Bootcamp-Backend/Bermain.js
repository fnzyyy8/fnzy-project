const dataNamaFarhan = ["Farhan", "Septiansyah", "Hidayat"];
const dataNamaAulia = ["Aulia", "Jasmine", "Kumala", "Inanda"];

const kataKunci = [1, 2, 3];
const diLaksanakan = kataKunci[1];

console.log(" ");
console.log(`Perintah yang dilaksanakan : (${diLaksanakan})`);

if (diLaksanakan === 1) {
  for (let Outer = 1; Outer <= 5; Outer++) {
    console.log(" ");
    console.log("Perintah menggunakan ilmu looping");
    console.log(
      `====== Outter berisikan nama ${dataNamaFarhan[0]} ======${Outer}`
    );
    for (let Inner = 1; Inner <= 3; Inner++) {
      console.log(" ");
      console.log(`====== Inner ${dataNamaAulia[0]} cantik ======${Inner}`);
    }
  }
} else if (diLaksanakan === 2) {
  console.log(" ");
  console.log("Perintah menggunakan ilmu Function");
  console.log(" ");

  function hitungbonus(gaji, pembeli) {
    let bonus = 0;
    if (pembeli < 10) {
      bonus;
    } else if (pembeli <= 50) {
      bonus = gaji * 0.05;
    } else if (pembeli <= 100) {
      bonus = gaji * 0.1;
    } else {
      bonus = gaji * 0.2;
    }
    return bonus;
  }
  function PotonganBpjs(gajiBonus) {
    return (gajiBonus * 2.5) / 100;
  }
  function GajiKotor(Penghasilan, customer) {
    const JumlahBonus = hitungbonus(Penghasilan, customer);
    const GajiDanBonus = Penghasilan + JumlahBonus;
    const JumlahPotonganBpjs = PotonganBpjs(GajiDanBonus);
    const totalGaji = GajiDanBonus - JumlahPotonganBpjs;
    const takeHomePay = totalGaji;
    console.log(`Gaji Kotor kamu : Rp. ${Penghasilan}`);
    console.log(`Bonus dan gaji kamu : Rp. ${GajiDanBonus}`);
    console.log(`Total potongan kamu Rp. ${JumlahPotonganBpjs}`);
    return takeHomePay;
  }

  Cons;
  const HasilGaji = GajiKotor(2000000, 8);

  console.log(`Selamat kamu menghasilkan : Rp. ${HasilGaji}`);
} else {
}
