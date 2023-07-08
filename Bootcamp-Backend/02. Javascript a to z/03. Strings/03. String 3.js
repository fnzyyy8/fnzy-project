// ! Math.Round : Pembulatan yang menyesuaikan.

const pembulatanBawah = 3.172;
const pembulatanAtas = 3.791;

console.log("===Round===");
console.log(`Pembuatalan ke bawah dari 3.172 = ${Math.round(pembulatanBawah)}`);
console.log(`Pembuatalan ke atas dari 3.791 = ${Math.round(pembulatanAtas)}`);

// ! Math.Ceil : Pembulatan ke atas.

console.log("===Ceil===");
console.log(`Math.ceil dari 3.172 = ${Math.ceil(pembulatanBawah)}`);
console.log(`Math.ceil dari 3.791 = ${Math.ceil(pembulatanAtas)}`);

// ! Math.Floor : Pembulatan ke bawah.

console.log("===Floor===");
console.log(`Math.Floor dari 3.172 = ${Math.floor(pembulatanBawah)}`);
console.log(`Math.Floor dari 3.791 = ${Math.floor(pembulatanAtas)}`);

// * Uji Coba math.Random
const randomNumber = Math.round(Math.random() * 10);
const status = randomNumber > 3;

console.log(randomNumber);
console.log(status);
