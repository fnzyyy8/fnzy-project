// Asyncronus : Bersamaan, Syncronus: Satu persatu.

// Contoh Syncronus

function tentukanNilaiSync(Nilai) {
  if (Nilai > 10) {
    return console.log("Nilai diatas 10");
  } else if (Nilai < 10) {
    return console.log("Nilai Kurang dari 10");
  } else if ((Nilai = 10)) {
    return console.log("Nah ini 10");
  }
}

// const nilai1 = tentukanNilaiSync(10);

// Return tidak bisa di jalankan pada sistem callback

function beratIdeal(tinggiBadan, jenisKelamin) {
  if (jenisKelamin === "pria") {
    const tinggiKurang = tinggiBadan - 100;
    const berat = tinggiKurang - tinggiKurang * 0.1;
    return berat;
  } else if (jenisKelamin === "wanita") {
    const tinggiKurang = tinggiBadan - 100;
    const berat = tinggiKurang - tinggiKurang * 0.15;
    return berat;
  }
}

// function hitungIdeal(tinggiBadan, beratBadan, jenisKelamin) {
//   setTimeout(function () {
//     const ideal = beratIdeal(tinggiBadan, jenisKelamin);
//     console.log(`Berat bdan ideal kamu : ${ideal}`);
//     if (beratBadan <= ideal - 5) {
//       console.log("Mohon untuk menambah asupan!");
//     } else if (beratBadan >= ideal + 5) {
//       console.log("Mohon untuk berolahraga!");
//     } else {
//       console.log("Mantap, Jaga berat tubuh mu");
//     }
//   }, 5000);
// }

// hitungIdeal(180, 68, "wanita");

// ! Promises
function beliPromise(uang, harga) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kembalian = uang - harga;
      console.log("Uang anda: ", uang);
      console.log("Belanjaan anda : ", harga);
      if (kembalian >= 0) {
        resolve(kembalian);
      } else {
        reject("Uang tidak cukup !");
      }
    }, 5000);
  });
}
// beliPromise(30000, 15000)
//   .then((kembalian) => {
//     console.log(kembalian);
//     return beliPromise(kembalian, 5000);
//   })
//   .then((kembalian) => {
//     console.log(kembalian);
//     return beliPromise(kembalian, 8000);
//   })
//   .then((kembalian) => {
//     console.log(kembalian);
//     return beliPromise(kembalian, 3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ! Async await
async function panggilBeli() {
  try {
    // const kembalian1 = await beliPromise(50000, 40000);
    // console.log("Sisa uangd:", kembalian1);
    // const kembalian2 = await beliPromise(kembalian1, 12000);
    // console.log("Sisa uang", kembalian2);
  } catch (error) {
    throw error;
  }
}

panggilBeli();

async function panggilBeli2() {
  try {
    const [kembalian1, kembalian2] = await Promise.all([
      beliPromise(50000, 5000),
      beliPromise(30000, 10000),
    ]);
    console.log(kembalian1, kembalian2);
  } catch (error) {
    throw error;
  }
}
panggilBeli2();
