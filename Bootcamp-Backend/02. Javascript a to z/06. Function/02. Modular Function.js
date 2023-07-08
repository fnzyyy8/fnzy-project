// ! Challange Membuat Function Modular
// * Rumus tabung Phi * r2 * t

function kuadrat(a) {
  return a * a;
}

function vxr2xt(y, z) {
  return y * z;
}

function hitungVolumeTabung(r, t) {
  const jumlahKuadrat = kuadrat(r);
  const JumlahPiKalirKdrt = 3.14 * jumlahKuadrat;
  const volumeTabung = vxr2xt(JumlahPiKalirKdrt, t);
  return volumeTabung;
}

let r = 10;
let t = 3;
const hasilHitungVolumetabung = hitungVolumeTabung(r, t);

console.log(`Jika r = ${r} dan t = ${t} hitungla volume tabung berikut ?`);
console.log(`Volume tabung adalah : ${hasilHitungVolumetabung} cm3`);
